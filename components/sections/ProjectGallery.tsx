'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface GalleryImage {
  src: string
  label: string
  group: string
}

export function ProjectGallery({
  images,
  index,
  onClose,
  onIndexChange,
  accentColor,
}: {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onIndexChange: (i: number) => void
  accentColor: string
}) {
  const current = images[index]
  const groups = Array.from(new Set(images.map((i) => i.group)))

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [index, images.length, onClose, onIndexChange])

  return createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[400] flex items-center justify-center bg-black/85 backdrop-blur-md px-4 py-8"
        onClick={onClose}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-300 hover:text-cyan-neon hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close gallery"
        >
          <X size={22} />
        </button>

        <div
          className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-2 font-mono text-xs"
          onClick={(e) => e.stopPropagation()}
        >
          {groups.map((g) => {
            const firstIdx = images.findIndex((i) => i.group === g)
            const active = current.group === g
            return (
              <button
                key={g}
                onClick={() => onIndexChange(firstIdx)}
                className={`px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                  active
                    ? 'text-white border-white/40 bg-white/10'
                    : 'text-slate-500 border-white/10 hover:text-slate-300'
                }`}
              >
                {g}
              </button>
            )
          })}
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onIndexChange((index - 1 + images.length) % images.length)
          }}
          className="absolute left-3 md:left-6 p-2 rounded-full bg-white/5 text-slate-300 hover:text-cyan-neon hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onIndexChange((index + 1) % images.length)
          }}
          className="absolute right-3 md:right-6 p-2 rounded-full bg-white/5 text-slate-300 hover:text-cyan-neon hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight size={22} />
        </button>

        <div className="w-full max-w-5xl flex flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.label}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full rounded-xl border object-contain max-h-[75vh]"
              style={{ borderColor: `${accentColor}40`, boxShadow: `0 0 40px ${accentColor}20` }}
            />
          </AnimatePresence>
          <p className="font-mono text-sm text-slate-400">
            <span style={{ color: accentColor }}>{current.group}</span> — {current.label}{' '}
            <span className="text-slate-600">
              ({index + 1}/{images.length})
            </span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}
