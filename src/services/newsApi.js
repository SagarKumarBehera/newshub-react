import axios from 'axios'

const API_KEY = import.meta.env.VITE_NEWS_API_KEY

const client = axios.create({
  baseURL: 'https://newsapi.org/v2',
  headers: { 'X-Api-Key': API_KEY }
})

export async function getTopHeadlines({ category = 'general', country = 'us', page = 1, pageSize = 12 }) {
  const params = { category, country, page, pageSize }
  const { data } = await client.get('/top-headlines', { params })
  if (data.status !== 'ok') throw new Error(data.message || 'Failed to fetch headlines')
  return data
}

export async function searchEverything({ q, sortBy = 'publishedAt', page = 1, pageSize = 12, from, to, language }) {
  const params = { q, sortBy, page, pageSize }
  if (from) params.from = from
  if (to) params.to = to
  if (language) params.language = language
  const { data } = await client.get('/everything', { params })
  if (data.status !== 'ok') throw new Error(data.message || 'Failed to search articles')
  return data
}
