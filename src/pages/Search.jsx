import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchEverything } from '../services/newsApi.js'
import NewsGrid from '../components/NewsGrid.jsx'
import Loader from '../components/Loader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import SortSelect from '../components/inputs/SortSelect.jsx'
import SearchBar from '../components/inputs/SearchBar.jsx'
import Pagination from '../components/Pagination.jsx'

export default function Search() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const sortBy = params.get('sortBy') || 'publishedAt'
  const page = Number(params.get('page') || 1)

  const [state, setState] = useState({ loading: false, error: '', data: null })

  useEffect(() => {
    if (!q) return
    let ignore = false
    setState((s) => ({ ...s, loading: true, error: '' }))
    searchEverything({ q, sortBy, page, pageSize: 12 })
      .then((data) => !ignore && setState({ loading: false, error: '', data }))
      .catch((err) => !ignore && setState({ loading: false, error: err.message || 'Error', data: null }))
    return () => { ignore = true }
  }, [q, sortBy, page])

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
        <div className="flex items-center gap-3">
          <SearchBar
            onSubmit={(query) => {
              params.set('q', query)
              params.set('page', 1)
              setParams(params, { replace: true })
            }}
          />
          <SortSelect
            value={sortBy}
            onChange={(val) => {
              params.set('sortBy', val)
              params.set('page', 1)
              setParams(params, { replace: true })
            }}
          />
        </div>
        {q && <p className="opacity-70">Results for <span className="font-semibold">"{q}"</span></p>}
      </div>

      {!q && <EmptyState title="Search the news" description="Use the search bar to find articles. You can sort by date, relevancy, or popularity." />}
      {state.loading && <Loader />}
      {!state.loading && state.error && <EmptyState title="Something went wrong" description={state.error} />}
      {!state.loading && !state.error && state.data?.articles?.length === 0 && (
        <EmptyState title="No results" description="Try another keyword." />
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
