import Parser from 'rss-parser'

const parser = new Parser({
  timeout: 8000,
  headers: {
    // Some feeds behave better with a UA header
    'User-Agent': 'Mozilla/5.0 (compatible; BlogFeedBot/1.0)'
  }
})

const FEEDS = [
  { name: 'AWS', url: 'https://aws.amazon.com/blogs/aws/feed/' , category: 'Cloud', color: 'from-blue-500 to-cyan-500' },
  { name: 'Next.js', url: 'https://nextjs.org/feed.xml', category: 'Web', color: 'from-cyan-500 to-teal-500' },
  { name: 'CISA', url: 'https://www.cisa.gov/news.xml', category: 'Security', color: 'from-orange-500 to-red-500' },
  { name: 'IBM', url: 'https://www.ibm.com/blogs/rss/', category: 'AI', color: 'from-purple-500 to-blue-500' }
]

function toDate(item) {
  const d = item.isoDate || item.pubDate
  const parsed = d ? new Date(d) : new Date(0)
  return Number.isNaN(parsed.getTime()) ? new Date(0) : parsed
}

function formatDate(d) {
  // Example: Feb 10
  return d.toLocaleDateString('en-GB', { month: 'short', day: '2-digit' })
}

export async function getCuratedPosts({ limit = 18 } = {}) {
  const results = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const data = await parser.parseURL(feed.url)

      return (data.items || []).slice(0, 8).map((item, idx) => {
        const dateObj = toDate(item)

        return {
          id: `${feed.name}-${idx}-${item.guid || item.link}`,
          title: item.title || 'Untitled',
          excerpt:
            item.contentSnippet ||
            item.summary ||
            'Read the full article for details.',
          category: feed.category,
          dateObj,
          date: formatDate(dateObj),
          time: 'Read',
          color: feed.color,
          link: item.link || '#',
          source: feed.name
        }
      })
    })
  )

  const posts = results
    .filter((r) => r.status === 'fulfilled')
    .flatMap((r) => r.value)
    .filter((p) => p.link && p.link !== '#')
    .sort((a, b) => b.dateObj - a.dateObj)
    .slice(0, limit)

  return posts
}
