import React from 'react'
interface CardBoxProps {
    name: string;
    color:string;
  }
  
  function CardBox(props: CardBoxProps) {
  return (
    <div className='w-[300px] mt-20 h-[300px] shadow-lg bg-[#8338EC]  rounded-xl  flex justify-center items-center' >
        <p className='text-[40px] text-white p-10 text-center  uppercase'>{props.name}</p>
    </div>
  )
}

export default CardBox