"use client";

import Link from "next/link";
import { useState } from "react";

// import icon
import { IoMenu } from "react-icons/io5";
import { FiX } from "react-icons/fi";

const Header = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    return(
        <>
            <nav className="bg-[#608BC1]/50 rounded-b-3xl px-12 py-6 md:bg-inherit md:rounded-none md:px-64 md:flex flex-wrap justify-between">
                <div className="flex justify-between">
                    {/* Nama */}
                    <Link href="#home">
                    <h1 className="font-bold text-3xl italic text-[#133E87] hover:scale-125 
                    transition ease-out duration-1000">Fahmi <span className="text-white not-italic text-2xl">Dhika</span></h1>
                    </Link>

                    {/* Hamburger Menu */}
                    <div className="flex items-center md:hidden cursor-pointer" onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                        <IoMenu size={32} />
                    </div>
                </div>
                
                {/* Navigation Button When Dekstop Resolution */}
                <div className="hidden md:block">
                    <ul className="font-semibold text-xl flex text-center gap-[20]">
                        <li><Link href="#profile" className="hover:border-b border-[#133E87] hover:text-[#133E87] transition ease-out duration-300">Profile</Link></li>
                        <li><Link href="#project" className="hover:border-b border-[#133E87] hover:text-[#133E87] transition ease-out duration-300">Project</Link></li>
                        <li><Link href="#certificate" className="hover:border-b border-[#133E87] hover:text-[#133E87] transition ease-out duration-300">Certificates</Link></li>
                    </ul>
                </div>

                {/* Navigation Button When Mobile Resolution */}
                <div className={toggleNavbar ? "block" : "hidden"}>
                    <ul className="font-semibold text-xl mt-6 flex flex-col text-center gap-[20]">
                        <li><Link href="#profile" className="border-b">Profile</Link></li>
                        <li><Link href="#project" className="border-b">Project</Link></li>
                        <li><Link href="#certificate" className="border-b">Certificates</Link></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}

export default Header
