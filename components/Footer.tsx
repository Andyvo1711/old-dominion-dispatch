import Link from "next/link";
import { CATEGORY_LIST } from "@/lib/categories";
import Seal from "./Seal";

export default function Footer() {
  return (
    <footer className="bg-navy-800 text-cream-100 mt-20">
      <div className="mx-auto max-w-6xl px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
        <div className="flex items-start gap-3">
          <Seal className="h-11 w-11 shrink-0 opacity-90" />
          <div>
            <div className="font-display text-xl font-bold">
              Old Dominion Dispatch
            </div>
            <p className="font-utility text-sm text-cream-200/70 mt-2 leading-relaxed">
              Independent reporting on the people, institutions, and
              enterprise shaping the Commonwealth of Virginia.
            </p>
          </div>
        </div>
        <div>
          <div className="font-utility text-xs uppercase tracking-[0.2em] text-brass-300 mb-3">
            Sections
          </div>
          <ul className="space-y-2 font-utility text-sm">
            {CATEGORY_LIST.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="text-cream-200/80 hover:text-brass-300 transition-colors"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="font-utility text-xs uppercase tracking-[0.2em] text-brass-300 mb-3">
            The Dispatch
          </div>
          <ul className="space-y-2 font-utility text-sm text-cream-200/80">
            <li>Richmond, Virginia</li>
            <li>Reporting since the founding of the Old Dominion</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream-100/10">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 font-utility text-xs text-cream-200/60">
          <span>
            &copy; {new Date().getFullYear()} Old Dominion Dispatch. All
            rights reserved.
          </span>
          <span>Est. 1607 &middot; Commonwealth of Virginia</span>
        </div>
      </div>
    </footer>
  );
}
