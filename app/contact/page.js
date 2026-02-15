'use client'

import { useState } from 'react'
import Background3D from '@/components/Background3D'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-4">
      <Background3D />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-gradient">Get in Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and 
            we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="glass rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gradient">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff88] mb-1">Location</h3>
                    <p className="text-gray-300">Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff88] mb-1">Email</h3>
                    <p className="text-gray-300">info@igniait.com</p>
                    <p className="text-gray-300">careers@igniait.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff88] mb-1">Phone</h3>
                    <p className="text-gray-300">+91 XXX XXX XXXX</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">👤</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#00ff88] mb-1">CEO</h3>
                    <p className="text-gray-300">Jayaprakash Reddy</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 text-gradient">Office Hours</h2>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gradient">Send us a Message</h2>
            
            {submitted ? (
              <div className="bg-gradient-to-r from-[#00ff88] to-[#0088ff] rounded-lg p-6 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-black mb-2">Message Sent!</h3>
                <p className="text-black">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#00ff88] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
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
                  <label htmlFor="message" className="block text-sm font-semibold text-[#00ff88] mb-2">
                    Your Message/Questions *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 focus:border-[#00ff88] transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-bold text-lg hover:shadow-2xl hover:shadow-[#00ff88]/50 transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-12 glass rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gradient text-center">Find Us</h2>
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-[#00ff88]/20 to-[#0088ff]/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📍</div>
              <p className="text-2xl font-bold text-gradient">Hyderabad, India</p>
              <p className="text-gray-400 mt-2">Exact location shared upon contact</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}