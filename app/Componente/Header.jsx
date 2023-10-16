import React from 'react'
import Link from 'next/link';


const Header = () => {
  return (
    <header className='p-5 bg-slate-500'>
        <div>
                <h1 className='text-2xl font-bold text-center'> AUTOMATAS FINITOS</h1>
        </div>


    <nav>
        <ul className='flex justify-evenly uppercase'>
            <li className='p-2 rounded-md cursor-pointer hover:bg-[#ff5252] hover:text-[#fff]'>
            <Link href="/ejercicio01">Ejercicio 1</Link>
            </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-[#ff5252] hover:text-[#fff]' >
            <Link href="/ejercicio02">Ejercicio 2</Link>
            </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-[#ff5252] hover:text-[#fff]'>
            <Link href="/ejercicio03">Ejercicio 3</Link>
            </li>
            <li className='p-2 rounded-md cursor-pointer hover:bg-[#ff5252] hover:text-[#fff]'>
            <Link href="/ejercicio04">Ejercicio 4</Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Header