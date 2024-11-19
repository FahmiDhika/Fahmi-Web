"use client";

import Link from "next/link";
import { useState } from "react";
import { useRef } from 'react';

// import icon
import { IoMenu } from "react-icons/io5";
import { FiX } from "react-icons/fi";
// import { Squash as Hamburger } from 'hamburger-react'

const Header = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const myRef = useRef<HTMLElement | null>(null);

    return(
        <>
            <nav x-data="{ open: false }" className="bg-[#608BC1]/50 rounded-b-3xl px-12 py-6 xl:rounded-none xl:px-64 xl:flex xl:items-center  flex-wrap justify-between fixed w-full">
                <div className="flex justify-between items-center">
                    {/* Nama */}
                    <Link href="#home">
                    <h1 className="font-bold  text-2xl xl:text-3xl italic text-[#133E87] hover:scale-125 
                    transition ease-out duration-1000">Fahmi <span className="text-white not-italic text-xl xl:text-2xl">Dhika</span></h1>
                    </Link>

                    {/* Hamburger Menu */}
                    <div className="flex items-center xl:hidden cursor-pointer" onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                        <IoMenu size={32} className="text-white" />
                    </div>
                </div>

                
                
                {/* Navigation Button When Dekstop Resolution */}
                <div className="hidden xl:block">
                    <ul className="font-semibold text-xl flex text-center gap-[20] text-white">
                        <li><Link href="#profile" className="hover:border-b border-[#133E87] hover:text-[#133E87] transition ease-out duration-300">Profile</Link></li>
                        <li><Link href="blog" className="hover:border-b border-[#133E87] hover:text-[#133E87] transition ease-out duration-300">Blog</Link></li>
                        <li><Link href="#certificate" className="hover:border-b border-[#133E87] hover:text-[#133E87] transition ease-out duration-300">Certificates</Link></li>
                        
                    </ul>
                </div>

                {/* Navigation Button When Mobile Resolution */}
                <div className={toggleNavbar ? "block" : "hidden"}>
                    <ul className="font-semibold text-white text-md xl:text-xl mt-6 flex flex-col text-center gap-[20]">
                        <li><Link href="#profile" className="border-b">Profile</Link></li>
                        <li><Link href="blog" className="border-b">blog</Link></li>
                        <li><Link href="#certificate" className="border-b">Certificates</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header
