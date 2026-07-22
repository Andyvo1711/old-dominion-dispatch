import Image from "next/image";
import Link from "next/link";
import {
  getFeaturedArticle,
  getLatestByCategory,
} from "@/lib/content";
import { CATEGORIES, HOMEPAGE_CATEGORY_ORDER } from "@/lib/categories";
import CategorySection from "@/components/CategorySection";

export default function HomePage() {
  const hero = getFeaturedArticle();
  const heroCategory = CATEGORIES[hero.category];

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-700 text-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none bg-ledger-lines" />
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 relative">
          <Link
            href={`/article/${hero.slug}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          >
            <div>
              <span className="inline-block font-utility text-[11px] uppercase tracking-[0.2em] text-brass-300 border border-brass-500/40 rounded-full px-3 py-1">
                Top Story &middot; {heroCategory.name}
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-tight mt-5 group-hover:text-brass-300 transition-colors">
                {hero.title}
              </h1>
              <p className="font-body text-cream-100/80 text-base sm:text-lg mt-5 leading-relaxed">
                {hero.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-utility text-sm mt-6 text-brass-300">
                Read the full dispatch
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  &rarr;
                </span>
              </span>
            </div>
            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-brass-500/30 shadow-2xl">
              <Image
                src={hero.coverImage}
                alt={hero.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Link>
        </div>
      </section>

      {/* Category sections, in the specified homepage order */}
      <div className="mx-auto max-w-6xl px-4">
        {HOMEPAGE_CATEGORY_ORDER.map((slug) => {
          const category = CATEGORIES[slug];
          const latest = getLatestByCategory(slug, 5);
          if (latest.length === 0) return null;
          const [featured, ...rest] = latest;
          return (
            <CategorySection
              key={slug}
              category={category}
              featured={featured}
              rest={rest}
            />
          );
        })}
      </div>
    </div>
  );
}
