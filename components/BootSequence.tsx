'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/gsap'

const LINES = [
  'booting abdulsamad.dev',
  'npm run dev',
  'loading stack [react, node.js, mongodb, typescript]',
  'establishing secure connection',
  'status: online',
]

export default function BootSequence() {
  // null = not yet determined (SSR / first paint), true = skip, false = play
  const [skip, setSkip] = useState<boolean | null>(null)
  const [activeLine, setActiveLine] = useState(0)
  const overlayRef = useRef<HTMLDivElement>(null)
  const lineRefs = useRef<Array<HTMLSpanElement | null>>([])

  useLayoutEffect(() => {
    const seen = sessionStorage.getItem('boot-seen')
    if (seen || prefersReducedMotion()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSkip(true)
      return
    }
    sessionStorage.setItem('boot-seen', '1')
    setSkip(false)
  }, [])

  useEffect(() => {
    if (skip !== false) return

    document.body.style.overflow = 'hidden'
    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = ''
        setSkip(true)
      },
    })

    LINES.forEach((line, i) => {
      const el = lineRefs.current[i]
      if (!el) return
      const proxy = { n: 0 }
      tl.to(
        proxy,
        {
          n: line.length,
          duration: line.length * 0.026,
          ease: 'none',
          onStart: () => setActiveLine(i),
          onUpdate: () => {
            el.textContent = line.slice(0, Math.floor(proxy.n))
          },
        },
        i === 0 ? 0 : '+=0.22'
      )
    })

    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: 'power3.inOut',
    }, '+=0.4')

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [skip])

  if (skip === true) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] bg-[#050505] flex items-center justify-center font-mono"
    >
      <div className="w-full max-w-md px-6">
        {LINES.map((line, i) => (
          <div key={line} className="flex items-baseline gap-2 text-sm py-1 min-h-[1.4em]">
            <span className={i === LINES.length - 1 ? 'text-green-primary' : 'text-cyan-primary'}>
              {i === LINES.length - 1 ? '✓' : '$'}
            </span>
            <span
              ref={(el) => {
                lineRefs.current[i] = el
              }}
              className={i === LINES.length - 1 ? 'text-green-neon' : 'text-slate-300'}
            />
            {activeLine === i && <span className="cursor-blink text-cyan-neon">_</span>}
          </div>
        ))}
      </div>
    </div>
  )
}
