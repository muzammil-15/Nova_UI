import Link from 'next/link'
import React from 'react'
 
const Button = ({link, title }:{
    title:string
    link: string
  } ) => {
  return (
    <Link href={link} className='flex justify-center w-max items-center py-3 px-6 rounded-xl bg_primary text-white hover:text-gray-300 '>
      {title}
    </Link>
  )
}

export default Button;