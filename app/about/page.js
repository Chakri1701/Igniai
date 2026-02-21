import Background3D from '@/components/Background3D'
import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <main className="min-h-screen">
      <Background3D />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-400 font-semibold text-sm mb-6">
              About IgniAI Technologies
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Igniting Innovation Through
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                Intelligent Technology
              </span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We are a forward-thinking IT solutions company dedicated to transforming businesses 
              through cutting-edge artificial intelligence, cloud infrastructure, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="card p-10 group hover:scale-105 cursor-pointer bg-gradient-to-br from-purple-500/10 to-blue-500/5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/50">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To empower businesses with innovative AI-driven solutions that streamline operations, 
                enhance decision-making, and drive sustainable growth. We believe in making advanced 
                technology accessible, practical, and transformative for organizations of all sizes.
              </p>
            </div>

            {/* Vision */}
            <div className="card p-10 group hover:scale-105 cursor-pointer bg-gradient-to-br from-cyan-500/10 to-teal-500/5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                To be the leading catalyst for digital transformation in India and beyond, 
                creating intelligent ecosystems where businesses thrive through seamless 
                integration of AI, cloud computing, and human ingenuity.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What We Do
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive IT solutions and services designed to propel your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* AI & Machine Learning */}
            <div className="card p-8 group hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">AI & Machine Learning</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                We develop intelligent systems that learn, adapt, and optimize business processes. 
                From predictive analytics to natural language processing, our AI solutions turn 
                data into actionable insights.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Custom ML model development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Computer vision solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  Predictive analytics platforms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                  NLP & chatbot development
                </li>
              </ul>
            </div>

            {/* Cloud Infrastructure */}
            <div className="card p-8 group hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Cloud Infrastructure</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Build scalable, resilient cloud architectures on AWS, Azure, or Google Cloud. 
                We design, migrate, and manage cloud environments that grow with your business 
                while optimizing costs.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Cloud migration & strategy
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Serverless architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Multi-cloud deployment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                  Cloud cost optimization
                </li>
              </ul>
            </div>

            {/* DevOps & Automation */}
            <div className="card p-8 group hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">DevOps & Automation</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Accelerate software delivery with CI/CD pipelines, infrastructure as code, 
                and automated testing. We streamline your development workflow for faster, 
                more reliable deployments.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  CI/CD pipeline setup
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Infrastructure as Code
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Container orchestration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Monitoring & logging
                </li>
              </ul>
            </div>

            {/* Cybersecurity */}
            <div className="card p-8 group hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Cybersecurity</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Protect your digital assets with comprehensive security solutions. From 
                penetration testing to compliance management, we safeguard your business 
                against evolving cyber threats.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  Security audits & assessments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  Zero-trust architecture
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  SOC 2 & GDPR compliance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  Incident response planning
                </li>
              </ul>
            </div>

            {/* Data Analytics */}
            <div className="card p-8 group hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Data Analytics</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Transform raw data into strategic insights with advanced analytics and 
                visualization. We help you make data-driven decisions that drive measurable 
                business outcomes.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Business intelligence dashboards
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Data warehouse design
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  ETL pipeline development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  Real-time analytics
                </li>
              </ul>
            </div>

            {/* Web & Mobile Development */}
            <div className="card p-8 group hover:scale-105 cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Web & Mobile Development</h3>
              <p className="text-white/70 leading-relaxed mb-4">
                Create exceptional digital experiences with modern web and mobile applications. 
                We build fast, scalable, and user-friendly solutions using the latest frameworks 
                and best practices.
              </p>
              <ul className="space-y-2 text-white/60 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Progressive web apps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Native iOS & Android apps
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  Cross-platform development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  API development & integration
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

 {/* Our Approach */}
<section className="pb-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="card p-12 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Our Approach
        </h2>
        <p className="text-xl text-white/70 max-w-3xl mx-auto">
          We follow a proven methodology to deliver exceptional results
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          {
            number: '01',
            title: 'Discover',
            description: 'We analyze your business needs, challenges, and goals to create a tailored technology roadmap.',
            color: 'from-purple-500 to-blue-500',
          },
          {
            number: '02',
            title: 'Design',
            description: 'Our experts architect scalable solutions that align with your objectives and industry best practices.',
            color: 'from-blue-500 to-cyan-500',
          },
          {
            number: '03',
            title: 'Develop',
            description: 'We build robust, high-quality solutions using agile methodologies and cutting-edge technologies.',
            color: 'from-cyan-500 to-teal-500',
          },
          {
            number: '04',
            title: 'Deploy & Support',
            description: 'We ensure smooth deployment and provide ongoing support to maximize your technology investment.',
            color: 'from-orange-500 to-red-500',
          },
        ].map((step, index) => (
          <div key={index} className="relative">
            {/* Colored circle with number */}
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 shadow-lg`}>
              <span className="text-2xl font-bold text-white">{step.number}</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
            <p className="text-white/70 leading-relaxed">{step.description}</p>
            
            {/* Arrow connector */}
            {index < 3 && (
              <div className="hidden md:block absolute top-8 left-full w-8 -ml-4">
                <svg className="w-8 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Why Choose IgniAI?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Cutting-Edge Technology',
                description: 'We stay at the forefront of technological innovation, bringing you the latest AI and cloud solutions.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: 'Expert Team',
                description: 'Our certified professionals bring years of experience in AI, cloud, and enterprise software development.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Proven Track Record',
                description: '500+ successful projects delivered with 95% client satisfaction rate across diverse industries.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Agile Delivery',
                description: 'Fast, iterative development cycles ensure you see results quickly and can adapt as needed.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Cost-Effective Solutions',
                description: 'We optimize resources and leverage cloud economics to deliver maximum value within your budget.',
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: '24/7 Support',
                description: 'Round-the-clock technical support and monitoring to keep your systems running smoothly.',
              },
            ].map((item, index) => (
              <div key={index} className="card p-6 group hover:scale-105 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="card p-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">500+</div>
                <div className="text-white/70">Projects Delivered</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">50+</div>
                <div className="text-white/70">Happy Clients</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">95%</div>
                <div className="text-white/70">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">24/7</div>
                <div className="text-white/70">Support Available</div>
              </div>
            </div>
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
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how IgniAI can help you achieve your digital transformation goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}