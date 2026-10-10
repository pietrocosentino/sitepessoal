import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { useLocale } from "../../i18n/LocaleContext";
export function ContactLinks() {
  const {
    t,
    content: { profile },
  } = useLocale();
  return (
    <address className="contact-channel-list">
      <a href={`mailto:${profile.email}`} aria-label={t.email} title={t.email}>
        <Mail size={28} aria-hidden="true" />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.linkedin}
        title={t.linkedin}
      >
        <Linkedin size={28} aria-hidden="true" />
      </a>
      <a
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsapp}
        title={t.whatsapp}
      >
        <MessageCircle size={28} aria-hidden="true" />
      </a>
    </address>
  );
}
