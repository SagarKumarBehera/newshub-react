import BookmarkButton from './buttons/BookmarkButton.jsx'

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleString()
  } catch {
    return ''
  }
}

export default function ArticleCard({ article }) {
  const {
    urlToImage,
    title,
    description,
    author,
    publishedAt,
    url,
    source
  } = article

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
      <div className="relative aspect-[16/9] bg-gray-100 dark:bg-gray-800">
        {urlToImage ? (
          <img src={urlToImage} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm opacity-60">No Image</div>
        )}
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold leading-snug">{title}</h3>
        <p className="text-sm opacity-80 mt-2 line-clamp-3">{description || 'No description available.'}</p>
        <div className="mt-auto">
          <div className="flex items-center justify-between text-xs opacity-70 mt-3">
            <span>{author || source?.name || 'Unknown'}</span>
            <span>{formatDate(publishedAt)}</span>
          </div>
          <div className="flex items-center justify-between mt-3">
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 text-blue-600 hover:underline"
            >
              Read full article ↗
            </a>
            <BookmarkButton article={article} />
          </div>
        </div>
      </div>
    </article>
  )
}
