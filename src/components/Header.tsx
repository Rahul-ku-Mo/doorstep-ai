'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 74 64" fill="currentColor">
                <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z" />
              </svg>
              <span className="text-lg sm:text-xl font-semibold text-white">Vercel</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Products</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Resources</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2 sm:space-x-2">
            <button className="hidden md:block px-2 sm:px-3 py-2 border border-zinc-800 text-white rounded-md transition-colors text-xs sm:text-sm font-medium">
              Contact
            </button>
            <button className="px-2 sm:px-3 py-2 bg-transparent border border-zinc-800 text-white rounded-md transition-colors font-medium text-xs sm:text-sm">
              Dashboard
            </button>
            
            {/* Theme toggle */}
            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-400 to-red-500 flex items-center justify-center">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-1 sm:p-2 text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Products</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Solutions</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Resources</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Enterprise</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Docs</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2">Pricing</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors py-2 md:hidden">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
