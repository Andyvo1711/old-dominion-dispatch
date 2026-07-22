import Image from "next/image";
import Link from "next/link";
import { ArticleSummary } from "@/types/article";

export default function CompactArticleRow({
  article,
}: {
  article: ArticleSummary;
}) {
  return (
    <Link
      href={`/article/${article.slug}`}
      className="group flex items-center gap-4 py-3 border-b border-brass-500/25 last:border-b-0"
    >
      <div className="relative shrink-0 w-20 h-16 sm:w-24 sm:h-[4.5rem] rounded-md overflow-hidden bg-navy-100">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          sizes="120px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h4 className="font-display text-[15px] sm:text-base font-semibold text-navy-700 leading-snug group-hover:text-brick-600 transition-colors">
        {article.title}
      </h4>
    </Link>
  );
}
