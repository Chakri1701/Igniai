import Background3D from '@/components/Background3D'
import ServiceBackground from '@/components/ServiceBackground'
import Link from 'next/link'

export const metadata = {
  title: 'AI & Machine Learning Services | IgniAI Technologies',
  description: 'Transform your business with intelligent AI and machine learning solutions. Custom models, NLP, computer vision, and predictive analytics.'
}

export default function AIMLService() {
  return (
    <main className="min-h-screen">
      <Background3D />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-purple-400 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">AI & Machine Learning</span>
          </div>

          {/* Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <div className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 font-semibold text-sm mb-6">
                AI & Machine Learning
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Build Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">AI-Powered</span> Solutions
              </h1>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Transform your business with cutting-edge artificial intelligence and machine learning. 
                From predictive analytics to natural language processing, we build custom AI solutions 
                that drive real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-center">
                  Get Started
                </Link>
                <a href="#services" className="btn-secondary text-center">
                  Explore Solutions
                </a>
              </div>
            </div>

            {/* Animated Background */}
            <div className="relative h-96 rounded-3xl overflow-hidden">
              <ServiceBackground type="ai" />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/10"></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-3xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl shadow-purple-500/50">
                    <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-white/80 text-lg font-semibold">AI-Powered Intelligence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section id="services" className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI & ML Solutions We Offer
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive artificial intelligence services tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🤖',
                title: 'Custom ML Models',
                description: 'Build bespoke machine learning models trained on your data for specific business outcomes and predictions.',
                features: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Deep Learning']
              },
              {
                icon: '💬',
                title: 'Natural Language Processing',
                description: 'Process and understand human language with sentiment analysis, chatbots, and text classification.',
                features: ['Chatbots', 'Sentiment Analysis', 'Text Classification', 'Language Translation']
              },
              {
                icon: '👁️',
                title: 'Computer Vision',
                description: 'Extract insights from images and videos with object detection, facial recognition, and OCR.',
                features: ['Object Detection', 'Facial Recognition', 'Image Classification', 'OCR']
              },
              {
                icon: '📊',
                title: 'Predictive Analytics',
                description: 'Forecast trends, customer behavior, and business outcomes using advanced statistical models.',
                features: ['Time Series Analysis', 'Demand Forecasting', 'Churn Prediction', 'Risk Assessment']
              },
              {
                icon: '🎯',
                title: 'Recommendation Systems',
                description: 'Personalize user experiences with intelligent product and content recommendations.',
                features: ['Collaborative Filtering', 'Content-Based', 'Hybrid Systems', 'Real-time Personalization']
              },
              {
                icon: '🔍',
                title: 'Anomaly Detection',
                description: 'Identify fraud, security threats, and system failures with intelligent pattern recognition.',
                features: ['Fraud Detection', 'Quality Control', 'Network Security', 'Predictive Maintenance']
              },
            ].map((service, index) => (
              <div key={index} className="card p-8 hover:scale-105 transition-all duration-300 group">
                <div className="text-6xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
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
          <div className="card p-12 bg-gradient-to-br from-purple-500/10 to-blue-500/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Technologies We Use</h2>
              <p className="text-xl text-white/70">Industry-leading AI/ML frameworks and tools</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { name: 'TensorFlow', category: 'Deep Learning' },
                { name: 'PyTorch', category: 'Neural Networks' },
                { name: 'Scikit-learn', category: 'Machine Learning' },
                { name: 'Keras', category: 'Deep Learning' },
                { name: 'OpenAI GPT', category: 'Large Language Models' },
                { name: 'Hugging Face', category: 'NLP' },
                { name: 'LangChain', category: 'LLM Applications' },
                { name: 'MLflow', category: 'Model Management' },
              ].map((tech, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-purple-500/30 transition-all">
                  <div className="text-white font-bold mb-2">{tech.name}</div>
                  <div className="text-sm text-white/60">{tech.category}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white/60">+ Many more cutting-edge AI/ML technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Real-World Use Cases</h2>
            <p className="text-xl text-white/70">See how AI transforms businesses across industries</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                industry: 'E-Commerce',
                title: 'Smart Product Recommendations',
                description: 'Increase sales by 35% with AI-powered personalized product suggestions based on browsing history and purchase patterns.',
                impact: '35% increase in conversion rate'
              },
              {
                industry: 'Healthcare',
                title: 'Medical Image Analysis',
                description: 'Detect diseases earlier with computer vision models that analyze X-rays, MRIs, and CT scans with 95%+ accuracy.',
                impact: '40% faster diagnosis'
              },
              {
                industry: 'Finance',
                title: 'Fraud Detection System',
                description: 'Prevent fraud in real-time by analyzing transaction patterns and flagging suspicious activities instantly.',
                impact: '80% reduction in fraud losses'
              },
              {
                industry: 'Manufacturing',
                title: 'Predictive Maintenance',
                description: 'Reduce downtime by predicting equipment failures before they happen using sensor data analysis.',
                impact: '50% less unplanned downtime'
              },
            ].map((useCase, index) => (
              <div key={index} className="card p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold mb-4">
                  {useCase.industry}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed">{useCase.description}</p>
                <div className="flex items-center gap-2 text-green-400 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {useCase.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Process */}
<section className="pb-20 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white mb-6">Our AI Development Process</h2>
      <p className="text-xl text-white/70">From concept to deployment in 4 steps</p>
    </div>

    <div className="grid md:grid-cols-4 gap-8">
      {[
        {
          step: '01',
          title: 'Discovery',
          description: 'Understand your business goals, data landscape, and identify AI opportunities',
          color: 'from-purple-500 to-blue-500'
        },
        {
          step: '02',
          title: 'Design',
          description: 'Architect the AI solution, select models, and design data pipelines',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          step: '03',
          title: 'Develop',
          description: 'Train models, validate accuracy, and integrate with your systems',
          color: 'from-cyan-500 to-teal-500'
        },
        {
          step: '04',
          title: 'Deploy',
          description: 'Launch to production, monitor performance, and continuously improve',
          color: 'from-teal-500 to-green-500'
        },
      ].map((process, index) => (
        <div key={index} className="relative text-center">
          {/* Colored circle with number */}
          <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-6 shadow-lg shadow-purple-500/30`}>
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
          <div className="card p-12 text-center bg-gradient-to-br from-purple-500/10 to-blue-500/10">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how artificial intelligence and machine learning can transform your business and drive innovation.
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