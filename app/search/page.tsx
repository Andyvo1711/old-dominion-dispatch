import type { Metadata } from "next";
import { searchArticles } from "@/lib/content";
import ArticleCard from "@/components/ArticleCard";
import Pagination from "@/components/Pagination";

const PAGE_SIZE = 9;

export const metadata: Metadata = {
  title: "Search — Old Dominion Dispatch",
};

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const query = (searchParams.q ?? "").trim().slice(0, 100);
  const results = query ? searchArticles(query) : [];
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const currentPage = Math.min(
    Math.max(1, parseInt(searchParams.page ?? "1", 10) || 1),
    totalPages
  );
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageResults = results.slice(start, start + PAGE_SIZE);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-7 w-1.5 rounded-full bg-brick-600" aria-hidden />
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-700">
          Search
        </h1>
      </div>

      <form action="/search" method="get" role="search" className="flex gap-2 max-w-xl mb-8">
        <label htmlFor="search-page-q" className="sr-only">
          Search articles
        </label>
        <input
          id="search-page-q"
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Search the Dispatch…"
          className="flex-1 rounded-md border border-navy-700/20 bg-cream-50 px-4 py-2.5 font-utility text-sm text-ink focus:outline-none focus:border-brick-600"
        />
        <button
          type="submit"
          className="font-utility text-sm uppercase tracking-wide bg-brick-600 text-cream-50 px-5 py-2.5 rounded-md hover:bg-brick-700 transition-colors"
        >
          Search
        </button>
      </form>

      {!query ? (
        <p className="font-body text-ink/70">
          Type a keyword above to search every dispatch.
        </p>
      ) : results.length === 0 ? (
        <p className="font-body text-ink/70">
          No dispatches matched &ldquo;{query}&rdquo;. Try a different keyword.
        </p>
      ) : (
        <>
          <p className="font-utility text-sm text-ink/60 mb-6">
            {results.length} result{results.length === 1 ? "" : "s"} for
            &ldquo;{query}&rdquo;
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {pageResults.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <Pagination
            basePath="/search"
            query={query}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </>
      )}
    </div>
  );
}
