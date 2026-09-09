'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/social-icons'
import { Card, CardContent } from '@/components/ui/card'
import { DecryptText } from '@/components/ui/decrypt-text'
import { Magnetic } from '@/components/ui/magnetic'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'qabdulsamad18@gmail.com',
    href: 'mailto:qabdulsamad18@gmail.com',
    color: '#06b6d4',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 305 9584906',
    href: 'tel:+923059584906',
    color: '#22c55e',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/AbdulSamad',
    href: 'https://github.com',
    color: '#06b6d4',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/AbdulSamad',
    href: 'https://linkedin.com',
    color: '#22c55e',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-primary/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-green-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-primary font-mono text-sm mb-2">{'// 05. contact'}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            <DecryptText text="Get In" /> <DecryptText text="Touch" className="text-cyan-primary" />
          </h2>
          <div className="mt-3 h-px w-24 bg-gradient-to-r from-cyan-primary to-transparent" />
          <p className="mt-4 text-slate-400 max-w-lg">
            Have a project in mind or want to collaborate? I&apos;m always open to discussing new opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <p className="text-xs text-slate-500 font-mono mb-6">{'// reach out directly'}</p>
            {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-cyan-primary/30 hover:bg-cyan-primary/5 transition-all duration-200 group cursor-pointer"
              >
                <div
                  className="p-2.5 rounded-lg shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon size={18} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono">{label}</p>
                  <p className="text-sm text-slate-300 group-hover:text-cyan-neon transition-colors font-mono">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <Card className="glass">
              <CardContent className="p-6">
                <p className="text-xs text-slate-500 font-mono mb-6">{'// send a message'}</p>
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <CheckCircle size={48} className="text-green-primary" />
                    <p className="text-green-primary font-mono font-medium">Message sent successfully!</p>
                    <p className="text-slate-400 text-sm text-center">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs text-slate-400 font-mono mb-1.5">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Your name"
                          className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 placeholder-slate-600 font-mono focus:outline-none focus:border-cyan-primary/60 focus:bg-cyan-primary/5 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs text-slate-400 font-mono mb-1.5">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 placeholder-slate-600 font-mono focus:outline-none focus:border-cyan-primary/60 focus:bg-cyan-primary/5 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs text-slate-400 font-mono mb-1.5">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="Project inquiry..."
                        className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 placeholder-slate-600 font-mono focus:outline-none focus:border-cyan-primary/60 focus:bg-cyan-primary/5 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs text-slate-400 font-mono mb-1.5">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell me about your project..."
                        className="w-full px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 placeholder-slate-600 font-mono focus:outline-none focus:border-cyan-primary/60 focus:bg-cyan-primary/5 transition-all duration-200 resize-none"
                      />
                    </div>

                    <Magnetic strength={0.15} className="block w-full">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyan-primary/10 text-cyan-neon border border-cyan-primary/50 hover:bg-cyan-primary/20 hover:border-cyan-neon font-mono text-sm font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed glow-cyan"
                      >
                        {loading ? (
                          <>
                            <span className="w-4 h-4 border-2 border-cyan-primary/30 border-t-cyan-neon rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
