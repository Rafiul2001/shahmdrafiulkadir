import React, { useState } from 'react'
import { Logo } from "../assets/index"
import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className='fixed z-10 left-0 top-0 py-3 px-3 w-full bg-white'>
            <div className='relative max-w-7xl mx-auto flex items-center justify-between'>
                <div className='h-10'>
                    <img className='h-full' src={Logo} alt="logo" />
                </div>
                <ul className='gap-9 text-lg hidden lg:flex'>
                    <li className='cursor-pointer hover:text-blue hover:underline'><a href="#home">Home</a></li>
                    <li className='cursor-pointer hover:text-blue hover:underline'><a href="#about">About Me</a></li>
                    <li className='cursor-pointer hover:text-blue hover:underline'><a href="#portfolio">Portfolio</a></li>
                    <li className='cursor-pointer hover:text-blue hover:underline'><a href="#service">Services</a></li>
                    <li className='cursor-pointer hover:text-blue hover:underline'><a href="#contact">Contact</a></li>
                </ul>
                <div className='lg:hidden'>
                    {
                        toggleMenu ?
                            <RiCloseLine onClick={() => setToggleMenu(false)} size={28} /> :
                            <RiMenuLine onClick={() => setToggleMenu(true)} size={28} />
                    }
                </div>

                {
                    toggleMenu ? <ul className='px-5 pt-20 gap-5 text-lg flex flex-col fixed z-10 top-0 left-0 h-screen w-60 bg-white lg:hidden shadow-blue shadow-md scale-up-hor-left'>
                        <li className='self-end'>
                            <RiCloseLine onClick={() => setToggleMenu(false)} size={28} />
                        </li>
                        <li className='cursor-pointer hover:text-blue hover:underline'><a href="#home">Home</a></li>
                        <li className='cursor-pointer hover:text-blue hover:underline'><a href="#about">About Me</a></li>
                        <li className='cursor-pointer hover:text-blue hover:underline'><a href="#portfolio">Portfolio</a></li>
                        <li className='cursor-pointer hover:text-blue hover:underline'><a href="#service">Services</a></li>
                        <li className='cursor-pointer hover:text-blue hover:underline'><a href="#contact">Contact</a></li>
                    </ul> : null
                }
            </div>
        </div>
    )
}

export default Navbar