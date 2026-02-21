import Background3D from '@/components/Background3D'

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Background3D />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly to us, including name, email address, 
                and any other information you choose to provide when contacting us or using our services.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                to communicate with you, and to comply with legal obligations.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, or destruction.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. 
                You may also object to or restrict certain processing of your data.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@igniai.com" className="text-purple-400 hover:underline">
                  privacy@igniai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}