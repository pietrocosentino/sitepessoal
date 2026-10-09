import { Download } from "lucide-react";
import { useLocale } from "../../i18n/LocaleContext";
export function ResumeLink({
  className = "primary-link",
}: {
  className?: string;
}) {
  const {
    t,
    content: { profile },
  } = useLocale();
  return (
    <a className={className} href={profile.resumePath} download>
      <Download size={17} aria-hidden="true" />
      {t.resume}
      <span className="file-type">PDF</span>
    </a>
  );
}
