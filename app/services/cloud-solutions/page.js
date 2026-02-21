import Background3D from '@/components/Background3D'
import ServiceBackground from '@/components/ServiceBackground'
import Link from 'next/link'

export const metadata = {
  title: 'Cloud Solutions & Infrastructure | IgniAI Technologies',
  description: 'Scalable cloud infrastructure on AWS, Azure, and GCP. Migration, serverless architecture, and cloud-native development.'
}

export default function CloudService() {
  return (
    <main className="min-h-screen">
      <Background3D />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Cloud Solutions</span>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 font-semibold text-sm mb-6">
                Cloud Infrastructure
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Build on the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cloud</span> of Tomorrow
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Migrate, build, and scale your applications on AWS, Azure, or Google Cloud Platform. 
                We architect resilient, cost-effective cloud solutions that grow with your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Start Your Cloud Journey
                </Link>
                <a href="#solutions" className="btn-secondary text-center">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Animated Background */}
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <ServiceBackground type="cloud" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/10"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-blue-500/50">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-semibold">Cloud Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Cloud Platforms We Work With</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Amazon Web Services', logo: 'AWS', color: 'from-orange-500 to-yellow-500' },
              { name: 'Microsoft Azure', logo: 'Azure', color: 'from-blue-500 to-cyan-500' },
              { name: 'Google Cloud Platform', logo: 'GCP', color: 'from-red-500 to-yellow-500' },
            ].map((provider, index) => (
              <div key={index} className="card p-8 text-center hover:scale-105 transition-all">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${provider.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {provider.logo}
                </div>
                <h3 className="text-xl font-bold text-white">{provider.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Cloud Solutions We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '☁️',
                title: 'Cloud Migration',
                description: 'Seamlessly migrate your applications and data to the cloud with zero downtime and minimal disruption.',
                features: ['Assessment & Planning', 'Data Migration', 'Application Modernization', 'Post-Migration Support']
              },
              {
                icon: '⚡',
                title: 'Serverless Architecture',
                description: 'Build and deploy applications without managing servers using AWS Lambda, Azure Functions, and Cloud Functions.',
                features: ['Auto-scaling', 'Pay-per-use', 'Event-driven', 'Microservices']
              },
              {
                icon: '🐳',
                title: 'Kubernetes & Containers',
                description: 'Orchestrate containerized applications with Kubernetes (EKS, AKS, GKE) for maximum portability.',
                features: ['Container Orchestration', 'Auto-healing', 'Load Balancing', 'Service Mesh']
              },
              {
                icon: '💾',
                title: 'Cloud Storage',
                description: 'Scalable, durable, and secure storage solutions for all your data needs from S3 to Blob Storage.',
                features: ['Object Storage', 'Block Storage', 'File Storage', 'Data Lakes']
              },
              {
                icon: '🔄',
                title: 'Disaster Recovery',
                description: 'Ensure business continuity with automated backup, replication, and recovery solutions.',
                features: ['Automated Backups', 'Multi-region Replication', 'RTO/RPO Optimization', '99.99% Uptime']
              },
              {
                icon: '💰',
                title: 'Cost Optimization',
                description: 'Reduce cloud costs by 30-50% through right-sizing, reserved instances, and spot instances.',
                features: ['Cost Analysis', 'Resource Right-sizing', 'Reserved Instances', 'Waste Elimination']
              },
            ].map((solution, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-all group">
                <div className="text-6xl mb-6">{solution.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="card p-12 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Move to the Cloud?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '50%', label: 'Cost Reduction', icon: '💰' },
                { metric: '99.99%', label: 'Uptime SLA', icon: '⏱️' },
                { metric: '10x', label: 'Faster Scaling', icon: '🚀' },
                { metric: '60%', label: 'Faster Deployments', icon: '⚡' },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                    {benefit.metric}
                  </div>
                  <div className="text-white/70">{benefit.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
<section className="pb-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-6">Cloud Migration Process</h2>
      <p className="text-xl text-white/70">Seamless transition in 4 steps</p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          step: '01',
          title: 'Assess',
          description: 'Evaluate current infrastructure, applications, and migration readiness',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          step: '02',
          title: 'Plan',
          description: 'Design cloud architecture, select services, and create migration strategy',
          color: 'from-cyan-500 to-teal-500'
        },
        {
          step: '03',
          title: 'Migrate',
          description: 'Move applications and data to cloud with minimal downtime',
          color: 'from-teal-500 to-green-500'
        },
        {
          step: '04',
          title: 'Optimize',
          description: 'Fine-tune performance, reduce costs, and implement best practices',
          color: 'from-green-500 to-emerald-500'
        },
      ].map((process, index) => (
        <div key={index} className="relative text-center">
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30`}>
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
          <div className="card p-12 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Embrace the Cloud?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss your cloud strategy and build a scalable, secure infrastructure for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Consultation
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