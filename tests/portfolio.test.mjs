import test, { after, before } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { createServer } from "vite";
import { createElement, act } from "react";
import { createRoot } from "react-dom/client";
import { renderToStaticMarkup } from "react-dom/server";
import { JSDOM } from "jsdom";
let server;
before(async () => {
  server = await createServer({
    server: { middlewareMode: true },
    optimizeDeps: { noDiscovery: true, include: [] },
    appType: "custom",
  });
});
after(async () => {
  await server.close();
});

test("legacy routes, trailing slashes and hash routes resolve without mistaking content anchors for pages", async () => {
  const { resolvePath, readLocation, projectSlug } = await server.ssrLoadModule(
    "/src/routing/routes.ts",
  );
  for (const path of ["/sobre", "/sobre/", "/metodo", "/como-funciona"])
    assert.equal(resolvePath(path), "/trajetoria");
  for (const path of ["/experiencia", "/cases", "/solucoes"])
    assert.equal(resolvePath(path), "/projetos");
  assert.equal(readLocation({ pathname: "/", hash: "#sobre" }), "/trajetoria");
  assert.equal(readLocation({ pathname: "/", hash: "#conteudo" }), "/");
  assert.equal(projectSlug("/projetos/exemplo"), "exemplo");
  assert.equal(projectSlug("/projetos/exemplo/invalido"), undefined);
  assert.equal(resolvePath("/ausente"), "/ausente");
});

test("project cases and resume references are valid; examples are visibly distinguished from client evidence", async () => {
  const { projects } = await server.ssrLoadModule("/src/data/projects.ts");
  const { profile } = await server.ssrLoadModule("/src/data/profile.ts");
  const { ProjectDetailPage } = await server.ssrLoadModule(
    "/src/pages/ProjectDetailPage.tsx",
  );
  assert.equal(new Set(projects.map((p) => p.slug)).size, projects.length);
  for (const project of projects) {
    const html = renderToStaticMarkup(
      createElement(ProjectDetailPage, { slug: project.slug, onNavigate() {} }),
    );
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    assert(html.includes("Exemplo ilustrativo reconstruído"));
    assert(html.includes(project.company));
    assert(!html.includes("Homologado e executado"));
  }
  const missing = renderToStaticMarkup(
    createElement(ProjectDetailPage, { slug: "ausente", onNavigate() {} }),
  );
  assert(missing.includes("Página não encontrada"));
  const resume = "public" + profile.resumePath;
  assert(existsSync(resume));
  assert.equal(readFileSync(resume).subarray(0, 5).toString(), "%PDF-");
});

test("primary pages render one h1 and a readable professional profile", async () => {
  for (const [file, name] of [
    ["HomePage", "HomePage"],
    ["ProjectsPage", "ProjectsPage"],
    ["CareerPage", "CareerPage"],
    ["ContactPage", "ContactPage"],
    ["InsightsPage", "InsightsPage"],
  ]) {
    const module = await server.ssrLoadModule(`/src/pages/${file}.tsx`);
    const html = renderToStaticMarkup(
      createElement(module[name], { onNavigate() {} }),
    );
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, file);
  }
});

function installDOM(url = "http://localhost/") {
  const dom = new JSDOM(
    '<div id="root"></div><meta name="description" content="">',
    { url },
  );
  globalThis.window = dom.window;
  globalThis.document = dom.window.document;
  globalThis.HTMLElement = dom.window.HTMLElement;
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  window.scrollTo = () => {};
  return dom;
}

async function settle() {
  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 30));
  });
}

test("navigation updates content, document title, focus and history; project links resolve; menu closes with Escape", async () => {
  const dom = installDOM();
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const root = createRoot(document.getElementById("root"));
  try {
    await act(async () => {
      root.render(createElement(App));
    });
    assert(document.querySelector("h1").textContent.includes("Sênior"));
    const click = async (selector) => {
      await act(async () => {
        document.querySelector(selector).dispatchEvent(
          new window.MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            button: 0,
          }),
        );
      });
      await settle();
    };
    await click('a[href="/projetos"]');
    assert.equal(window.location.pathname, "/projetos");
    assert.equal(
      document.querySelector("h1").textContent,
      "Projetos e contextos de atuação",
    );
    assert.equal(document.activeElement.id, "conteudo");
    await click(".project-card a");
    assert(window.location.pathname.startsWith("/projetos/"));
    assert(document.title.includes("Integração"));
    window.history.back();
    await settle();
    assert.equal(window.location.pathname, "/projetos");
    const menu = document.querySelector("details");
    menu.open = true;
    await act(async () => {
      window.dispatchEvent(
        new window.KeyboardEvent("keydown", { key: "Escape" }),
      );
    });
    assert.equal(menu.open, false);
    assert.equal(document.activeElement.tagName, "SUMMARY");
    const download = document.querySelector("a[download]");
    assert(download.getAttribute("href").endsWith(".pdf"));
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
  }
});

test("SiteLink preserves modifier clicks, external targets and downloads", async () => {
  const dom = installDOM();
  const { SiteLink } = await server.ssrLoadModule(
    "/src/components/SiteLink.tsx",
  );
  const root = createRoot(document.getElementById("root"));
  let navigations = 0;
  const onNavigate = () => {
    navigations++;
  };
  try {
    for (const [props, eventProps, expected] of [
      [{}, { ctrlKey: true }, 0],
      [{ target: "_blank" }, {}, 0],
      [{ download: true }, {}, 0],
      [{}, {}, 1],
    ]) {
      await act(async () => {
        root.render(
          createElement(
            SiteLink,
            { href: "/projetos", onNavigate, ...props },
            "Projetos",
          ),
        );
      });
      const link = document.querySelector("a");
      const event = new window.MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        button: 0,
        ...eventProps,
      });
      // Prevent jsdom's unimplemented native navigation after React's handler runs.
      document.addEventListener("click", (e) => e.preventDefault(), {
        once: true,
      });
      await act(async () => link.dispatchEvent(event));
      assert.equal(navigations, expected);
    }
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
  }
});

test("Insights category filtering and article disclosure update accessible state", async () => {
  const dom = installDOM();
  const { InsightsPage } = await server.ssrLoadModule(
    "/src/pages/InsightsPage.tsx",
  );
  const root = createRoot(document.getElementById("root"));
  try {
    await act(async () => {
      root.render(createElement(InsightsPage, { onNavigate() {} }));
    });
    const category = [...document.querySelectorAll("button")].find(
      (b) => b.textContent === "Requisitos",
    );
    await act(async () => category.click());
    assert.equal(category.getAttribute("aria-pressed"), "true");
    const articleButtons = document.querySelectorAll("button[aria-expanded]");
    assert.equal(articleButtons.length, 1);
    await act(async () => articleButtons[0].click());
    assert.equal(articleButtons[0].getAttribute("aria-expanded"), "true");
    assert(
      document.body.textContent.includes(
        "São conceitos complementares, não equivalentes",
      ),
    );
  } finally {
    await act(async () => root.unmount());
    dom.window.close();
  }
});
