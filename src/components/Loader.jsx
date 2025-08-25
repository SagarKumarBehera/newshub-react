export default function Loader({ label = 'Loading...' }) {
  return (
    <div className="w-full flex items-center justify-center py-16">
      <div className="animate-spin h-6 w-6 rounded-full border-2 border-gray-300 border-t-transparent mr-3" />
      <p className="text-sm opacity-80">{label}</p>
    </div>
  )
}
