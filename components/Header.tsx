import Link from "next/link";
import { CATEGORY_LIST } from "@/lib/categories";
import Seal from "./Seal";

export default function Header() {
  return (
    <header className="bg-navy-700 text-cream-50 sticky top-0 z-40 shadow-[0_2px_12px_rgba(10,18,35,0.35)]">
      <div className="border-b border-brass-500/30">
        <div className="mx-auto max-w-6xl px-4 py-1.5 flex items-center justify-between text-[11px] font-utility tracking-wide text-cream-200/80">
          <span>Richmond, Virginia</span>
          <span className="hidden sm:inline">
            The Commonwealth&rsquo;s Daily Record — Since the Founding
          </span>
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 py-5 flex items-center gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <Seal className="h-12 w-12 shrink-0 transition-transform group-hover:rotate-6" />
          <div className="leading-none">
            <div className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Old Dominion Dispatch
            </div>
            <div className="font-utility text-[11px] tracking-[0.2em] text-brass-300 uppercase mt-1">
              Virginia &middot; News &amp; Commonwealth Affairs
            </div>
          </div>
        </Link>
      </div>
      <nav className="border-t border-brass-500/30 bg-navy-800/60">
        <div className="mx-auto max-w-6xl px-4">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 py-2.5 font-utility text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-brass-300 transition-colors"
              >
                Home
              </Link>
            </li>
            {CATEGORY_LIST.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="hover:text-brass-300 transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
