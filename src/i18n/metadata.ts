import { localeOptions } from "./locales";
import { localizedPath } from "../routing/routes";
import type { Locale } from "./types";
const origin = "https://www.pietrocosentino.com.br";
function meta(property: string, content: string) {
  document.querySelector(`meta[${property}]`)?.setAttribute("content", content);
}
export function updateMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
}) {
  document.documentElement.lang = localeOptions.find(
    (option) => option.code === locale,
  )!.htmlLang;
  document.title = title;
  meta('name="description"', description);
  meta('property="og:title"', title);
  meta('property="og:description"', description);
  const links = [
    { rel: "canonical", href: origin + localizedPath(path, locale) },
    ...localeOptions.map((option) => ({
      rel: "alternate",
      href: origin + localizedPath(path, option.code),
      hreflang: option.htmlLang,
    })),
    {
      rel: "alternate",
      href: origin + localizedPath(path, "pt"),
      hreflang: "x-default",
    },
  ];
  document
    .querySelectorAll("link[data-portfolio-locale]")
    .forEach((link) => link.remove());
  for (const attributes of links) {
    const link = document.createElement("link");
    for (const [name, value] of Object.entries(attributes))
      link.setAttribute(name, value);
    link.dataset.portfolioLocale = "true";
    document.head.append(link);
  }
}
