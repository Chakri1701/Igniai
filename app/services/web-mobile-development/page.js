import Background3D from '@/components/Background3D'
import ServiceBackground from '@/components/ServiceBackground'
import Link from 'next/link'

export const metadata = {
  title: 'Web & Mobile Development | IgniAI Technologies',
  description: 'Build modern web and mobile applications with React, Next.js, Flutter, and React Native.'
}

export default function WebMobileService() {
  return (
    <main className="min-h-screen">
      <Background3D />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-green-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Web & Mobile Development</span>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 font-semibold text-sm mb-6">
                Web & Mobile
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Exceptional</span> Digital Experiences
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Create beautiful, fast, and scalable web and mobile applications that engage users 
                and drive business growth. From progressive web apps to native mobile experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Start Your Project
                </Link>
                <a href="#solutions" className="btn-secondary text-center">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Animated Background */}
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <ServiceBackground type="webdev" />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/10"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl shadow-green-500/50">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-semibold">Modern Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Services */}
      <section id="solutions" className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Development Services We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Progressive Web Apps',
                description: 'Build fast, reliable web apps that work offline and feel like native apps using modern web technologies.',
                features: ['Offline Support', 'Push Notifications', 'App-like Experience', 'SEO Optimized']
              },
              {
                icon: '📱',
                title: 'Native Mobile Apps',
                description: 'Develop high-performance native iOS and Android apps with Swift, Kotlin, and platform-specific features.',
                features: ['iOS Development', 'Android Development', 'Native Performance', 'Platform Features']
              },
              {
                icon: '🔄',
                title: 'Cross-Platform Apps',
                description: 'Build once, deploy everywhere with React Native and Flutter for iOS, Android, and web.',
                features: ['React Native', 'Flutter', 'Shared Codebase', 'Fast Development']
              },
              {
                icon: '⚡',
                title: 'Single Page Applications',
                description: 'Create fast, dynamic SPAs with React, Vue, or Angular for seamless user experiences.',
                features: ['React', 'Next.js', 'Vue.js', 'Client-side Routing']
              },
              {
                icon: '🛒',
                title: 'E-Commerce Solutions',
                description: 'Build scalable online stores with Shopify, WooCommerce, or custom e-commerce platforms.',
                features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'Analytics']
              },
              {
                icon: '🔌',
                title: 'API Development',
                description: 'Design and build RESTful and GraphQL APIs for seamless integration and data exchange.',
                features: ['REST APIs', 'GraphQL', 'API Documentation', 'Authentication']
              },
            ].map((service, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-all group">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="card p-12 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Web Development</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React', 'Next.js', 'Vue.js', 'Node.js', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-white font-semibold">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Mobile Development</h3>
                <div className="grid grid-cols-2 gap-4">
                  {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase'].map((tech, index) => (
                    <div key={index} className="bg-white/5 p-4 rounded-xl border border-white/10">
                      <div className="text-white font-semibold">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What We Can Build</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                type: 'E-Commerce',
                title: 'Online Store Platform',
                description: 'Multi-vendor marketplace with 100k+ products, real-time inventory, and secure payments.',
                icon: '🛍️'
              },
              {
                type: 'FinTech',
                title: 'Banking Mobile App',
                description: 'Secure mobile banking app with biometric auth, instant transfers, and bill payments.',
                icon: '💳'
              },
              {
                type: 'SaaS',
                title: 'Project Management Tool',
                description: 'Collaborative workspace with real-time updates, kanban boards, and team analytics.',
                icon: '📊'
              },
            ].map((example, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-all">
                <div className="text-6xl mb-4">{example.icon}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-sm font-semibold mb-4">
                  {example.type}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{example.title}</h3>
                <p className="text-white/70">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
<section className="pb-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-6">Development Process</h2>
      <p className="text-xl text-white/70">From idea to launch in 4 steps</p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          step: '01',
          title: 'Discovery',
          description: 'Define requirements, user stories, and technical specifications',
          color: 'from-green-500 to-emerald-500'
        },
        {
          step: '02',
          title: 'Design',
          description: 'Create wireframes, UI/UX designs, and interactive prototypes',
          color: 'from-emerald-500 to-teal-500'
        },
        {
          step: '03',
          title: 'Develop',
          description: 'Build features, write tests, and integrate APIs',
          color: 'from-teal-500 to-cyan-500'
        },
        {
          step: '04',
          title: 'Launch',
          description: 'Deploy to production, monitor performance, and iterate',
          color: 'from-cyan-500 to-green-500'
        },
      ].map((process, index) => (
        <div key={index} className="relative text-center">
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-6 shadow-lg shadow-green-500/30`}>
            <span className="text-2xl font-bold text-white">{process.step}</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">{process.title}</h3>
          <p className="text-white/70 leading-relaxed">{process.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="card p-12 text-center bg-gradient-to-br from-green-500/10 to-emerald-500/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Build Your Next App?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's turn your idea into a beautiful, functional application that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link href="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}