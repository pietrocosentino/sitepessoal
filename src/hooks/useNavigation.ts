import { useCallback, useEffect, useState } from "react";
import { readLocation, resolvePath } from "../routing/routes";

export function useNavigation() {
  const [currentPath, setCurrentPath] = useState(() =>
    readLocation(window.location),
  );
  useEffect(() => {
    const synchronize = () => setCurrentPath(readLocation(window.location));
    window.addEventListener("popstate", synchronize);
    window.addEventListener("hashchange", synchronize);
    return () => {
      window.removeEventListener("popstate", synchronize);
      window.removeEventListener("hashchange", synchronize);
    };
  }, []);
  useEffect(() => {
    if (window.location.pathname !== currentPath)
      window.history.replaceState(null, "", currentPath);
  }, [currentPath]);
  const navigate = useCallback((path: string) => {
    const next = resolvePath(path);
    if (readLocation(window.location) === next) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    window.history.pushState(null, "", next);
    setCurrentPath(next);
  }, []);
  return { currentPath, navigate };
}
