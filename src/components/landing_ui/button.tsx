import Link from 'next/link'
import React from 'react'
 
const Button = ({link, title }:{
    title:string
    link: string
  } ) => {
  return (
    <Link href={link} className='flex justify-center w-max items-center text-sm md:text-lg font-semibold py-3 px-6 rounded-full text-[#0F172A] bg-[#c0a99d] shadow-lg '>
      {title}
    </Link>
  )
}

export default Button;