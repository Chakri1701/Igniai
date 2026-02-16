import Background3D from '@/components/Background3D'
import InfinitySymbol from '@/components/InfinitySymbol'
import Link from 'next/link'

export default function Services() {
  return (
    <main className="min-h-screen">
      <Background3D />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Bring <span className="text-[#10B981]">AI-powered intelligence</span>
            <br />
            to every corner of your business
          </h1>
        </div>
      </section>

      {/* Infinity Symbol Animation */}
      <section className="pb-20">
        <InfinitySymbol />
      </section>

      {/* Service Cards - Main 4 */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              tag: 'ANY DATA',
              title: 'Sense',
              description: 'Your enterprise data contextualized in real-time. Now AI understands your business, not just the internet.',
              cta: 'Trust Every Insight',
            },
            {
              tag: 'ANY AI MODEL',
              title: 'Decide',
              description: 'Any AI model, grounded in your rules and your data to make aligned, auditable decisions.',
              cta: 'Make Confident Decisions',
            },
            {
              tag: 'ANY WORKFLOW',
              title: 'Act',
              description: 'Autonomous workflows execute across every department, turning AI insight into real business outcomes.',
              cta: 'Impact the Business',
            },
            {
              tag: 'ANY SYSTEM',
              title: 'Govern',
              description: 'Built-in guardrails ensure every action is secure, compliant, and approved before it happens.',
              cta: 'Secure Systems and Devices',
            },
          ].map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-8 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative z-10">
                <div className="text-white/60 text-xs font-bold tracking-wider mb-4 uppercase">
                  {service.tag}
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6">
                  {service.title}
                </h3>
                
                <p className="text-white/70 text-base leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                  {service.cta}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive IT solutions powered by artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'AI & Machine Learning',
                description: 'Advanced AI solutions for automation and predictive analytics.',
                gradient: 'from-purple-500 to-blue-500',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: 'Cloud Infrastructure',
                description: 'Scalable cloud solutions on AWS, Azure, and Google Cloud.',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: 'Cybersecurity',
                description: 'Enterprise-grade security solutions and monitoring.',
                gradient: 'from-orange-500 to-red-500',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: 'Web Development',
                description: 'Modern web applications with cutting-edge frameworks.',
                gradient: 'from-cyan-500 to-teal-500',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications.',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Data Analytics',
                description: 'Transform data into actionable business insights.',
                gradient: 'from-indigo-500 to-purple-500',
              },
            ].map((service, index) => (
              <div key={index} className="card p-8 group hover:scale-105 cursor-pointer">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="card p-12 text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Let's discuss how our AI-powered solutions can accelerate your growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
              </Link>
              <Link href="/blog" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}