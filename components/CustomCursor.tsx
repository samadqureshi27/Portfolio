'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.5 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true)
    document.body.classList.add('cursor-none-custom')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a, button, input, textarea, [role="button"]')
      setHovering(!!target)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.body.classList.remove('cursor-none-custom')
    }
  }, [x, y])

  if (!enabled) return null

  return (
    <motion.div
      className="fixed top-0 left-0 z-[300] pointer-events-none flex items-center justify-center font-mono font-bold text-lg select-none"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.span
        className="text-cyan-neon"
        animate={{ x: hovering ? -11 : -5, opacity: hovering ? 1 : 0.85, scale: hovering ? 1.35 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        style={{ textShadow: '0 0 8px #00ffff' }}
      >
        &lt;
      </motion.span>
      <motion.span
        className="rounded-full bg-cyan-neon"
        animate={{
          width: hovering ? 3 : 5,
          height: hovering ? 3 : 5,
          opacity: hovering ? 0.4 : 0.9,
        }}
        style={{ boxShadow: '0 0 6px #00ffff' }}
      />
      <motion.span
        className="text-cyan-neon"
        animate={{ x: hovering ? 11 : 5, opacity: hovering ? 1 : 0.85, scale: hovering ? 1.35 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        style={{ textShadow: '0 0 8px #00ffff' }}
      >
        &gt;
      </motion.span>
    </motion.div>
  )
}
