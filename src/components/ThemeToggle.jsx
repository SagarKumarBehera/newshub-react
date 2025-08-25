export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 shadow-sm backdrop-blur bg-white/70 dark:bg-gray-900/70"
      aria-label="Toggle dark mode"
      title="Toggle theme"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  )
}
