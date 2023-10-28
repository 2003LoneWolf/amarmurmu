'use client'
import { motion } from 'framer-motion';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


interface ProjectCard{
  title:string;
  disc:string;
  github:string;
  livelink:string;
  image:string;
}

export default function ProjectCard(props:ProjectCard) {
  return (
    <motion.div className='w-[80vw] h-[70vh] bg-white  shadow-lg flex mt-32 justify-between '
    initial={{ y: 100, x:"0%",opacity:0}}
    animate={{y:0,x:"0%",opacity:1}}>
        <div className='p-10 w-[60%] flex flex-col justify-between'>
            <div className='text-[64px] leading-none  '>{props.title}</div>
            <div className='text-lg'>{props.disc}</div>
            <div className='flex gap-10'>
                <div className=' bg-black text-white px-4 py-2 text-base font-light shadow-md uppercase'><Link href={`${props.github}`}>github</Link></div>
                <div className=' bg-[#8338EC] text-white px-4 py-2 text-base font-light shadow-md uppercase'><Link href={`${props.livelink}`}>View Live</Link></div>
                
            </div>
        </div>
        <div className='flex' >
            <Image width={500} height={500} className=' object-cover'  src={`${props.image}`} alt='disc of image'/>
        </div>
        
      
    </motion.div>
  )
}
