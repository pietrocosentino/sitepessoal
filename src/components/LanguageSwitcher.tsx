import { useLocale } from "../i18n/LocaleContext";
import { localeOptions } from "../i18n/locales";
import type { Locale } from "../i18n/types";

export function LanguageSwitcher({
  onChange,
}: {
  onChange: (locale: Locale) => void;
}) {
  const { locale, t } = useLocale();
  return (
    <div className="language-switcher" role="group" aria-label={t.language}>
      {localeOptions.map((option) => (
        <button
          key={option.code}
          type="button"
          data-locale={option.code}
          aria-label={option.name}
          title={option.name}
          aria-pressed={locale === option.code}
          onClick={() => onChange(option.code)}
        >
          <img src={option.flag} alt="" width="28" height="20" />
        </button>
      ))}
    </div>
  );
}
