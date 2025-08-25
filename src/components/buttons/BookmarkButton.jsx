import useLocalStorage from '../../hooks/useLocalStorage.js'

export default function BookmarkButton({ article }) {
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', [])

  const exists = bookmarks.some((b) => b.url === article.url)

  function toggle() {
    if (exists) {
      setBookmarks(bookmarks.filter((b) => b.url !== article.url))
    } else {
      setBookmarks([{ ...article }, ...bookmarks])
    }
  }

  return (
    <button
      onClick={toggle}
      className={`text-sm px-3 py-1.5 rounded-md border ${exists ? 'border-blue-600 text-blue-600' : 'border-gray-300 dark:border-gray-700'}`}
      title={exists ? 'Remove bookmark' : 'Save for later'}
      aria-label="Bookmark"
    >
      {exists ? '★ Bookmarked' : '☆ Bookmark'}
    </button>
  )
}
