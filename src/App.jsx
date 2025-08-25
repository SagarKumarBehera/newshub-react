import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Category from './pages/Category.jsx'
import Search from './pages/Search.jsx'
import Bookmarks from './pages/Bookmarks.jsx'
import ThemeToggle from './components/ThemeToggle.jsx'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })

  useEffect(() => {
    localStorage.setItem('theme', theme)
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
  }, [theme])

  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.search])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-3 sm:px-4 md:px-6 flex-1 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:name" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}
