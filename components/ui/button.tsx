import * as React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'green' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'cyan', size = 'md', children, ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      cyan: 'bg-cyan-primary/10 text-cyan-neon border border-cyan-primary/50 hover:bg-cyan-primary/20 hover:border-cyan-neon glow-cyan',
      green:
        'bg-green-primary/10 text-green-neon border border-green-primary/50 hover:bg-green-primary/20 hover:border-green-neon glow-green',
      ghost: 'text-slate-300 hover:text-cyan-neon hover:bg-cyan-primary/10',
      outline: 'border border-white/10 text-slate-300 hover:border-cyan-primary/50 hover:text-cyan-neon',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3 text-base',
    }

    return (
      <button ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props}>
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
