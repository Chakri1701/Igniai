import Background3D from '@/components/Background3D'
import ServiceBackground from '@/components/ServiceBackground'
import Link from 'next/link'

export const metadata = {
  title: 'Cybersecurity Services | IgniAI Technologies',
  description: 'Enterprise-grade security solutions. Penetration testing, compliance, threat detection, and zero-trust architecture.'
}

export default function CybersecurityService() {
  return (
    <main className="min-h-screen">
      <Background3D />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-orange-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-orange-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Cybersecurity</span>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 font-semibold text-sm mb-6">
                Cybersecurity
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Protect What <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Matters Most</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Safeguard your business with enterprise-grade security solutions. From penetration testing 
                to compliance frameworks, we protect your data, systems, and reputation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Secure Your Business
                </Link>
                <a href="#solutions" className="btn-secondary text-center">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Animated Background */}
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <ServiceBackground type="security" />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/10"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl shadow-orange-500/50">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-semibold">Enterprise Security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section id="solutions" className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Security Services We Provide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔐',
                title: 'Penetration Testing',
                description: 'Identify vulnerabilities before attackers do with comprehensive penetration testing and security audits.',
                features: ['Network Pentesting', 'Web App Security', 'API Testing', 'Mobile App Testing']
              },
              {
                icon: '🛡️',
                title: 'Zero-Trust Architecture',
                description: 'Implement zero-trust security model with identity verification, micro-segmentation, and least privilege access.',
                features: ['Identity Management', 'Micro-segmentation', 'MFA', 'Policy Enforcement']
              },
              {
                icon: '📋',
                title: 'Compliance & Governance',
                description: 'Achieve and maintain compliance with SOC 2, GDPR, HIPAA, PCI DSS, and ISO 27001 standards.',
                features: ['SOC 2', 'GDPR', 'HIPAA', 'PCI DSS']
              },
              {
                icon: '🚨',
                title: 'Threat Detection & Response',
                description: '24/7 monitoring, threat intelligence, and incident response to detect and neutralize attacks.',
                features: ['SIEM', 'EDR/XDR', 'Threat Intelligence', 'Incident Response']
              },
              {
                icon: '🔒',
                title: 'Data Encryption',
                description: 'Protect sensitive data at rest and in transit with enterprise-grade encryption solutions.',
                features: ['Data Encryption', 'Key Management', 'Database Security', 'File Encryption']
              },
              {
                icon: '👤',
                title: 'Identity & Access Management',
                description: 'Secure access control with SSO, MFA, and role-based access management.',
                features: ['SSO', 'Multi-Factor Auth', 'RBAC', 'Privileged Access']
              },
            ].map((service, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-all group">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Stats */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="card p-12 bg-gradient-to-br from-orange-500/10 to-red-500/10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Security Matters</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '$4.45M', label: 'Average Cost of Data Breach', icon: '💰' },
                { metric: '277', label: 'Days to Identify Breach', icon: '⏱️' },
                { metric: '95%', label: 'Breaches Due to Human Error', icon: '👥' },
                { metric: '43%', label: 'Target Small Businesses', icon: '🎯' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Compliance Frameworks We Support</h2>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['SOC 2', 'GDPR', 'HIPAA', 'PCI DSS', 'ISO 27001'].map((framework, index) => (
              <div key={index} className="card p-6 text-center hover:scale-105 transition-all">
                <div className="text-2xl font-bold text-white">{framework}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
<section className="pb-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-6">Security Implementation Process</h2>
      <p className="text-xl text-white/70">Protect your business in 4 steps</p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          step: '01',
          title: 'Assess',
          description: 'Identify vulnerabilities, assess risks, and audit current security',
          color: 'from-orange-500 to-red-500'
        },
        {
          step: '02',
          title: 'Strategize',
          description: 'Develop security roadmap, select tools, and define policies',
          color: 'from-red-500 to-pink-500'
        },
        {
          step: '03',
          title: 'Implement',
          description: 'Deploy security controls, configure monitoring, and train teams',
          color: 'from-pink-500 to-purple-500'
        },
        {
          step: '04',
          title: 'Monitor',
          description: 'Continuous monitoring, threat detection, and incident response',
          color: 'from-purple-500 to-orange-500'
        },
      ].map((process, index) => (
        <div key={index} className="relative text-center">
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30`}>
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
          <div className="card p-12 text-center bg-gradient-to-br from-orange-500/10 to-red-500/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't Wait for a Security Breach
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Protect your business proactively with enterprise-grade security solutions. Let's assess your security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Security Assessment
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