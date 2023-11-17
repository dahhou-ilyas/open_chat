import Link from 'next/link'
import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <nav className='flex flex-row list-none justify-between bg-violet-600/70 text-white px-4 py-4 text-xl '>
        <li className='text-'>
            <Link href={"/"}>Opne CHAT</Link>
        </li>
        <li>
            <Link href={"/register"}>Register</Link>
        </li>
    </nav>
  )
}

export default NavBar