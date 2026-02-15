'use client'

import { useState } from 'react'
import Link from 'next/link'
import Background3D from '@/components/Background3D'

export default function SignUp() {
  const [step, setStep] = useState('signup') // 'signup' or 'verify'
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  })
  const [verificationCode, setVerificationCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }

  const handleSignup = async (e) => {
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

      // Move to verification step
      setStep('verify')
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleVerify = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          code: verificationCode,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Verification failed')
      }

      setSuccess(true)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const resendCode = async () => {
    setError('')
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

      if (response.ok) {
        alert('New verification code sent! Check your email.')
      }
    } catch (error) {
      setError('Failed to resend code')
    } finally {
      setLoading(false)
    }
  }

  // Success screen
  if (success) {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-20">
        <Background3D />
        
        <div className="w-full max-w-md">
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-4xl font-bold mb-4">
              <span className="text-gradient">Email Verified!</span>
            </h1>
            
            <p className="text-gray-300 mb-6">
              Welcome to IgniaIT, <strong className="text-[#00ff88]">{formData.fullName}</strong>!
            </p>

            <p className="text-gray-400 mb-8">
              Your account has been created and verified successfully. You can now login!
            </p>

            <Link
              href="/login"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold hover:shadow-xl hover:shadow-[#00ff88]/50 transition-all duration-300"
            >
              Go to Login
            </Link>
          </div>
        </div>
      </main>
    )
  }

  // Verification screen
  if (step === 'verify') {
    return (
      <main className="min-h-screen flex items-center justify-center px-4 py-20">
        <Background3D />
        
        <div className="w-full max-w-md">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">📧</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">
                <span className="text-gradient">Check Your Email</span>
              </h1>
              <p className="text-gray-400">We sent a 6-digit code to</p>
              <p className="text-[#00ff88] font-semibold mt-2">{formData.email}</p>
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200">
                ⚠️ {error}
              </div>
            )}

            <form onSubmit={handleVerify} className="space-y-6">
              <div>
                <label htmlFor="code" className="block text-sm font-semibold text-[#00ff88] mb-2">
                  Verification Code
                </label>
                <input
                  type="text"
                  id="code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  required
                  maxLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-[#00ff88] transition-colors text-center text-2xl tracking-widest font-bold"
                  placeholder="000000"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Enter the 6-digit code from your email
                </p>
              </div>

              <button
                type="submit"
                disabled={loading || verificationCode.length !== 6}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Verifying...' : 'Verify Email'}
              </button>

              <div className="text-center">
                <p className="text-gray-400 text-sm">
                  Didn't receive the code?{' '}
                  <button
                    type="button"
                    onClick={resendCode}
                    disabled={loading}
                    className="text-[#00ff88] hover:text-[#0088ff] font-semibold transition-colors"
                  >
                    Resend Code
                  </button>
                </p>
              </div>
            </form>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => setStep('signup')}
              className="text-gray-400 hover:text-[#00ff88] transition-colors"
            >
              ← Back to Signup
            </button>
          </div>
        </div>
      </main>
    )
  }

  // Signup form
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

          <form onSubmit={handleSignup} className="space-y-6">
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
                placeholder="Create a strong password (min 8 characters)"
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
                className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#00ff88] focus:ring-[#00ff88]"
              />
              <label htmlFor="agreeToTerms" className="text-sm text-gray-400">
                I agree to the{' '}
                <Link href="#" className="text-[#00ff88] hover:text-[#0088ff] transition-colors">
                  Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-[#00ff88] hover:text-[#0088ff] transition-colors">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-[#00ff88] hover:text-[#0088ff] font-semibold transition-colors">
                Login
              </Link>
            </p>
          </div>
        </div>

        <div className="text-center mt-6">
          <Link href="/" className="text-gray-400 hover:text-[#00ff88] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}