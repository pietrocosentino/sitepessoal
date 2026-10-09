import { createContext, useContext, type ReactNode } from "react";
import { labels } from "./labels";
import { ptContent } from "./pt";
import { enContent } from "./en";
import { esContent } from "./es";
import type { Locale, Labels, PortfolioContent } from "./types";
export const contentByLocale: Record<Locale, PortfolioContent> = {
  pt: ptContent,
  en: enContent,
  es: esContent,
};
const LocaleContext = createContext<{
  locale: Locale;
  t: Labels;
  content: PortfolioContent;
}>({ locale: "pt", t: labels.pt, content: ptContent });
export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  return (
    <LocaleContext.Provider
      value={{ locale, t: labels[locale], content: contentByLocale[locale] }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
export function useLocale() {
  return useContext(LocaleContext);
}
