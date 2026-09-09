'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useTransform, useMotionValueEvent, type MotionValue } from 'framer-motion'
import { WifiOff } from 'lucide-react'
import type { GalleryImage } from '@/components/sections/ProjectGallery'

export function DeviceWindow({
  images,
  accentColor,
  urlLabel,
  offline = false,
  scrollProgress,
  onExpand,
}: {
  images: GalleryImage[]
  accentColor: string
  urlLabel: string
  offline?: boolean
  scrollProgress: MotionValue<number>
  onExpand: (index: number) => void
}) {
  const [active, setActive] = useState(0)

  const rawIndex = useTransform(scrollProgress, [0.08, 0.92], [0, images.length - 1])
  useMotionValueEvent(rawIndex, 'change', (v) => {
    setActive(Math.min(images.length - 1, Math.max(0, Math.round(v))))
  })

  const current = images[active]

  return (
    <div className="relative">
      {/* terminal-style chrome — persistent frame, matches the site's // comment / mono voice */}
      <div className="flex items-center justify-between px-3 h-8 border-b border-white/10 bg-black/40">
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: accentColor, boxShadow: `0 0 6px ${accentColor}` }}
          />
          {urlLabel}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
          {offline && <WifiOff size={10} />}
          {String(active + 1).padStart(2, '0')}
          <span className="text-slate-700">/</span>
          {String(images.length).padStart(2, '0')}
        </span>
      </div>

      {/* screenshot — restrained hover only, no competing motion signals */}
      <motion.div
        whileHover={{ scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative aspect-video overflow-hidden cursor-pointer"
        onClick={() => onExpand(active)}
      >
        <AnimatePresence mode="sync">
          <motion.img
            key={current.src}
            src={current.src}
            alt={current.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* decorative flourishes reveal only on hover intent, not ambient */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 scanline-bar opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(to bottom, transparent, ${accentColor}30, transparent)` }}
        />
        <div className="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-mono text-[11px] text-white/90">{current.label}</span>
        </div>
      </motion.div>
    </div>
  )
}
