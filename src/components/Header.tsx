'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'الرئيسية', href: '#home' },
    { label: 'المشكلة', href: '#features' },
    { label: 'الفرص', href: '#features' },
    { label: 'حلول', href: '#solutions' },
    { label: 'البرامج', href: '#programs' },
    { label: 'خطوات العمل', href: '#process' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4">
      <div 
        className={`max-w-4xl mx-auto transition-all duration-500 ${
          isScrolled 
            ? 'bg-wakkelni-black/90 backdrop-blur-xl border border-wakkelni-cyan/20' 
            : 'bg-wakkelni-purple/20 backdrop-blur-xl border border-wakkelni-purple/10'
        } rounded-full px-8`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="وكّلني - للدعاية والإعلان وحلول التسويق الرقمي" 
                className="h-10"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-reverse space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/90 hover:text-wakkelni-cyan transition-all duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-reverse space-x-4">
            <a href="/apply">
              <button className="bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                تواصل معنا
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white/80 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-4xl mx-auto">
          <div className="px-4 pt-4 pb-4 space-y-2 bg-wakkelni-black/95 backdrop-blur-xl border border-wakkelni-purple/20 rounded-3xl">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-white/80 hover:text-wakkelni-cyan transition-colors duration-200 text-right"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <a href="/apply">
                  <button className="w-full bg-gradient-to-r from-wakkelni-purple to-wakkelni-cyan hover:from-wakkelni-cyan hover:to-wakkelni-purple text-white px-4 py-2 rounded-full font-medium transition-all duration-300">
                    تواصل معنا
                  </button>
                </a>
              </div>
          </div>
        </div>
      )}
    </header>
  )
}