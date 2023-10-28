"use client"
import React, { use } from 'react'
import { motion } from 'framer-motion'
function HeroSection() {
  return (
    <div className='relative w-screen h-screen flex justify-center items-center'
   >
        <motion.div className='absolute text-center font-sans text-[96px] 'initial={{ y: 100, x:"0",opacity:0}}
      animate={{y:0,x:"0",opacity:1}}>
        Imagination, Design, and develop – <span className='text-[#8338EC]'> That&apos;s My Superpower! </span>
         </motion.div>
        <div>

        </div>

    </div>
  )
}

export default HeroSection