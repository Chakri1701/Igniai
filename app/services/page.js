import ServiceBackground from '@/components/ServiceBackground'
import Link from 'next/link'

export default function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 font-semibold text-sm mb-6">
            Enterprise Solutions
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Bring <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">AI-powered intelligence</span>
            <br />
            to every corner of your business
          </h1>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Comprehensive IT solutions that transform how you work, powered by cutting-edge technology
          </p>
        </div>
      </section>

      {/* Main 4 Service Cards - Uniform Size */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Core Solutions
            </h2>
            <p className="text-xl text-white/70">
              End-to-end AI platform for modern enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                tag: 'ANY DATA',
                title: 'Sense',
                description: 'Your enterprise data contextualized in real-time. Now AI understands your business, not just the internet.',
                cta: 'Trust Every Insight',
                gradient: 'from-purple-600/20 to-purple-500/5',
                borderColor: 'border-purple-500/20',
                iconBg: 'from-purple-500 to-purple-600',
              },
              {
                tag: 'ANY AI MODEL',
                title: 'Decide',
                description: 'Any AI model, grounded in your rules and your data to make aligned, auditable decisions.',
                cta: 'Make Confident Decisions',
                gradient: 'from-blue-600/20 to-blue-500/5',
                borderColor: 'border-blue-500/20',
                iconBg: 'from-blue-500 to-blue-600',
              },
              {
                tag: 'ANY WORKFLOW',
                title: 'Act',
                description: 'Autonomous workflows execute across every department, turning AI insight into real business outcomes.',
                cta: 'Impact the Business',
                gradient: 'from-cyan-600/20 to-cyan-500/5',
                borderColor: 'border-cyan-500/20',
                iconBg: 'from-cyan-500 to-cyan-600',
              },
              {
                tag: 'ANY SYSTEM',
                title: 'Govern',
                description: 'Built-in guardrails ensure every action is secure, compliant, and approved before it happens.',
                cta: 'Secure Systems',
                gradient: 'from-orange-600/20 to-orange-500/5',
                borderColor: 'border-orange-500/20',
                iconBg: 'from-orange-500 to-orange-600',
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border ${service.borderColor} p-8 hover:scale-105 hover:border-white/30 transition-all duration-300 cursor-pointer h-full flex flex-col`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <div className="w-6 h-6 bg-white/30 rounded-md"></div>
                </div>

                <div className="text-white/50 text-xs font-bold tracking-wider mb-3 uppercase">
                  {service.tag}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                <div className="flex items-center gap-2 text-white/80 font-semibold text-sm group-hover:gap-3 group-hover:text-white transition-all duration-300 mt-auto">
                  {service.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section - All Cards Same Height & CLICKABLE */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Technology Stack
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We leverage the latest technologies to build robust, scalable solutions
            </p>
          </div>

          {/* All Cards Uniform Size - 3 Column Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Cloud & Infrastructure - CLICKABLE */}
            <Link href="/services/cloud-solutions" className="block">
              <div id="cloud" className="relative overflow-hidden rounded-3xl group hover:scale-105 cursor-pointer transition-all duration-300 h-full">
                <ServiceBackground type="cloud" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5"></div>
                
                <div className="relative z-10 p-8 border border-blue-500/20 rounded-3xl bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">Cloud & Infrastructure</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                    Deploy scalable applications on AWS, Azure, and Google Cloud Platform with serverless architecture and Kubernetes orchestration.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">AWS</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">Azure</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">GCP</span>
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-500/30">Kubernetes</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* AI & Machine Learning - CLICKABLE */}
            <Link href="/services/ai-machine-learning" className="block">
              <div id="ai" className="relative overflow-hidden rounded-3xl group hover:scale-105 cursor-pointer transition-all duration-300 h-full">
                <ServiceBackground type="ai" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/5"></div>
                
                <div className="relative z-10 p-8 border border-purple-500/20 rounded-3xl bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">AI & Machine Learning</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                    Build intelligent systems with TensorFlow, PyTorch, and OpenAI for natural language processing and computer vision.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">TensorFlow</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">PyTorch</span>
                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold border border-purple-500/30">OpenAI</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* DevOps & CI/CD - CLICKABLE */}
            <Link href="/services/devops-automation" className="block">
              <div id="devops" className="relative overflow-hidden rounded-3xl group hover:scale-105 cursor-pointer transition-all duration-300 h-full">
                <ServiceBackground type="devops" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/5"></div>
                
                <div className="relative z-10 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">DevOps & CI/CD</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                    Automated pipelines with Jenkins, GitLab, and GitHub Actions for continuous integration and deployment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">Jenkins</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">GitLab</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">Terraform</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Data Analytics - CLICKABLE */}
            <Link href="/services/data-analytics" className="block">
              <div id="analytics" className="relative overflow-hidden rounded-3xl group hover:scale-105 cursor-pointer transition-all duration-300 h-full">
                <ServiceBackground type="analytics" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/5"></div>
                
                <div className="relative z-10 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">Data Analytics</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                    Business intelligence with Tableau, Power BI, and custom dashboards for data-driven decision making.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">Tableau</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">Power BI</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">Python</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Security & Compliance - CLICKABLE */}
            <Link href="/services/cybersecurity" className="block">
              <div id="security" className="relative overflow-hidden rounded-3xl group hover:scale-105 cursor-pointer transition-all duration-300 h-full">
                <ServiceBackground type="security" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/5"></div>
                
                <div className="relative z-10 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">Security & Compliance</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                    Zero-trust architecture with SOC 2, GDPR, and HIPAA compliance for enterprise-grade security.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">SOC 2</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">GDPR</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">HIPAA</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Web & Mobile Development - CLICKABLE */}
            <Link href="/services/web-mobile-development" className="block">
              <div className="relative overflow-hidden rounded-3xl group hover:scale-105 cursor-pointer transition-all duration-300 h-full">
                <ServiceBackground type="webdev" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/5"></div>
                
                <div className="relative z-10 p-8 border border-white/10 rounded-3xl bg-white/5 backdrop-blur-sm h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">Web & Mobile Development</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow">
                    Modern web and mobile applications using React, Next.js, Flutter, and React Native frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">React</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">Next.js</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 text-white/60 text-xs border border-white/10">Flutter</span>
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
            
            <div className="relative z-10 p-12 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and discover how our expertise can transform your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="btn-primary">
                  Schedule Consultation
                </Link>
                <Link href="/about" className="btn-secondary">
                  Meet Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}