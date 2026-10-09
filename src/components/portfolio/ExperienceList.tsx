import type { Experience } from "../../types/portfolio";
export function ExperienceList({
  items,
  compact = false,
}: {
  items: readonly Experience[];
  compact?: boolean;
}) {
  return (
    <ol className="experience-list">
      {items.map((item) => (
        <li key={item.company}>
          <div>
            <p className="project-meta">{item.period}</p>
            <h3>{item.role}</h3>
            <p className="experience-company">{item.company}</p>
          </div>
          {!compact && (
            <ul>
              {item.contributions.map((contribution) => (
                <li key={contribution}>{contribution}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
