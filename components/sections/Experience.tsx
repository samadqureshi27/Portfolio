'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, ArrowUpRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DecryptText } from '@/components/ui/decrypt-text'

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'Tri Tech Technology LLC',
    period: 'Feb 2025 – Present',
    type: 'Full-time',
    current: true,
    color: '#06b6d4',
    highlights: [
      'Built frontend for POS and CRM systems using React and modern CSS frameworks',
      'Implemented dynamic UIs for sales, inventory, and data visualization modules',
      'Developed CRUD interfaces and optimized state handling for faster interactions',
      'Fixed production UI bugs and ensured cross-browser compatibility',
      'Followed clean coding standards and version control with Git',
    ],
    tech: ['React.js', 'TypeScript', 'Redux', 'CSS3', 'Git'],
  },
  {
    role: 'Junior Frontend Developer',
    company: 'Tech East Pvt Ltd',
    period: 'Aug 2024 – Jan 2025',
    type: 'Full-time',
    current: false,
    color: '#22c55e',
    highlights: [
      'Developed interactive UIs using React.js and TypeScript for business applications',
      'Designed and implemented complex frontend logic consuming RESTful APIs',
      'Applied component-based architecture for reusable, modular codebases',
      'Optimized web performance and seamless data flow between UI and NoSQL databases',
      'Collaborated with backend teams for smooth API integration and data mapping',
      'Participated in Agile/Scrum ceremonies and UI/UX design sprints',
    ],
    tech: ['React.js', 'TypeScript', 'REST APIs', 'MongoDB', 'Agile'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-primary font-mono text-sm mb-2">{'// 03. experience'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <DecryptText text="Work" /> <DecryptText text="Experience" className="text-cyan-primary" />
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-primary to-transparent" />
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-primary/50 via-green-primary/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{
                    borderColor: exp.color,
                    background: '#050505',
                    boxShadow: `0 0 10px ${exp.color}60`,
                  }}
                />

                <Card className="glass-hover">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={16} style={{ color: exp.color }} />
                          <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs font-mono rounded-full bg-green-primary/10 text-green-primary border border-green-primary/30">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="font-mono text-sm font-medium" style={{ color: exp.color }}>
                          {exp.company}{' '}
                          <ArrowUpRight size={12} className="inline opacity-60" />
                        </p>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono shrink-0">
                        <Calendar size={12} />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2 mb-5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-slate-400">
                          <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: exp.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <Badge key={t} variant={exp.color === '#06b6d4' ? 'cyan' : 'green'}>
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
