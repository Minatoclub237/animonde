import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  delay?: number
  className?: string
  children: React.ReactNode
}

export default function FadeUp({ delay = 0, className, children }: Props) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
