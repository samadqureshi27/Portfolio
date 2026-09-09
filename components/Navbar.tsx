'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Magnetic } from '@/components/ui/magnetic'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed top-4 left-4 right-4 z-50 rounded-xl transition-all duration-300',
        scrolled
          ? 'glass border-cyan-primary/30 shadow-lg shadow-cyan-primary/5'
          : 'bg-transparent border border-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-cyan-primary/10 border border-cyan-primary/40 flex items-center justify-center group-hover:border-cyan-neon group-hover:glow-cyan transition-all duration-200">
            <Code2 size={16} className="text-cyan-primary group-hover:text-cyan-neon" />
          </div>
          <span className="font-mono font-bold text-white text-sm">
            <span className="text-cyan-primary">&lt;</span>AS
            <span className="text-cyan-primary">/&gt;</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-slate-400 hover:text-cyan-neon font-mono rounded-md hover:bg-cyan-primary/10 transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CV button */}
        <div className="hidden md:flex items-center gap-3">
          <Magnetic strength={0.25}>
            <a
              href="/Samad_CV.pdf"
              download
              className="px-4 py-1.5 text-sm font-mono font-medium rounded-lg bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/40 hover:bg-cyan-primary/20 hover:border-cyan-neon hover:text-cyan-neon transition-all duration-200 cursor-pointer"
            >
              Download CV
            </a>
          </Magnetic>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-cyan-neon hover:bg-cyan-primary/10 transition-all duration-200 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass border-t border-cyan-primary/20 rounded-b-xl px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 text-sm text-slate-400 hover:text-cyan-neon font-mono rounded-md hover:bg-cyan-primary/10 transition-all duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/Samad_CV.pdf"
            download
            className="mt-2 px-3 py-2 text-sm font-mono font-medium rounded-lg bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/40 text-center transition-all duration-200 cursor-pointer"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  )
}
