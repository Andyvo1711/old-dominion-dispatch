import { notFound } from "next/navigation";
import { getArticlesByCategory } from "@/lib/content";
import { CATEGORIES, isCategorySlug } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";

const PAGE_SIZE = 9;

export function generateStaticParams() {
  return Object.keys(CATEGORIES).map((slug) => ({ slug }));
}

export default function CategoryPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page?: string };
}) {
  if (!isCategorySlug(params.slug)) {
    notFound();
  }

  const category = CATEGORIES[params.slug];
  const articles = getArticlesByCategory(params.slug);
  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const currentPage = Math.min(
    Math.max(1, parseInt(searchParams.page ?? "1", 10) || 1),
    totalPages
  );
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageArticles = articles.slice(start, start + PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center gap-3 mb-10">
        <span className="h-7 w-1.5 rounded-full bg-brick-600" aria-hidden />
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-700">
          {category.name}
        </h1>
      </div>

      {pageArticles.length === 0 ? (
        <p className="font-body text-ink/70">
          No dispatches have been filed in this section yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {pageArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      <Pagination
        basePath={`/category/${category.slug}`}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
