import Background3D from '@/components/Background3D'
import Link from 'next/link'

export default function Opportunities() {
  const opportunities = [
    {
      title: 'Software Development',
      company: 'Tech Giants',
      type: 'Full-time',
      location: 'Hyderabad',
      description: 'Join innovative teams building next-gen applications',
      skills: ['React', 'Node.js', 'Python'],
      category: 'Technology',
    },
    {
      title: 'Data Analytics',
      company: 'FinTech Solutions',
      type: 'Full-time',
      location: 'Remote',
      description: 'Analyze complex data to drive business decisions',
      skills: ['SQL', 'Python', 'Tableau'],
      category: 'Analytics',
    },
    {
      title: 'Digital Marketing',
      company: 'Marketing Pro',
      type: 'Internship',
      location: 'Hyderabad',
      description: 'Create impactful campaigns for global brands',
      skills: ['SEO', 'Content', 'Social Media'],
      category: 'Marketing',
    },
    {
      title: 'UI/UX Designer',
      company: 'Design Studio',
      type: 'Full-time',
      location: 'Hybrid',
      description: 'Craft beautiful and intuitive user experiences',
      skills: ['Figma', 'Adobe XD', 'User Research'],
      category: 'Design',
    },
    {
      title: 'Business Analyst',
      company: 'Consulting Firm',
      type: 'Full-time',
      location: 'Hyderabad',
      description: 'Bridge the gap between business and technology',
      skills: ['Analysis', 'Communication', 'Strategy'],
      category: 'Business',
    },
    {
      title: 'Cloud Engineer',
      company: 'Cloud Services Inc',
      type: 'Full-time',
      location: 'Remote',
      description: 'Build and maintain cloud infrastructure',
      skills: ['AWS', 'Azure', 'DevOps'],
      category: 'Technology',
    },
    {
      title: 'Content Writer',
      company: 'Media House',
      type: 'Freelance',
      location: 'Remote',
      description: 'Create engaging content for diverse audiences',
      skills: ['Writing', 'Research', 'SEO'],
      category: 'Content',
    },
    {
      title: 'HR Specialist',
      company: 'Corporate Solutions',
      type: 'Full-time',
      location: 'Hyderabad',
      description: 'Shape company culture and talent acquisition',
      skills: ['Recruitment', 'Training', 'Employee Relations'],
      category: 'Human Resources',
    },
    {
      title: 'Cybersecurity Analyst',
      company: 'Security Tech',
      type: 'Full-time',
      location: 'Hyderabad',
      description: 'Protect systems from digital threats',
      skills: ['Security', 'Network', 'Ethical Hacking'],
      category: 'Technology',
    },
  ]

  const programs = [
    {
      title: 'Skill Development Workshops',
      description: 'Hands-on training in cutting-edge technologies',
      icon: '🎓',
    },
    {
      title: 'Career Counseling',
      description: 'One-on-one guidance from industry experts',
      icon: '💼',
    },
    {
      title: 'Interview Preparation',
      description: 'Mock interviews and feedback sessions',
      icon: '🎯',
    },
    {
      title: 'Resume Building',
      description: 'Create impactful resumes that stand out',
      icon: '📄',
    },
  ]

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <Background3D />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gradient">Career Opportunities</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover exciting opportunities tailored for young professionals. 
            Your dream career starts here.
          </p>
        </div>

        {/* Programs Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Our Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff88]/20"
              >
                <div className="text-5xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#00ff88]">{program.title}</h3>
                <p className="text-gray-400">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Latest Openings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((job, index) => (
              <div
                key={index}
                className="glass rounded-xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#00ff88]/20 flex flex-col"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black mb-2">
                      {job.type}
                    </span>
                    <h3 className="text-2xl font-bold text-[#00ff88] mb-1">{job.title}</h3>
                    <p className="text-gray-400">{job.company}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 flex-grow">{job.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">📍 {job.location}</p>
                  <p className="text-sm text-gray-400">🏷️ {job.category}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300 border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <button className="w-full py-3 rounded-lg border-2 border-[#00ff88] text-[#00ff88] font-semibold hover:bg-[#00ff88] hover:text-black transition-all duration-300">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center glass rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-6 text-gradient">
            Don't See What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us and we'll help you find the perfect opportunity for your skills and interests.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  )
}