import Background3D from '@/components/Background3D'
import { getCuratedPosts } from '@/lib/rss'

export const revalidate = 900 // 15 minutes

export default async function Blog() {
  const posts = await getCuratedPosts({ limit: 18 })

  return (
    <main className="min-h-screen pt-32 pb-20 px-4 relative">
      {/* Important: keep Background3D behind and not blocking clicks */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <Background3D />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Tech Insights</h1>
          <p className="text-xl text-white/70">Curated articles from industry leaders</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="card h-full overflow-hidden hover:scale-105 transition-all duration-300">
                <div className={`bg-gradient-to-br ${post.color} p-8 flex items-center justify-center`}>
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-semibold">
                      {post.category}
                    </span>
                    <span className="text-white/40 text-xs">{post.source}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span className="text-white/50 text-sm">{post.date}</span>
                    <span className="text-purple-400 font-semibold text-sm">Read</span>
                  </div>
                </div>
              </div>
            </a>
          ))}

          {posts.length === 0 && (
            <div className="text-white/70">
              Couldn’t load feeds right now. Try again shortly.
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
