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
export function readLocation(location: Pick<Location, "pathname" | "hash">) {
  if (
    location.pathname === "/" &&
    /^#\/?(?:sobre|experiencia|cases|solucoes|metodologia|como-funciona|metodo|projetos|trajetoria|insights|contato)\/?$/.test(
      location.hash,
    )
  ) {
    return resolvePath("/" + location.hash.slice(1).replace(/^\//, ""));
  }
  return resolvePath(location.pathname);
}
export function projectSlug(path: string) {
  const match = /^\/projetos\/([^/]+)$/.exec(path);
  return match?.[1];
}
