import Image from "next/image";
import Link from "next/link";
import { ArticleSummary, CategoryMeta } from "@/types/article";
import CompactArticleRow from "./CompactArticleRow";

export default function CategorySection({
  category,
  featured,
  rest,
}: {
  category: CategoryMeta;
  featured: ArticleSummary;
  rest: ArticleSummary[];
}) {
  return (
    <section className="py-10 border-t border-navy-700/10 first:border-t-0 first:pt-2">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="h-6 w-1.5 rounded-full bg-brick-600" aria-hidden />
          <h2 className="font-display text-2xl font-bold text-navy-700">
            {category.name}
          </h2>
        </div>
        <Link
          href={`/category/${category.slug}`}
          className="font-utility text-xs uppercase tracking-[0.15em] text-brick-600 hover:text-navy-700 transition-colors whitespace-nowrap"
        >
          View section &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
        {/* Featured — left, fixed 16:9 ratio so it never stretches taller than its content */}
        <Link
          href={`/article/${featured.slug}`}
          className="group lg:col-span-3 flex flex-col rounded-xl overflow-hidden bg-cream-50 border border-navy-700/10 shadow-card hover:shadow-lg transition-shadow"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden bg-navy-100">
            <Image
              src={featured.coverImage}
              alt={featured.title}
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              priority={false}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-700 leading-snug group-hover:text-brick-600 transition-colors">
              {featured.title}
            </h3>
            <p className="font-body text-sm sm:text-[15px] text-ink/70 mt-3 leading-relaxed line-clamp-3">
              {featured.excerpt}
            </p>
          </div>
        </Link>

        {/* Companion list — right, fixed-height rows keep it visually balanced against the image */}
        <div className="lg:col-span-2 flex flex-col justify-center bg-cream-50 rounded-xl border border-navy-700/10 shadow-card px-5 py-2">
          {rest.map((article) => (
            <CompactArticleRow key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
