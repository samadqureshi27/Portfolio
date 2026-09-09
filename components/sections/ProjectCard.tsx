'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from '@/components/ui/social-icons'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ProjectGallery, type GalleryImage } from '@/components/sections/ProjectGallery'
import { DeviceWindow } from '@/components/sections/DeviceWindow'
import type { LucideIcon } from 'lucide-react'

export interface Project {
  title: string
  subtitle: string
  icon: LucideIcon
  color: string
  gradient: string
  description: string
  highlights: string[]
  tech: string[]
  featured: boolean
  images?: GalleryImage[]
  previewUrl?: string
  offline?: boolean
}

export default function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.4, 1, 1, 1, 0.4])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50])
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  const boxShadow = useTransform(
    glow,
    (v) => `0 0 ${v * 30}px ${project.color}${Math.round(v * 45)
      .toString(16)
      .padStart(2, '0')}`
  )

  const Icon = project.icon

  return (
    <motion.div ref={ref} style={{ scale, opacity, y, boxShadow }} className="relative rounded-2xl">
      <Card className="h-full glass-hover group cursor-default flex flex-col overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <DeviceWindow
            images={project.images}
            accentColor={project.color}
            urlLabel={project.previewUrl ?? 'localhost'}
            offline={project.offline}
            scrollProgress={scrollYProgress}
            onExpand={setActiveIndex}
          />
        ) : (
          <div
            className="h-1.5 w-full"
            style={{
              background: `linear-gradient(90deg, ${project.color}, transparent)`,
              boxShadow: `0 0 10px ${project.color}60`,
            }}
          />
        )}
        <CardContent className="p-6 flex flex-col gap-4 flex-1">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div
                className="p-2 rounded-lg"
                style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
              >
                <Icon size={18} style={{ color: project.color }} />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm leading-tight">{project.title}</h3>
                <p className="text-xs text-slate-500 font-mono">{project.subtitle}</p>
              </div>
            </div>
            <div className="flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <button
                className="p-1.5 rounded text-slate-400 hover:text-cyan-neon hover:bg-cyan-primary/10 transition-colors cursor-pointer"
                aria-label="View on GitHub"
              >
                <GithubIcon size={14} />
              </button>
              <button
                className="p-1.5 rounded text-slate-400 hover:text-cyan-neon hover:bg-cyan-primary/10 transition-colors cursor-pointer"
                aria-label="Live demo"
              >
                <ExternalLink size={14} />
              </button>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

          <ul className="space-y-1.5 flex-1">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 text-xs text-slate-500">
                <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: project.color }} />
                {h}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
            {project.tech.map((t) => (
              <Badge key={t} variant={project.color === '#06b6d4' ? 'cyan' : 'green'} className="text-xs px-2 py-0.5">
                {t}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {project.images && activeIndex !== null && (
        <ProjectGallery
          images={project.images}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
          accentColor={project.color}
        />
      )}
    </motion.div>
  )
}
