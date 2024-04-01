import React from 'react'
import Logo from '../assets/Logo.png'

const Navbar = ({ setQuery }) => {
    return (
        <>
            <header className='bg-slate-700 h-20 px-10 flex flex-row justify-between items-center'>
               
                <img className='h-16 w-36 ml-10  rounded-xl' src={Logo} alt="Newsday" />
                <div className="shadow-xl w-full max-w-[350px] rounded-md pl-6 p-4 bg-slate-700">

                    <input
                        className='bg-slate-700 text-slate-100 outline-none'
                        onChange={(e) => setQuery("everything?q=" + e.target.value.toLowerCase())}
                        type="text"
                        placeholder="Search for news..."
                    />
                </div>

            </header>
        </>
    )
}

export default Navbar