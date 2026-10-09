import { useId } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { localeOptions, isLocale } from "../i18n/locales";
import type { Locale } from "../i18n/types";
export function LanguageSelector({
  onChange,
}: {
  onChange: (locale: Locale) => void;
}) {
  const { locale, t } = useLocale();
  const id = useId();
  return (
    <div className="language-selector">
      <label className="sr-only" htmlFor={id}>
        {t.language}
      </label>
      <select
        id={id}
        value={locale}
        onChange={(event) => {
          if (isLocale(event.target.value)) onChange(event.target.value);
        }}
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.flag} {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
