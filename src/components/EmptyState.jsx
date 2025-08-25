export default function EmptyState({ title = 'No results', description = 'Try adjusting your filters or search.' }) {
  return (
    <div className="text-center py-16">
      <p className="text-xl font-semibold">{title}</p>
      <p className="opacity-70 mt-2">{description}</p>
    </div>
  )
}
