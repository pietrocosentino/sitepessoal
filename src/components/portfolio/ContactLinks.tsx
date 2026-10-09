import { ArrowUpRight } from "lucide-react";
import { useLocale } from "../../i18n/LocaleContext";
export function ContactLinks() {
  const {
    t,
    content: { profile },
  } = useLocale();
  return (
    <address className="contact-channel-list">
      <a href={`mailto:${profile.email}`}>
        <span>{t.email}</span>
        {profile.email}
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
        <span>{t.linkedin}</span>
        {profile.name}
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">
        <span>{t.whatsapp}</span>
        {profile.phone}
        <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </address>
  );
}
