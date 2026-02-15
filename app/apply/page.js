'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Background3D from '@/components/Background3D'
import Link from 'next/link'
import { useUploadThing } from '@/lib/uploadthing'

export default function JobApplication() {
  const router = useRouter()
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [resumeFile, setResumeFile] = useState(null)
  const [resumePreview, setResumePreview] = useState('')
  
  const { startUpload, isUploading } = useUploadThing("resumeUploader")
  
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    date_of_birth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    education: '',
    university: '',
    graduation_year: '',
    skills: '',
    experience_years: '',
    previous_company: '',
    job_position: '',
    cover_letter: '',
    linkedin_url: '',
    portfolio_url: '',
    expected_salary: '',
    available_from: '',
  })

  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        full_name: session.user.name || '',
        email: session.user.email || '',
      }))
    }
  }, [session])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
      if (!allowedTypes.includes(file.type)) {
        setError('Please upload a PDF or Word document')
        return
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB')
        return
      }

      setResumeFile(file)
      setResumePreview(file.name)
      setError('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (!resumeFile) {
        setError('Please upload your resume')
        setLoading(false)
        return
      }

      // Upload resume
      const uploadedFiles = await startUpload([resumeFile])
      
      if (!uploadedFiles || uploadedFiles.length === 0) {
        throw new Error('Failed to upload resume')
      }

      const resumeUrl = uploadedFiles[0].url

      // Submit application
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          resume_url: resumeUrl,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit application')
      }

      setSuccess(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (error) {
      console.error('Error:', error)
      setError(error.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  // Success screen (same as before)
  if (success) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-4">
        <Background3D />
        
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-5xl font-bold mb-4">
              <span className="text-gradient">Application Submitted!</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Thank you for applying, <strong className="text-[#00ff88]">{formData.full_name}</strong>!
            </p>

            <div className="glass rounded-lg p-6 mb-8 text-left">
              <h3 className="text-lg font-bold text-[#00ff88] mb-3">📧 What's Next?</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✅ We've received your application</li>
                <li>✅ Our team will review your profile</li>
                <li>✅ You'll hear from us within 5-7 business days</li>
                <li>✅ Check your email for updates</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/opportunities"
                className="px-8 py-3 rounded-lg border-2 border-[#00ff88] text-[#00ff88] font-bold hover:bg-[#00ff88] hover:text-black transition-all duration-300"
              >
                View More Opportunities
              </Link>
              <Link
                href="/"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold hover:shadow-xl hover:shadow-[#00ff88]/50 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <Background3D />
      
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Job Application</span>
          </h1>
          <p className="text-xl text-gray-300">
            Fill in your details and upload your resume to apply
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200">
            ⚠️ {error}
          </div>
        )}

        {/* Rest of the form is the same as before, just keep all the form fields */}
        {/* I'll show the resume upload section which is important */}
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* ... All your form sections from before ... */}
          
          {/* Just showing the Resume Upload section */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-[#00ff88]">📄 Resume Upload</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold text-[#00ff88] mb-2">
                Upload Resume * (PDF or Word, Max 5MB)
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-[#00ff88] transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-gradient-to-r file:from-[#00ff88] file:to-[#0088ff] file:text-black file:font-semibold hover:file:cursor-pointer"
              />
              {resumePreview && (
                <p className="mt-2 text-sm text-[#00ff88]">
                  ✅ Selected: {resumePreview}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/opportunities"
              className="px-8 py-4 rounded-lg border-2 border-[#00ff88] text-[#00ff88] font-bold text-center hover:bg-[#00ff88] hover:text-black transition-all duration-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={loading || isUploading}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading || isUploading ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}