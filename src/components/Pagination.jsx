export default function Pagination({ page, totalResults, pageSize, onPageChange, disabled }) {
  const totalPages = Math.ceil((totalResults || 0) / pageSize)
  const canPrev = page > 1
  const canNext = page < totalPages

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 disabled:opacity-50"
        onClick={() => onPageChange(page - 1)}
        disabled={!canPrev || disabled}
      >
        Prev
      </button>
      <span className="text-sm opacity-80">Page {page} of {totalPages || 1}</span>
      <button
        className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 disabled:opacity-50"
        onClick={() => onPageChange(page + 1)}
        disabled={!canNext || disabled}
      >
        Next
      </button>
    </div>
  )
}
