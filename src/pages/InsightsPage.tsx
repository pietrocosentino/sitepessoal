import { useState } from "react";
import { useLocale } from "../i18n/LocaleContext";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ArticleCard } from "../components/portfolio/ArticleCard";
import type { PageProps } from "../types/portfolio";
export function InsightsPage(_props: PageProps) {
  const {
    t,
    content: { categories, articles },
  } = useLocale();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);
  return (
    <div className="professional-home portfolio-page">
      <div className="editorial-container">
        <PageIntro eyebrow={t.insightsEyebrow} title={t.insights}>
          <p>{t.insightsCopy}</p>
        </PageIntro>
        <div
          className="category-filters"
          role="group"
          aria-label={t.filterArticles}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              aria-pressed={selectedCategory === category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setActiveArticleId(null);
              }}
            >
              {category.label}
            </button>
          ))}
        </div>
        <p className="filter-count" role="status">
          {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? t.article : t.articles}
        </p>
        <div className="insights-grid">
          {filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              expanded={activeArticleId === article.id}
              onToggle={() =>
                setActiveArticleId(
                  activeArticleId === article.id ? null : article.id,
                )
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
