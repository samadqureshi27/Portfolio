'use client'

import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/gsap'

const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#01'

export function DecryptText({
  text,
  className,
  delay = 0,
}: {
  text: string
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      el.textContent = text
      return
    }

    const proxy = { progress: 0 }
    const ctx = gsap.context(() => {
      gsap.to(proxy, {
        progress: 1,
        duration: text.length * 0.028 + 0.3,
        delay,
        ease: 'power1.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onUpdate: () => {
          const revealCount = Math.floor(proxy.progress * text.length)
          let out = ''
          for (let i = 0; i < text.length; i++) {
            if (i < revealCount || text[i] === ' ') out += text[i]
            else out += SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0]
          }
          el.textContent = out
        },
        onComplete: () => {
          el.textContent = text
        },
      })
    })

    return () => ctx.revert()
  }, [text, delay])

  return (
    <span ref={ref} className={className}>
      {text}
    </span>
  )
}
