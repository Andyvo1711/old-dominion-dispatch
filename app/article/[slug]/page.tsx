import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
  renderMarkdown,
  formatDate,
} from "@/lib/content";
import { CATEGORIES } from "@/lib/categories";
import ArticleCard from "@/components/ArticleCard";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: `${article.title} — Old Dominion Dispatch`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  const category = CATEGORIES[article.category];
  const related = getRelatedArticles(article, 3);
  const html = await renderMarkdown(article.content);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-6">
        <Link
          href={`/category/${category.slug}`}
          className="font-utility text-xs uppercase tracking-[0.15em] text-brick-600 font-semibold hover:text-navy-700 transition-colors"
        >
          {category.name}
        </Link>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl font-bold text-navy-700 leading-tight">
        {article.title}
      </h1>

      <div className="flex items-center gap-3 mt-5 font-utility text-sm text-ink/60">
        <time dateTime={article.date}>{formatDate(article.date)}</time>
        <span aria-hidden>&middot;</span>
        <span>{category.name}</span>
      </div>

      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mt-8 border border-navy-700/10 bg-navy-100">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(min-width: 768px) 768px, 100vw"
          priority
          className="object-cover"
        />
      </div>
      <p className="font-utility text-xs text-ink/50 mt-2">
        {article.imageCredit}
      </p>

      <div
        className="prose-article font-body text-[17px] mt-8"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {related.length > 0 && (
        <section className="mt-16 pt-10 border-t border-navy-700/10">
          <h2 className="font-display text-xl font-bold text-navy-700 mb-6">
            More from {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
