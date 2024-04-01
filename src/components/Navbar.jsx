import React from 'react'
import Logo from '../assets/Logo.png'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { Context } from '../MyContext';

const Navbar = ({ setQuery}) => {
    const { signIn } = useContext(Context);
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
                {signIn ? <NavLink className={'p-4 text-white'} to={"/addnews"}>Addnews</NavLink>
                :
                <NavLink className={'p-4 text-white'} to={"/login"}>Login</NavLink>
            }
            </header>
        </>
    )
}

export default Navbar