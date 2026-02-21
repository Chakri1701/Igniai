import Background3D from '@/components/Background3D'
import ServiceBackground from '@/components/ServiceBackground'
import Link from 'next/link'

export const metadata = {
  title: 'Data Analytics & Business Intelligence | IgniAI Technologies',
  description: 'Transform data into actionable insights with advanced analytics, BI dashboards, and data visualization.'
}

export default function DataAnalyticsService() {
  return (
    <main className="min-h-screen">
      <Background3D />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-indigo-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Data Analytics</span>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 font-semibold text-sm mb-6">
                Data & Analytics
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Turn Data Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Actionable Insights</span>
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Unlock the power of your data with advanced analytics, interactive dashboards, 
                and data-driven strategies. Make smarter decisions backed by real-time insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Start Your Data Journey
                </Link>
                <a href="#solutions" className="btn-secondary text-center">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Animated Background */}
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <ServiceBackground type="analytics" />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/10"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-indigo-500/50">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-semibold">Data-Driven Decisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Services */}
      <section id="solutions" className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Analytics Solutions We Offer
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📊',
                title: 'Business Intelligence',
                description: 'Interactive dashboards and reports using Tableau, Power BI, and Looker for real-time business insights.',
                features: ['Custom Dashboards', 'KPI Tracking', 'Self-Service Analytics', 'Mobile BI']
              },
              {
                icon: '🗄️',
                title: 'Data Warehousing',
                description: 'Centralize your data with modern data warehouses on Snowflake, Redshift, and BigQuery.',
                features: ['Data Modeling', 'ETL/ELT Pipelines', 'Data Quality', 'Schema Design']
              },
              {
                icon: '🔄',
                title: 'ETL & Data Integration',
                description: 'Connect and transform data from multiple sources with automated pipelines and data integration.',
                features: ['Apache Airflow', 'dbt', 'Fivetran', 'Custom Pipelines']
              },
              {
                icon: '📈',
                title: 'Predictive Analytics',
                description: 'Forecast trends, customer behavior, and business outcomes using advanced statistical models.',
                features: ['Trend Analysis', 'Forecasting', 'Customer Segmentation', 'Churn Prediction']
              },
              {
                icon: '⚡',
                title: 'Real-Time Analytics',
                description: 'Process and analyze streaming data in real-time with Apache Kafka, Spark, and Flink.',
                features: ['Stream Processing', 'Event Analytics', 'Real-time Dashboards', 'Alerting']
              },
              {
                icon: '🎯',
                title: 'Customer Analytics',
                description: 'Understand customer behavior, lifetime value, and preferences to drive personalization.',
                features: ['Customer 360', 'Cohort Analysis', 'RFM Analysis', 'Attribution Modeling']
              },
            ].map((service, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-all group">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Tools */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="card p-12 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Analytics Tools & Platforms</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: 'Tableau', category: 'Visualization' },
                { name: 'Power BI', category: 'Business Intelligence' },
                { name: 'Looker', category: 'Data Exploration' },
                { name: 'Snowflake', category: 'Data Warehouse' },
                { name: 'Apache Airflow', category: 'Orchestration' },
                { name: 'dbt', category: 'Transformation' },
                { name: 'Python', category: 'Analytics' },
                { name: 'SQL', category: 'Queries' },
              ].map((tool, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-indigo-500/30 transition-all">
                  <div className="text-white font-bold mb-2">{tool.name}</div>
                  <div className="text-sm text-white/60">{tool.category}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Real-World Impact</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                industry: 'Retail',
                title: 'Sales Performance Dashboard',
                impact: '25% increase in sales through data insights',
                icon: '🛍️'
              },
              {
                industry: 'Finance',
                title: 'Risk Analytics Platform',
                impact: '40% reduction in fraud losses',
                icon: '💳'
              },
              {
                industry: 'Healthcare',
                title: 'Patient Analytics System',
                impact: '30% improvement in patient outcomes',
                icon: '🏥'
              },
            ].map((useCase, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="text-6xl mb-4">{useCase.icon}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-4">
                  {useCase.industry}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <div className="text-green-400 font-semibold">{useCase.impact}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
<section className="pb-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-6">Analytics Implementation Process</h2>
      <p className="text-xl text-white/70">Data to insights in 4 steps</p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          step: '01',
          title: 'Discover',
          description: 'Understand business questions, data sources, and analytics needs',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          step: '02',
          title: 'Design',
          description: 'Create data models, select BI tools, and design dashboards',
          color: 'from-purple-500 to-pink-500'
        },
        {
          step: '03',
          title: 'Build',
          description: 'Develop ETL pipelines, create visualizations, and integrate data',
          color: 'from-pink-500 to-rose-500'
        },
        {
          step: '04',
          title: 'Deliver',
          description: 'Deploy dashboards, train users, and establish data governance',
          color: 'from-rose-500 to-indigo-500'
        },
      ].map((process, index) => (
        <div key={index} className="relative text-center">
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/30`}>
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
          <div className="card p-12 text-center bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's build analytics solutions that transform your data into competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Analytics Journey
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