import Link from 'next/link'
import Background3D from '@/components/Background3D'

export default function Home() {
  const features = [
    {
      title: 'Career Guidance',
      description: 'Expert advice to navigate your professional journey',
      icon: '🎯',
    },
    {
      title: 'Skill Development',
      description: 'Programs designed to enhance your capabilities',
      icon: '📚',
    },
    {
      title: 'Job Opportunities',
      description: 'Connect with top employers and opportunities',
      icon: '💼',
    },
    {
      title: 'Mentorship',
      description: 'Learn from industry leaders and professionals',
      icon: '🤝',
    },
  ]

  return (
    <main className="min-h-screen">
      <Background3D />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-float">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="text-gradient glow">Ignite Your</span>
              <br />
              <span className="text-white">Future Career</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Empowering the youth and young generation with opportunities, 
            guidance, and the platform to build extraordinary careers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/opportunities"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 hover:scale-105"
            >
              Explore Opportunities
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg border-2 border-[#00ff88] text-[#00ff88] font-bold text-lg hover:bg-[#00ff88] hover:text-black transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: '5000+', label: 'Students Guided' },
              { number: '500+', label: 'Partner Companies' },
              { number: '99%', label: 'Success Rate' },
              { number: '1+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="glass rounded-xl p-6 hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            <span className="text-gradient">What We Offer</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff88]/20"
              >
                <div className="text-6xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-[#00ff88]">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center glass rounded-3xl p-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of young professionals who have transformed their careers with IgniaIT
          </p>
          <Link
            href="/signup"
            className="inline-block px-10 py-5 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold text-xl hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </main>
  )
}