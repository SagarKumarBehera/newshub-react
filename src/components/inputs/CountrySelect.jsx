const COUNTRIES = [
  { code: 'us', name: 'US' },
  { code: 'in', name: 'IN' },
  { code: 'gb', name: 'UK' },
  { code: 'au', name: 'AU' },
  { code: 'ca', name: 'CA' },
  { code: 'de', name: 'DE' },
  { code: 'fr', name: 'FR' },
  { code: 'jp', name: 'JP' },
]

export default function CountrySelect({ value = 'us', onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
      title="Country/Region"
    >
      {COUNTRIES.map((c) => (
        <option key={c.code} value={c.code}>{c.name}</option>
      ))}
    </select>
  )
}
