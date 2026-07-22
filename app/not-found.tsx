import Link from "next/link";
import Seal from "@/components/Seal";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <Seal className="h-16 w-16 mx-auto mb-6 opacity-80" />
      <h1 className="font-display text-3xl font-bold text-navy-700">
        This dispatch could not be located
      </h1>
      <p className="font-body text-ink/70 mt-4">
        The page you&rsquo;re looking for may have been moved or never
        filed. Return to the front page to keep reading.
      </p>
      <Link
        href="/"
        className="inline-block mt-8 font-utility text-sm uppercase tracking-wide bg-brick-600 text-cream-50 px-5 py-2.5 rounded-md hover:bg-brick-700 transition-colors"
      >
        Back to the Dispatch
      </Link>
    </div>
  );
}
