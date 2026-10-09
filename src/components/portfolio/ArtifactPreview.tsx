import type { ProjectArtifact } from "../../types/portfolio";
import { useLocale } from "../../i18n/LocaleContext";
export function ArtifactPreview({ artifact }: { artifact: ProjectArtifact }) {
  const { t } = useLocale();
  return (
    <figure className="artifact-preview">
      <figcaption>
        <h3>{artifact.title}</h3>
        <p>{t.artifactNote}</p>
      </figcaption>
      <ol
        className={
          artifact.kind === "flow" ? "artifact-flow" : "artifact-criteria"
        }
      >
        {artifact.lines.map((line, index) => (
          <li key={line}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p>{line}</p>
          </li>
        ))}
      </ol>
    </figure>
  );
}
