import Link from "next/link";

export default function Pagination({
  basePath,
  currentPage,
  totalPages,
}: {
  basePath: string;
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pageHref = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex items-center justify-center gap-2 font-utility text-sm"
    >
      <Link
        href={pageHref(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md border border-navy-700/15 ${
          currentPage === 1
            ? "pointer-events-none opacity-40"
            : "hover:bg-navy-700 hover:text-cream-50 transition-colors"
        }`}
      >
        &larr; Prev
      </Link>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={pageHref(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`h-9 w-9 flex items-center justify-center rounded-md border transition-colors ${
            page === currentPage
              ? "bg-brick-600 border-brick-600 text-cream-50"
              : "border-navy-700/15 hover:bg-navy-700 hover:text-cream-50"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={pageHref(Math.min(totalPages, currentPage + 1))}
        aria-disabled={currentPage === totalPages}
        className={`px-3 py-2 rounded-md border border-navy-700/15 ${
          currentPage === totalPages
            ? "pointer-events-none opacity-40"
            : "hover:bg-navy-700 hover:text-cream-50 transition-colors"
        }`}
      >
        Next &rarr;
      </Link>
    </nav>
  );
}
