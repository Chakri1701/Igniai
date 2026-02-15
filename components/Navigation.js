'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#0088ff] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-black">I</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">IgniAI Technologies</h1>
              <p className="text-xs text-gray-400">Empowering Careers</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#00ff88] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00ff88] to-[#0088ff] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="px-6 py-2 rounded-lg border border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88] hover:text-black transition-all duration-300"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-semibold hover:shadow-lg hover:shadow-[#00ff88]/50 transition-all duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/10">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:text-[#00ff88] hover:bg-white/5 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block px-4 py-3 rounded-lg border border-[#00ff88] text-[#00ff88] text-center hover:bg-[#00ff88] hover:text-black transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-3 rounded-lg bg-gradient-to-r from-[#00ff88] to-[#0088ff] text-black font-semibold text-center hover:shadow-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}