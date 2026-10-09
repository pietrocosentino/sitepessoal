import type { Locale } from "./types";
export const supportedLocales: readonly Locale[] = ["pt", "en", "es"];
export const localeOptions = [
  { code: "pt", name: "Português", flag: "🇧🇷", htmlLang: "pt-BR" },
  { code: "en", name: "English", flag: "🇺🇸", htmlLang: "en" },
  { code: "es", name: "Español", flag: "🇪🇸", htmlLang: "es" },
] as const;
export function isLocale(value: unknown): value is Locale {
  return value === "pt" || value === "en" || value === "es";
}
export function browserLocale(language: string): Locale {
  const code = language.split("-")[0].toLowerCase();
  return isLocale(code) ? code : "pt";
}
export function storedLocale(
  storage: Pick<Storage, "getItem">,
): Locale | undefined {
  try {
    const value = storage.getItem("portfolio-language");
    return isLocale(value) ? value : undefined;
  } catch {
    return undefined;
  }
}
