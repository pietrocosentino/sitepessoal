import { useState } from "react";
import { categories, articles } from "../data/insights";
import { PageIntro } from "../components/portfolio/PageIntro";
import { ArticleCard } from "../components/portfolio/ArticleCard";
import type { PageProps } from "../types/portfolio";
export function InsightsPage(_props: PageProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeArticleId, setActiveArticleId] = useState<string | null>(null);
  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);
  return (
    <div className="professional-home portfolio-page">
      <div className="editorial-container">
        <PageIntro eyebrow="Reflexões profissionais" title="Insights">
          <p>
            Notas sobre requisitos, produto e comunicação entre negócio e
            tecnologia. Conteúdos de IA são apresentados como estudos de
            formação em andamento.
          </p>
        </PageIntro>
        <div
          className="category-filters"
          role="group"
          aria-label="Filtrar artigos por tema"
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
          {filteredArticles.length === 1 ? "artigo" : "artigos"}
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
