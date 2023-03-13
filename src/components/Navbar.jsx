import React, {useState} from "react";
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    
    return (
        <div className="fixed w-full h-[7.5rem] flex justify-between items-center px-4 bg-[#edf3f3] z-50">
            <div className="flex flex-wrap">
                <div>
                    <img src={Logo} alt="Icon Image" style={{width: '5rem'}}/>
                </div>

                <div className="self-center px-6 text-[#527271] font-extrabold text-4xl">
                    RSky Group
                </div>
            </div>
            
            <div className="inline-flex flex-row ml-auto">
                <ul className="hidden md:hidden text-[#527271] font-bold text-xl lg:inline-flex lg:flex-row ">
                    <li className="rounded hover:bg-slate-300">
                        <a href="/">Home</a>
                    </li>
                    <li className="rounded hover:bg-slate-300">
                        <a href="/team">Team</a>
                    </li>
                    <li className="rounded hover:bg-slate-300">
                        <a href="/products">Consultancy</a>
                    </li>
                    
                    <li className="rounded hover:bg-slate-300">
                        <a href="/career" >Investment</a>
                    </li>
                    <li className="rounded hover:bg-slate-300">
                        <a href="/contacts">Contacts</a>
                    </li>
                </ul>
            </div>

            <div onClick={handleClick} className="lg:hidden z-10">
                {!nav ? <FaBars color='DarkSlateGray' className="w-5"/> : <FaTimes color='DarkSlateGray' className="w-5"/>}
            </div>

            <div>
                <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#edf3f3] flex flex-col justify-center items-center text-[#527271] font-bold"}>
                    <li className="py-6 text-4xl">
                        <a href="/">Home</a>
                    </li>
                    <li className="py-6 text-4xl">
                        <a href="/team">Team</a>
                    </li>
                    <li className="py-6 text-4xl">
                        <a href="/products">Consultancy</a>
                    </li>
                    <li className="py-6 text-4xl">
                        <a href="/career">Investment</a>
                    </li>
                    <li className="py-6 text-4xl">
                        <a href="/contacts">Contacts</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default Navbar