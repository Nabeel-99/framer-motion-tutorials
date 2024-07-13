import React from 'react'
import {motion} from "framer-motion"

interface TypewriterTextProps{
    text: string
}
const TypewriterText:React.FC<TypewriterTextProps> = ({text}) => {
    const lines = text.split('\n')
  return (
    <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.5}}
        className='text-left labil-grotesk font-bold lg:text-[3rem] xl:text-[4rem] cursor-default leading-[4.5rem] tracking-tight'>
        {lines.map((line, lineIndex) => (
            <p key={lineIndex}>
              {line.split('').map((char, charIndex) => (
                <motion.span
                    key={charIndex}
                    style={{display: 'inline-block', opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1.5, delay: lineIndex * 0.1 + charIndex * 0.1}}
                    >
                    {char}
                </motion.span>
              ))}
            </p>
        ))}
    </motion.div>
  )
}

export default TypewriterText
