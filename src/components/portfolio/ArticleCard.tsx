import { ChevronDown } from "lucide-react";
import type { InsightArticle } from "../../data/insights";
import { useLocale } from "../../i18n/LocaleContext";
export function ArticleCard({
  article,
  expanded,
  onToggle,
}: {
  article: InsightArticle;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { t } = useLocale();
  const contentId = `article-${article.id}`;
  return (
    <article className="insight-card">
      <p className="eyebrow">
        {article.categoryLabel} · {article.readTime}
      </p>
      <h2>{article.title}</h2>
      <p>{article.lead}</p>
      <button
        type="button"
        className="text-link"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={contentId}
      >
        {expanded ? t.collapseArticle : t.readArticle}
        <ChevronDown size={16} aria-hidden="true" />
      </button>
      <div id={contentId} hidden={!expanded} className="article-content">
        {article.content.split("\n\n").map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
