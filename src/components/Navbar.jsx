import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = () => {
    return (
        <>
        <header className='flex flex-row justify-center items-center'>
            <img className='h-10 w-36' src={Logo} alt="Newsday" />
        </header>
        </>
    )
}

export default Navbar