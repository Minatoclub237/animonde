import { useEffect, useRef, useState } from 'react'

interface FadingVideoProps {
  src: string | string[]
  className?: string
  style?: React.CSSProperties
}

export default function FadingVideo({ src, className, style }: FadingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const rafRef = useRef<number | null>(null)
  const fadingOutRef = useRef(false)
  const [index, setIndex] = useState(0)

  const sources = Array.isArray(src) ? src : [src]
  const currentSrc = sources[index % sources.length]

  const fadeTo = (target: number, duration: number) => {
    const video = videoRef.current
    if (!video) return
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    const from = parseFloat(video.style.opacity || '0')
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      video.style.opacity = String(from + (target - from) * t)
      if (t < 1) {
        rafRef.current = requestAnimationFrame(step)
      } else {
        rafRef.current = null
      }
    }
    rafRef.current = requestAnimationFrame(step)
  }

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const handleLoadedData = () => {
    fadingOutRef.current = false
    fadeTo(1, 500)
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || fadingOutRef.current || !isFinite(video.duration)) return
    if (video.duration - video.currentTime <= 0.55) {
      fadingOutRef.current = true
      fadeTo(0, 550)
    }
  }

  const handleEnded = () => {
    const video = videoRef.current
    if (!video) return
    if (sources.length === 1) {
      video.currentTime = 0
      video.play()
      fadingOutRef.current = false
      fadeTo(1, 500)
    } else {
      setIndex((i) => (i + 1) % sources.length)
    }
  }

  return (
    <video
      ref={videoRef}
      src={currentSrc}
      className={className}
      style={{ opacity: 0, ...style }}
      autoPlay
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  )
}
