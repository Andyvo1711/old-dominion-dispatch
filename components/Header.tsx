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
        <form
          action="/search"
          method="get"
          role="search"
          className="ml-auto hidden sm:flex items-center"
        >
          <label htmlFor="site-search" className="sr-only">
            Search articles
          </label>
          <div className="flex items-center bg-cream-50/10 border border-brass-500/40 rounded-md focus-within:border-brass-300 focus-within:bg-cream-50/15 transition-colors">
            <input
              id="site-search"
              type="search"
              name="q"
              placeholder="Search the Dispatch…"
              autoComplete="off"
              className="bg-transparent px-3 py-2 w-56 lg:w-72 font-utility text-sm text-cream-50 placeholder:text-cream-200/60 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Search"
              className="px-3 py-2 text-brass-300 hover:text-cream-50 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </div>
        </form>
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
          <form action="/search" method="get" role="search" className="sm:hidden pb-3">
            <label htmlFor="site-search-m" className="sr-only">Search articles</label>
            <input
              id="site-search-m"
              type="search"
              name="q"
              placeholder="Search the Dispatch…"
              className="w-full bg-cream-50/10 border border-brass-500/40 rounded-md px-3 py-2 font-utility text-sm text-cream-50 placeholder:text-cream-200/60 focus:outline-none focus:border-brass-300"
            />
          </form>
        </div>
      </nav>
    </header>
  );
}
