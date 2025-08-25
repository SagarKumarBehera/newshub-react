import useLocalStorage from '../hooks/useLocalStorage.js'
import NewsGrid from '../components/NewsGrid.jsx'
import EmptyState from '../components/EmptyState.jsx'

export default function Bookmarks() {
  const [bookmarks] = useLocalStorage('bookmarks', [])

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Your Bookmarks</h1>
      {bookmarks.length === 0 ? (
        <EmptyState title="No bookmarks yet" description="Save articles to read later. Bookmarks persist on refresh." />
      ) : (
        <NewsGrid articles={bookmarks} />
      )}
    </div>
  )
}
