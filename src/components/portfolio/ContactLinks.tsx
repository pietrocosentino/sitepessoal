import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/profile";
export function ContactLinks() {
  return (
    <div className="contact-actions">
      <a className="primary-link" href={`mailto:${profile.email}`}>
        Enviar um e-mail <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a
        className="text-link"
        href={profile.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn <ArrowUpRight size={17} aria-hidden="true" />
      </a>
      <a
        className="text-link"
        href={profile.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp <ArrowUpRight size={17} aria-hidden="true" />
      </a>
    </div>
  );
}
