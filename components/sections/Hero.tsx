'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/social-icons'
import { SplineScene } from '@/components/ui/splite'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'

const roles = [
  'MERN Stack Developer',
  'Full Stack Engineer',
  'React Specialist',
  'API Architect',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-grid">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-primary/5 rounded-full blur-3xl pointer-events-none" />

      {/* Spotlight */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#06b6d4" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 min-h-[80vh]">
          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 flex flex-col gap-6"
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 self-start">
              <span className="w-2 h-2 rounded-full bg-green-primary neon-pulse" />
              <span className="text-green-primary font-mono text-sm">Available for work</span>
            </div>

            {/* Name */}
            <div>
              <p className="text-slate-400 font-mono text-sm mb-2">
                <span className="text-cyan-primary">const</span> developer ={' '}
                <span className="text-green-primary">&ldquo;</span>
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-white">Abdul </span>
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #06b6d4, #00ffff, #22c55e)',
                  }}
                >
                  Samad
                </span>
              </h1>
              <p className="text-slate-400 font-mono text-sm mt-2">
                <span className="text-green-primary">&rdquo;</span>
              </p>
            </div>

            {/* Typing role */}
            <div className="h-10 flex items-center">
              <span className="text-xl md:text-2xl font-mono text-slate-300">
                {'// '}
                <span className="text-cyan-neon neon-cyan">{displayed}</span>
                <span className="cursor-blink text-cyan-neon">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-base leading-relaxed max-w-lg">
              MERN Stack Developer with <span className="text-cyan-primary font-medium">1.5+ years</span> of experience
              building scalable web applications. Focused on performance, clean code, and exceptional user experiences.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-cyan-primary/10 text-cyan-neon border border-cyan-primary/50 hover:bg-cyan-primary/20 hover:border-cyan-neon font-mono text-sm font-medium transition-all duration-200 cursor-pointer glow-cyan"
                >
                  View Projects <ArrowRight size={16} />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 text-slate-300 border border-white/10 hover:border-cyan-primary/40 hover:text-cyan-neon font-mono text-sm font-medium transition-all duration-200 cursor-pointer"
                >
                  Contact Me <Mail size={16} />
                </a>
              </Magnetic>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-neon hover:bg-cyan-primary/10 border border-white/5 hover:border-cyan-primary/30 transition-all duration-200 cursor-pointer"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-neon hover:bg-cyan-primary/10 border border-white/5 hover:border-cyan-primary/30 transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:qabdulsamad18@gmail.com"
                className="p-2 rounded-lg text-slate-400 hover:text-cyan-neon hover:bg-cyan-primary/10 border border-white/5 hover:border-cyan-primary/30 transition-all duration-200 cursor-pointer"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <div className="h-px flex-1 bg-gradient-to-r from-cyan-primary/30 to-transparent max-w-32" />
              <span className="text-slate-500 font-mono text-xs">qabdulsamad18@gmail.com</span>
            </div>
          </motion.div>

          {/* Right — 3D Spline scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="flex-1 relative h-[400px] lg:h-[520px] w-full rounded-2xl overflow-hidden glass border border-cyan-primary/20 neon-pulse"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-primary/5 via-transparent to-green-primary/5 pointer-events-none z-10" />
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-primary transition-colors cursor-pointer"
        aria-label="Scroll down"
      >
        <span className="text-xs font-mono">scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.a>
    </section>
  )
}
