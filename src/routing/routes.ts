import { isLocale } from "../i18n/locales";
import type { Locale } from "../i18n/types";
const aliases: Readonly<Record<string, string>> = {
  "/sobre": "/trajetoria",
  "/experiencia": "/projetos",
  "/cases": "/projetos",
  "/solucoes": "/projetos",
  "/metodologia": "/trajetoria",
  "/como-funciona": "/trajetoria",
  "/metodo": "/trajetoria",
};
export function resolvePath(path: string) {
  const normalized = path.replace(/\/+$/, "") || "/";
  return aliases[normalized] ?? normalized;
}
export function parseLocalizedPath(pathname: string): {
  locale?: Locale;
  path: string;
} {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0]))
    return {
      locale: segments[0],
      path: resolvePath("/" + segments.slice(1).join("/")),
    };
  return { path: resolvePath(pathname) };
}
export function localizedPath(path: string, locale: Locale) {
  const canonical = parseLocalizedPath(path).path;
  return locale === "pt"
    ? canonical
    : `/${locale}${canonical === "/" ? "" : canonical}`;
}
export function readLocation(location: Pick<Location, "pathname" | "hash">) {
  const path = parseLocalizedPath(location.pathname).path;
  if (
    path === "/" &&
    /^#\/?(?:sobre|experiencia|cases|solucoes|metodologia|como-funciona|metodo|projetos|trajetoria|contato)\/?$/.test(
      location.hash,
    )
  ) {
    return resolvePath("/" + location.hash.slice(1).replace(/^\//, ""));
  }
  return path;
}
export function projectSlug(path: string) {
  return /^\/projetos\/([^/]+)$/.exec(path)?.[1];
}
