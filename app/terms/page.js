import Background3D from '@/components/Background3D'

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Background3D />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-white/70 leading-relaxed">
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p>
                By accessing our website and services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on IgniAI's website for 
                personal, non-commercial transitory viewing only.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Service Modifications</h2>
              <p>
                IgniAI reserves the right to modify or discontinue any service at any time without 
                notice. We shall not be liable to you or any third party for any modification or 
                discontinuance of service.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Limitations</h2>
              <p>
                In no event shall IgniAI be liable for any damages arising out of the use or 
                inability to use our services.
              </p>
            </div>

            <div className="card p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
              <p>
                Questions about the Terms of Service should be sent to{' '}
                <a href="mailto:legal@igniai.com" className="text-purple-400 hover:underline">
                  legal@igniai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}