import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';
import { IoIosCloseCircle } from "react-icons/io";



const NavBar = ({ carts, setActiveTab }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto sticky top-0 z-50">
            <div className="navbar-start">
                <span></span>
                {open ? <IoIosCloseCircle className=' md:hidden mr-5' onClick={() => setOpen(!open)} />
                    : <TiThMenu className=' md:hidden mr-5' onClick={() => setOpen(!open)} />}
                <div className="">
                    <ul className={`md:hidden w-full bg-white shadow-md transition-all duration-500 cursor-pointer p-4 space-y-2 transform ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                    <h2 className="hidden md:block font-bold text-4xl bg-linear-to-r from-[#2e13f6] to-[#8c03f5] bg-clip-text text-transparent py-4">DigiTools</h2>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-3 md:gap-5">
                <div className="relative z-50"
                    onClick={() => {
                        setActiveTab("Cart");
                        window.scrollTo({ top: 1000, behavior: "smooth" });
                    }}>
                    <FaShoppingCart className='text-xl cursor-pointer' />

                    {carts.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                            {carts.length}
                        </span>
                    )}
                </div>
                <button className='hover:cursor-pointer'>Login</button>
                <a className="btn text-sm px-3 md:px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;