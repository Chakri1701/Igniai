import Background3D from '@/components/Background3D'
import ServiceBackground from '@/components/ServiceBackground'
import Link from 'next/link'

export const metadata = {
  title: 'DevOps & CI/CD Automation | IgniAI Technologies',
  description: 'Streamline development with automated CI/CD pipelines, infrastructure as code, and DevOps best practices.'
}

export default function DevOpsService() {
  return (
    <main className="min-h-screen">
      <Background3D />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">DevOps Automation</span>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-semibold text-sm mb-6">
                DevOps & Automation
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Automate. Deploy. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Scale.</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Transform your software delivery with automated CI/CD pipelines, infrastructure as code, 
                and DevOps best practices. Deploy faster, more reliably, and with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Accelerate Delivery
                </Link>
                <a href="#solutions" className="btn-secondary text-center">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Animated Background */}
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <ServiceBackground type="devops" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-teal-500/10"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-semibold">Continuous Everything</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Services */}
      <section id="solutions" className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              DevOps Services We Provide
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔄',
                title: 'CI/CD Pipelines',
                description: 'Automated build, test, and deployment pipelines using Jenkins, GitLab CI, GitHub Actions, and Azure DevOps.',
                features: ['Automated Testing', 'Code Quality Checks', 'Security Scanning', 'Rollback Mechanisms']
              },
              {
                icon: '📜',
                title: 'Infrastructure as Code',
                description: 'Define and manage infrastructure using Terraform, CloudFormation, and Pulumi for reproducible environments.',
                features: ['Terraform', 'CloudFormation', 'Ansible', 'Version Control']
              },
              {
                icon: '🐳',
                title: 'Containerization',
                description: 'Package applications in Docker containers for consistent deployment across any environment.',
                features: ['Docker', 'Docker Compose', 'Multi-stage Builds', 'Image Optimization']
              },
              {
                icon: '☸️',
                title: 'Kubernetes Orchestration',
                description: 'Deploy and manage containerized applications at scale with Kubernetes (EKS, AKS, GKE).',
                features: ['Auto-scaling', 'Self-healing', 'Load Balancing', 'Rolling Updates']
              },
              {
                icon: '📊',
                title: 'Monitoring & Logging',
                description: 'Comprehensive observability with Prometheus, Grafana, ELK Stack, and CloudWatch.',
                features: ['Metrics Collection', 'Log Aggregation', 'Alerting', 'Dashboards']
              },
              {
                icon: '🔒',
                title: 'Security Automation',
                description: 'Integrate security into your pipeline with automated vulnerability scanning and compliance checks.',
                features: ['SAST/DAST', 'Dependency Scanning', 'Container Security', 'Compliance as Code']
              },
            ].map((service, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-all group">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="card p-12 bg-gradient-to-br from-cyan-500/10 to-teal-500/10">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">DevOps Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: '10x', label: 'Faster Deployments', icon: '🚀' },
                { metric: '60%', label: 'Fewer Failures', icon: '✅' },
                { metric: '50%', label: 'Faster Recovery', icon: '⚡' },
                { metric: '80%', label: 'Time Saved', icon: '⏱️' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 mb-2">
                    {stat.metric}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
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
      <h2 className="text-4xl font-bold text-white mb-6">DevOps Implementation Process</h2>
      <p className="text-xl text-white/70">Transform your delivery pipeline in 4 steps</p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          step: '01',
          title: 'Audit',
          description: 'Assess current processes, tools, and identify automation opportunities',
          color: 'from-cyan-500 to-teal-500'
        },
        {
          step: '02',
          title: 'Design',
          description: 'Create CI/CD architecture, select tools, and define workflows',
          color: 'from-teal-500 to-green-500'
        },
        {
          step: '03',
          title: 'Implement',
          description: 'Build pipelines, automate deployments, and integrate monitoring',
          color: 'from-green-500 to-emerald-500'
        },
        {
          step: '04',
          title: 'Evolve',
          description: 'Continuously improve processes based on metrics and feedback',
          color: 'from-emerald-500 to-cyan-500'
        },
      ].map((process, index) => (
        <div key={index} className="relative text-center">
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/30`}>
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
          <div className="card p-12 text-center bg-gradient-to-br from-cyan-500/10 to-teal-500/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Development Process?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's build automated pipelines that accelerate your software delivery and improve reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Started
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