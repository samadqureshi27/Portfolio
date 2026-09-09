import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import { Code2 } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-primary/20 to-transparent" />
      </div>

      <About />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-primary/20 to-transparent" />
      </div>

      <Skills />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-green-primary/20 to-transparent" />
      </div>

      <Experience />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-primary/20 to-transparent" />
      </div>

      <Projects />

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-green-primary/20 to-transparent" />
      </div>

      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 size={16} className="text-cyan-primary" />
            <span className="font-mono text-sm text-slate-500">
              <span className="text-cyan-primary">&lt;</span>AbdulSamad
              <span className="text-cyan-primary">/&gt;</span>
            </span>
          </div>
          <p className="text-xs text-slate-600 font-mono">
            Built with Next.js · TypeScript · Tailwind CSS ·{' '}
            <span className="text-cyan-primary/60">2025</span>
          </p>
        </div>
      </footer>
    </main>
  )
}
