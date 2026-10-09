import { createServer } from "vite";
import { writeFileSync } from "node:fs";
const server = await createServer({
  server: { middlewareMode: true },
  optimizeDeps: { noDiscovery: true, include: [] },
  appType: "custom",
});
try {
  const { contentByLocale } = await server.ssrLoadModule(
    "/src/i18n/LocaleContext.tsx",
  );
  const { labels } = await server.ssrLoadModule("/src/i18n/labels.ts");
  writeFileSync(
    process.argv[2] ?? "resume-data.json",
    JSON.stringify({ contentByLocale, labels }, null, 2),
  );
} finally {
  await server.close();
}
