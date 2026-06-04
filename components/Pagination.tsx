import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath: string;
};

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  const sep = basePath.includes("?") ? "&" : "?";
  return (
    <nav className="flex items-center justify-center gap-1 py-8" aria-label="Pagination">
      {currentPage > 1 && (
        <Link
          href={`${basePath}${sep}page=${currentPage - 1}`}
          className="px-3 py-2 rounded-lg font-ui text-sm text-muted hover:text-accent hover:bg-surface transition-colors"
        >
          ← Prev
        </Link>
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`${basePath}${sep}page=${page}`}
          className={`w-9 h-9 flex items-center justify-center rounded-lg font-ui text-sm transition-colors ${
            page === currentPage
              ? "bg-accent text-white"
              : "text-muted hover:text-accent hover:bg-surface"
          }`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={`${basePath}${sep}page=${currentPage + 1}`}
          className="px-3 py-2 rounded-lg font-ui text-sm text-muted hover:text-accent hover:bg-surface transition-colors"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}
