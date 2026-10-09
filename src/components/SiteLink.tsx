import type { AnchorHTMLAttributes } from "react";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  onNavigate: (path: string) => void;
};

export function SiteLink({
  href,
  onNavigate,
  onClick,
  ...props
}: SiteLinkProps) {
  return (
    <a
      {...props}
      href={href}
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
