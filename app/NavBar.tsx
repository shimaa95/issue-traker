'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {AiFillBug} from 'react-icons/ai'
import classNames from 'classnames'



const links = [
 { name: 'Dashboard', href: '/' },
 { name: 'Issues', href: '/issues' },
]


const NavBar = () => {
const currentPath=usePathname();
    return (
   <nav className='flex  space-x-6  px-5 h-14 items-center border-b mb-6'>
  <Link href="/"><AiFillBug /></Link>

 
    <ul className='flex space-x-6 '>
    {links.map((link)=>(
    <Link className={classNames({
        'text-zinc-500' :currentPath!== link.href,
        'text-zinc-900':currentPath=== link.href,
        'hover:text-zinc-800 transition-colors': true 
    
    })}  key={link.name} href={link.href}>{link.name}</Link>
  ))}

    </ul>
   </nav>
  )
}

export default NavBar