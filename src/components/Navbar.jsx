import { Link, NavLink, useNavigate, useSearchParams } from 'react-router-dom'
import CountrySelect from './inputs/CountrySelect.jsx'
import SearchBar from './inputs/SearchBar.jsx'

const categories = [
  { key: 'business', label: 'Business' },
  { key: 'sports', label: 'Sports' },
  { key: 'technology', label: 'Technology' },
  { key: 'health', label: 'Health' },
  { key: 'entertainment', label: 'Entertainment' },
  { key: 'science', label: 'Science' },
]

export default function Navbar() {
  const [params, setParams] = useSearchParams()
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 backdrop-blur bg-white/75 dark:bg-gray-950/75">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="flex items-center gap-3 py-3">
          <Link to="/" className="font-extrabold text-xl sm:text-2xl tracking-tight">
            News<span className="text-blue-600">Hub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4 ml-6">
            {categories.map((c) => (
              <NavLink
                key={c.key}
                to={`/category/${c.key}`}
                className={({ isActive }) =>
                  `px-2 py-1 rounded-full text-sm transition ${
                    isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`
                }
              >
                {c.label}
              </NavLink>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3">
            <SearchBar onSubmit={(q) => navigate(`/search?q=${encodeURIComponent(q)}`)} />
            <CountrySelect
              value={params.get('country') || 'us'}
              onChange={(val) => {
                params.set('country', val)
                setParams(params, { replace: true })
              }}
            />
            <NavLink
              to="/bookmarks"
              className={({ isActive }) =>
                `px-3 py-1 rounded-full text-sm border border-gray-300 dark:border-gray-700 ${
                  isActive ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              Bookmarks
            </NavLink>
          </div>
        </div>
        <div className="md:hidden pb-3 overflow-x-auto no-scrollbar">
          <div className="flex gap-2">
            {categories.map((c) => (
              <NavLink
                key={c.key}
                to={`/category/${c.key}`}
                className={({ isActive }) =>
                  `px-3 py-1.5 whitespace-nowrap rounded-full text-sm transition ${
                    isActive ? 'bg-blue-600 text-white' : 'border border-gray-300 dark:border-gray-700'
                  }`
                }
              >
                {c.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
