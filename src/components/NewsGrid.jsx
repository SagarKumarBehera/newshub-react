import ArticleCard from './ArticleCard.jsx'

export default function NewsGrid({ articles }) {
  return (
    <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((a, idx) => (
        <ArticleCard key={`${a.url}-${idx}`} article={a} />
      ))}
    </div>
  )
}
