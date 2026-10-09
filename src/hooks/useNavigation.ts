import { useCallback, useEffect, useState } from "react";
import {
  readLocation,
  resolvePath,
  parseLocalizedPath,
  localizedPath,
} from "../routing/routes";
import { storedLocale, browserLocale, isLocale } from "../i18n/locales";
import type { Locale } from "../i18n/types";
function preferredLocale() {
  try {
    return (
      storedLocale(window.localStorage) ??
      browserLocale(window.navigator.language)
    );
  } catch {
    return browserLocale(window.navigator.language);
  }
}
function readRoute() {
  return {
    path: readLocation(window.location),
    locale:
      parseLocalizedPath(window.location.pathname).locale ??
      (isLocale(window.history.state?.portfolioLocale)
        ? window.history.state.portfolioLocale
        : preferredLocale()),
  };
}
export function useNavigation() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const synchronize = () => setRoute(readRoute());
    window.addEventListener("popstate", synchronize);
    window.addEventListener("hashchange", synchronize);
    return () => {
      window.removeEventListener("popstate", synchronize);
      window.removeEventListener("hashchange", synchronize);
    };
  }, []);
  useEffect(() => {
    const canonical = localizedPath(route.path, route.locale);
    window.history.replaceState(
      { ...window.history.state, portfolioLocale: route.locale },
      "",
      canonical + window.location.search + window.location.hash,
    );
    try {
      window.localStorage.setItem("portfolio-language", route.locale);
    } catch {
      /* Browsing remains available if storage is disabled. */
    }
  }, [route.path, route.locale]);
  const navigate = useCallback(
    (path: string) => {
      const next = resolvePath(path);
      if (readLocation(window.location) === next) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }
      window.history.pushState(
        { portfolioLocale: route.locale },
        "",
        localizedPath(next, route.locale),
      );
      setRoute({ path: next, locale: route.locale });
    },
    [route.locale],
  );
  const changeLocale = useCallback(
    (locale: Locale) => {
      if (locale === route.locale) return;
      window.history.pushState(
        { portfolioLocale: locale },
        "",
        localizedPath(route.path, locale) +
          window.location.search +
          window.location.hash,
      );
      setRoute({ ...route, locale });
    },
    [route],
  );
  return {
    currentPath: route.path,
    locale: route.locale,
    navigate,
    changeLocale,
  };
}
