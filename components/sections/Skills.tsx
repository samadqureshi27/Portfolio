'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { DecryptText } from '@/components/ui/decrypt-text'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'cyan' as const,
    icon: '⬡',
    skills: ['React.js', 'TypeScript', 'JavaScript ES6+', 'Redux', 'Context API', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    color: 'green' as const,
    icon: '⬡',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'MVC Pattern', 'Microservices', 'JWT Auth'],
  },
  {
    title: 'Databases',
    color: 'cyan' as const,
    icon: '⬡',
    skills: ['MongoDB', 'Mongoose ODM', 'PostgreSQL', 'Redis', 'NoSQL Design'],
  },
  {
    title: 'Tools & DevOps',
    color: 'green' as const,
    icon: '⬡',
    skills: ['Git', 'GitHub', 'Docker', 'Postman', 'VS Code', 'Agile/Scrum'],
  },
  {
    title: 'Architecture',
    color: 'cyan' as const,
    icon: '⬡',
    skills: ['C4 Models', 'RESTful Architecture', 'Component-Based', 'Layered Architecture'],
  },
]

const coreStrengths = [
  { name: 'Full-Stack Development', level: 88 },
  { name: 'RESTful API Design', level: 90 },
  { name: 'React & State Management', level: 92 },
  { name: 'NoSQL Database Design', level: 85 },
  { name: 'TypeScript', level: 82 },
  { name: 'Problem Solving', level: 95 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-primary font-mono text-sm mb-2">{'// 02. skills'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <DecryptText text="Technical" /> <DecryptText text="Stack" className="text-cyan-primary" />
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-primary to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Skill badges */}
          <div className="lg:col-span-2 space-y-8">
            {skillCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-1.5 h-5 rounded-full"
                    style={{
                      background: cat.color === 'cyan' ? '#06b6d4' : '#22c55e',
                      boxShadow: `0 0 8px ${cat.color === 'cyan' ? '#06b6d4' : '#22c55e'}80`,
                    }}
                  />
                  <h3 className="text-sm font-mono font-semibold text-slate-300">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge key={skill} variant={cat.color}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency bars */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <h3 className="text-sm font-mono text-slate-400 mb-6">{'// proficiency'}</h3>
            {coreStrengths.map(({ name, level }, i) => (
              <div key={name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-slate-300 font-mono">{name}</span>
                  <span className="text-xs text-cyan-primary font-mono">{level}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.07 }}
                    className="h-full rounded-full relative"
                    style={{
                      background:
                        i % 2 === 0
                          ? 'linear-gradient(90deg, #06b6d4, #00ffff)'
                          : 'linear-gradient(90deg, #22c55e, #00ff88)',
                      boxShadow: i % 2 === 0 ? '0 0 6px #06b6d480' : '0 0 6px #22c55e80',
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
