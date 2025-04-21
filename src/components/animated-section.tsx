import { cn } from '@/lib/utils'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export const AnimatedSection: React.FC<React.ComponentProps<'section'>> = ({
  children,
  className,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className={cn(className)}
      >
        {children}
      </motion.section>
    </>
  )
}
