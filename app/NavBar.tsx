import Link from 'next/link'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'


const links = [
 { name: 'Dashboard', href: '/dashboard' },
 { name: 'Issues', href: '/issues' },
]

const NavBar = () => {
  return (
   <nav className='flex  space-x-6  px-5 h-14 items-center border-b mb-6'>
  <Link href="/"><AiFillBug /></Link>

 
    <ul className='flex space-x-6 '>
    {links.map((link)=>(
    <Link className='text-zinc-500 hover:text-gray-900 transition-colors' key={link.name} href={link.href}>{link.name}</Link>
  ))}

    </ul>
   </nav>
  )
}

export default NavBar