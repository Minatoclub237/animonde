import { useEffect, useRef } from 'react'
import { cn } from '../lib/utils'

export function spotlightMaskStyle(size = 260, intensity = 0.4): React.CSSProperties {
  return {
    background: `radial-gradient(${size}px circle at var(--spot-x,-200px) var(--spot-y,-200px), rgba(255,255,255,${intensity}), rgba(255,255,255,0) 60%)`,
    padding: '1px',
    WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
  }
}

const radiusClass = {
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
} as const

type Props = {
  as?: 'div' | 'button' | 'section'
  radius?: keyof typeof radiusClass
  size?: number
  intensity?: number
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export default function SpotlightBorder({
  as: Tag = 'div',
  radius = '2xl',
  size = 260,
  intensity = 0.5,
  className,
  children,
  onClick,
}: Props) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <Tag
      ref={ref as React.Ref<never>}
      onClick={onClick}
      className={cn('relative', radiusClass[radius], className)}
    >
      <span
        aria-hidden
        className={cn('pointer-events-none absolute inset-0', radiusClass[radius])}
        style={spotlightMaskStyle(size, intensity)}
      />
      {children}
    </Tag>
  )
}
