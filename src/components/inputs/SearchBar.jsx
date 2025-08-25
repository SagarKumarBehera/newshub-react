import { useState } from 'react'

export default function SearchBar({ onSubmit }) {
  const [q, setQ] = useState('')

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!q.trim()) return
        onSubmit(q.trim())
      }}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 backdrop-blur"
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search news..."
        className="bg-transparent outline-none text-sm w-40 sm:w-64"
      />
      <button className="text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700">
        Search
      </button>
    </form>
  )
}
