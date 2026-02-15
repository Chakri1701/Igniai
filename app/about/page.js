import Background3D from '@/components/Background3D'
import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <Background3D />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gradient">About IgniaIT</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pioneering career consultancy in Hyderabad, dedicated to empowering 
            the next generation of professionals.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#00ff88]">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At IgniaIT, we believe every young individual has the potential to achieve 
              extraordinary success. Our mission is to bridge the gap between talent and 
              opportunity by providing comprehensive career guidance, skill development 
              programs, and direct connections to leading employers.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are committed to empowering the youth of India with the tools, knowledge, 
              and opportunities they need to build fulfilling and prosperous careers in 
              today's dynamic job market.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-[#00ff88]">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To become India's most trusted career platform, recognized for transforming 
              the lives of millions of young professionals through innovation, guidance, 
              and unwavering commitment to excellence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where every young person has access to the resources 
              and support they need to discover their passion, develop their skills, and 
              achieve their career aspirations.
            </p>
          </div>
        </div>

        {/* CEO Section */}
        <div className="glass rounded-3xl p-12 mb-20">
          <div className="text-center mb-8">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#00ff88] to-[#0088ff] mx-auto mb-6 flex items-center justify-center">
              <span className="text-6xl font-bold text-black">JP</span>
            </div>
            <h2 className="text-4xl font-bold mb-2 text-gradient">Jayaprakash Reddy</h2>
            <p className="text-xl text-gray-400">Founder & CEO</p>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto mb-6">
            With over a decade of experience in career development and talent acquisition, 
            Jayaprakash Reddy founded IgniaIT with a vision to revolutionize how young 
            professionals approach their careers. His passion for mentorship and commitment 
            to excellence has helped thousands of individuals discover and achieve their 
            professional goals.
          </p>
          
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold hover:shadow-xl hover:shadow-[#00ff88]/50 transition-all duration-300"
            >
              Connect with Our CEO
            </Link>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for the highest standards in everything we do',
                icon: '⭐',
              },
              {
                title: 'Innovation',
                description: 'We embrace new ideas and cutting-edge solutions',
                icon: '💡',
              },
              {
                title: 'Integrity',
                description: 'We build trust through transparency and honesty',
                icon: '🤝',
              },
              {
                title: 'Empowerment',
                description: 'We enable individuals to reach their full potential',
                icon: '🚀',
              },
              {
                title: 'Commitment',
                description: 'We are dedicated to your success and growth',
                icon: '💪',
              },
              {
                title: 'Community',
                description: 'We foster connections and collaborative growth',
                icon: '🌟',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-[#00ff88]">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="glass rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gradient">Our Location</h2>
          <p className="text-xl text-gray-300 mb-2">📍 Hyderabad, India</p>
          <p className="text-gray-400">
            Serving the youth across Telangana and beyond
          </p>
        </div>
      </div>
    </main>
  )
}