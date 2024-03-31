import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <>
        <header className=' bg-slate-700 h-20 flex flex-row justify-center items-center'>
            <img className='h-16 w-36 rounded-xl' src={Logo} alt="Newsday" />
        </header>
        </>
    )
}

export default Navbar