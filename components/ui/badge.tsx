import * as React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'cyan' | 'green' | 'gray'
}

export function Badge({ className, variant = 'cyan', children, ...props }: BadgeProps) {
  const variants = {
    cyan: 'bg-cyan-primary/10 text-cyan-primary border border-cyan-primary/30 hover:bg-cyan-primary/20 hover:border-cyan-primary/60',
    green:
      'bg-green-primary/10 text-green-primary border border-green-primary/30 hover:bg-green-primary/20 hover:border-green-primary/60',
    gray: 'bg-white/5 text-slate-400 border border-white/10 hover:border-white/20',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-medium transition-all duration-200 cursor-default',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
