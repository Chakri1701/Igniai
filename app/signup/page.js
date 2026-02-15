'use client'

import { useState } from 'react'
import Link from 'next/link'
import Background3D from '@/components/Background3D'

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match!')
      return
    }

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions')
      return
    }

    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      alert('Account created! Check your email for verification code.')
      // You can add redirect or show verification screen here
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-20">
      <Background3D />
      
      <div className="w-full max-w-md">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center mx-auto mb-4">
              <span className="text-4xl font-bold text-black">I</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">
              <span className="text-gradient">Create Account</span>
            </h1>
            <p className="text-gray-400">Join IgniaIT and start your journey</p>
          </div>

          {error && (
            <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-[#00ff88] mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-[#00ff88] transition-colors"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#00ff88] mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-[#00ff88] transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#00ff88] mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-[#00ff88] transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-[#00ff88] mb-2">
                Password *
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                minLength="8"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-[#00ff88] transition-colors"
                placeholder="Min 8 characters"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-[#00ff88] mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                minLength="8"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-[#00ff88] transition-colors"
                placeholder="Confirm your password"
              />
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-400">
                I agree to the Terms and Conditions
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 disabled:opacity-50"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-[#00ff88] hover:text-[#0088ff] font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-[#00ff88]">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}