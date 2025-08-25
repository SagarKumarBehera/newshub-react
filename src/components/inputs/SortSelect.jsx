const SORTS = [
  { key: 'publishedAt', label: 'Published date' },
  { key: 'relevancy', label: 'Relevancy' },
  { key: 'popularity', label: 'Popularity' },
]

export default function SortSelect({ value = 'publishedAt', onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
      title="Sort By"
    >
      {SORTS.map((s) => (
        <option key={s.key} value={s.key}>{s.label}</option>
      ))}
    </select>
  )
}
