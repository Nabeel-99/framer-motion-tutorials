import React from 'react'
import { motion } from 'framer-motion'

interface Props{
    children: React.ReactNode
    className?: string
    delay?: number
    translateY: any
}
const ParallaxAnimation = ({children, className, delay, translateY}: Props) => {
  return (
    <motion.div
     className={className}
     style={{translateY: translateY}}
     transition={{delay: delay}}
    >
        {children}
    </motion.div>
  )
}

export default ParallaxAnimation
