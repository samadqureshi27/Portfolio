'use client'

import { motion } from 'framer-motion'
import { User, MapPin, GraduationCap, Coffee } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { DecryptText } from '@/components/ui/decrypt-text'

const stats = [
  { value: '1.5+', label: 'Years Experience', color: 'text-cyan-neon' },
  { value: '3+', label: 'Projects Built', color: 'text-green-neon' },
  { value: '10+', label: 'Technologies', color: 'text-cyan-primary' },
  { value: '2', label: 'Companies', color: 'text-green-primary' },
]

const details = [
  { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
  { icon: GraduationCap, label: 'Education', value: 'Software Engineering — Minhaj University (2021–2025)' },
  { icon: Coffee, label: 'Interests', value: 'Sports, Travel, Problem-Solving Puzzles' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-primary font-mono text-sm mb-2">{'// 01. about'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <DecryptText text="About" /> <DecryptText text="Me" className="text-cyan-primary" />
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-primary to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-cyan-primary/10 border border-cyan-primary/30">
                <User size={20} className="text-cyan-primary" />
              </div>
              <h3 className="text-lg font-semibold text-white font-mono">Who I Am</h3>
            </div>

            <p className="text-slate-400 leading-relaxed">
              I&apos;m <span className="text-cyan-primary font-medium">Abdul Samad</span>, a passionate Full Stack Web
              Developer specializing in the{' '}
              <span className="text-green-primary font-medium">MERN stack</span>. I build scalable, performant web
              applications with clean architecture and great user experiences.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With experience at{' '}
              <span className="text-cyan-primary font-medium">Tri Tech Technology LLC</span> and{' '}
              <span className="text-cyan-primary font-medium">Tech East Pvt Ltd</span>, I&apos;ve worked on real-world
              POS systems, CRM platforms, and e-commerce solutions — always pushing for clean code and modern practices.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I&apos;m proficient in RESTful API design, NoSQL database management, state management with Redux, and
              Agile/Scrum workflows. Currently pursuing my{' '}
              <span className="text-green-primary font-medium">Software Engineering degree</span> at Minhaj University
              Lahore (graduating May 2025).
            </p>

            {/* Details */}
            <div className="space-y-3 pt-2">
              {details.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <Icon size={16} className="text-cyan-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-500 font-mono">{label}: </span>
                    <span className="text-sm text-slate-300">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats + card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, color }) => (
                <Card key={label} className="glass-hover cursor-default">
                  <CardContent className="p-5">
                    <div className={`text-3xl font-bold font-mono ${color}`}>{value}</div>
                    <div className="text-xs text-slate-400 mt-1">{label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Languages card */}
            <Card className="glass-hover">
              <CardContent className="p-5">
                <p className="text-xs text-slate-500 font-mono mb-3">{'// languages'}</p>
                <div className="space-y-3">
                  {[
                    { lang: 'English', level: 'Fluent', pct: 90, color: '#06b6d4' },
                    { lang: 'Urdu', level: 'Native', pct: 100, color: '#22c55e' },
                  ].map(({ lang, level, pct, color }) => (
                    <div key={lang}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-slate-300">{lang}</span>
                        <span className="text-slate-500 text-xs font-mono">{level}</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                          className="h-full rounded-full"
                          style={{ background: color, boxShadow: `0 0 6px ${color}80` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
