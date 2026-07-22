import Image from "next/image";
import Link from "next/link";
import { ArticleSummary } from "@/types/article";
import { CATEGORIES } from "@/lib/categories";

export default function ArticleCard({ article }: { article: ArticleSummary }) {
  const category = CATEGORIES[article.category];
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex flex-col bg-cream-50 rounded-xl overflow-hidden border border-navy-700/10 shadow-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-navy-100">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-1 p-5">
        <span className="font-utility text-[11px] uppercase tracking-[0.15em] text-brick-600 font-semibold">
          {category.name}
        </span>
        <h3 className="font-display text-lg font-bold text-navy-700 mt-2 leading-snug group-hover:text-brick-600 transition-colors">
          {article.title}
        </h3>
        <p className="font-body text-sm text-ink/70 mt-2 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
      </div>
    </Link>
  );
}
