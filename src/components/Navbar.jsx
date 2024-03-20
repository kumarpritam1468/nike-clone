import React, { useState } from 'react';
import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { MdClose } from "react-icons/md"

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} alt="" width={130} height={29} />
                </a>

                <ul className=' flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className=' font-montserrat leading-normal text-lg text-slate-gray'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className=' hidden max-lg:block' onClick={() => setMenuActive(!menuActive)}>
                    <img src={hamburger} width={25} height={25} alt="" className={`${menuActive ? 'hidden' : 'block'}`} />
                    <MdClose className={` h-8 w-8 ${menuActive ? 'block' : 'hidden'}`} />
                </div>

                <ul className={`flex h-64 w-48 p-6 rounded-3xl bg-white flex-col gap-2 absolute top-24 transition-all ease-in-out shadow-xl shadow-slate-gray z-50 ${menuActive ? ' right-10' : ' -right-52'} `}>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className=' font-montserrat leading-normal text-lg text-black'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar