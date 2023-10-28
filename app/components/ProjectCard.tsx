import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProjectCard() {
  return (
    <div className='w-[80%] h-[70vh] bg-white  shadow-lg flex mt-32 justify-between '>
        <div className='p-10'>
            <div className='text-[64px] leading-none mb-[5%] '>Zash - E-commerce website </div>
            <div className='text-lg mb-[10%]'>This is discription</div>
            <div className='flex gap-10'>
                <div className=' bg-black text-white px-4 py-2 text-base font-light shadow-md uppercase'><Link href="#">github</Link></div>
                <div className=' bg-[#8338EC] text-white px-4 py-2 text-base font-light shadow-md uppercase'><Link href="#">View Live</Link></div>
                
            </div>
        </div>
        <div className='w-[50%] flex' >
            <Image width={500} height={500} className=' object-cover'  src="https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2a25fb182440289.Y3JvcCwxMzMzLDEwNDMsMCww.png" alt='disc of image'/>
        </div>
        
      
    </div>
  )
}
