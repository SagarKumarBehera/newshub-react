import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getTopHeadlines } from '../services/newsApi.js'
import NewsGrid from '../components/NewsGrid.jsx'
import Loader from '../components/Loader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Pagination from '../components/Pagination.jsx'

export default function Category() {
  const { name } = useParams()
  const [params, setParams] = useSearchParams()
  const country = params.get('country') || 'us'
  const page = Number(params.get('page') || 1)
  const [state, setState] = useState({ loading: true, error: '', data: null })

  useEffect(() => {
    let ignore = false
    setState((s) => ({ ...s, loading: true, error: '' }))
    getTopHeadlines({ country, category: name, page, pageSize: 12 })
      .then((data) => !ignore && setState({ loading: false, error: '', data }))
      .catch((err) => !ignore && setState({ loading: false, error: err.message || 'Error', data: null }))
    return () => { ignore = true }
  }, [country, name, page])

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold capitalize">{name}</h1>
          <p className="opacity-70">Country: <span className="font-medium uppercase">{country}</span></p>
        </div>
      </div>

      {state.loading && <Loader />}
      {!state.loading && state.error && <EmptyState title="Something went wrong" description={state.error} />}
      {!state.loading && !state.error && state.data?.articles?.length === 0 && (
        <EmptyState title="No articles" description="Try a different category or country." />
      )}
      {!state.loading && !state.error && state.data && (
        <>
          <NewsGrid articles={state.data.articles} />
          <Pagination
            page={page}
            totalResults={state.data.totalResults}
            pageSize={12}
            disabled={state.loading}
            onPageChange={(p) => {
              params.set('page', p)
              setParams(params, { replace: true })
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          />
        </>
      )}
    </div>
  )
}
