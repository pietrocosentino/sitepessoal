import type { AnchorHTMLAttributes } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { localizedPath } from "../routing/routes";
import type { Navigate } from "../types/portfolio";
type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  onNavigate: Navigate;
};
export function SiteLink({
  href,
  onNavigate,
  onClick,
  ...props
}: SiteLinkProps) {
  const { locale } = useLocale();
  return (
    <a
      {...props}
      href={localizedPath(href, locale)}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          (props.target && props.target !== "_self") ||
          props.download !== undefined
        )
          return;
        event.preventDefault();
        onNavigate(href);
      }}
    />
  );
}
