import { Download } from "lucide-react";
import { profile } from "../../data/profile";
export function ResumeLink({
  className = "primary-link",
}: {
  className?: string;
}) {
  return (
    <a className={className} href={profile.resumePath} download>
      <Download size={17} aria-hidden="true" />
      Baixar currículo <span className="file-type">PDF</span>
    </a>
  );
}
