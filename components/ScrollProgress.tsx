'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/gsap'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion() || !barRef.current) return

    gsap.set(barRef.current, { scaleX: 0 })
    const st = ScrollTrigger.create({
      start: 0,
      end: () => document.documentElement.scrollHeight - window.innerHeight,
      onUpdate: (self) => {
        gsap.to(barRef.current, { scaleX: self.progress, duration: 0.15, ease: 'none', overwrite: true })
      },
    })

    return () => st.kill()
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[150] h-[2px] pointer-events-none">
      <div
        ref={barRef}
        className="h-full w-full origin-left"
        style={{
          background: 'linear-gradient(90deg, #06b6d4, #00ffff, #22c55e)',
          boxShadow: '0 0 8px rgba(0,255,255,0.6)',
        }}
      />
    </div>
  )
}
