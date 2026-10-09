import type { ProjectArtifact } from "../../types/portfolio";
export function ArtifactPreview({ artifact }: { artifact: ProjectArtifact }) {
  return (
    <figure className="artifact-preview">
      <figcaption>
        <h3>{artifact.title}</h3>
        <p>
          Exemplo ilustrativo reconstruído para o portfólio. Não é um documento
          de cliente nem evidência de resultado.
        </p>
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
