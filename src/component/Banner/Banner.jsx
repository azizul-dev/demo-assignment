import React from 'react';

import BannerImage from "../../assets/products/undraw_mcp-server_7kvc.png";
import circle from '../../assets/products/Group 5.png'
import leftarrow from '../../assets/products/Play.png'

const Banner = () => {
    return (
        <div className=" min-h-162.5 flex items-center overflow-hidden pt-6 lg:pt-0">
            <div className=" mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 px-4 md:px-0 gap-10 items-center z-10">
                {/* Left Content */}
                <div className=" space-y-4 text-center lg:text-left flex flex-col items-center lg:items-start">
                    <div className="inline-flex items-center gap-2 bg-[#2e13f6]/10 border border-[#8c03f5]/30 text-[#4F39F6] text-sm font-medium px-5 py-2 rounded-full">
                        <span><img className=' animate-pulse' src={circle} alt="" /></span> New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter text-[#2e13f6]">
                        Supercharge Your
                        <br />
                        <span className="bg-linear-to-r from-[#2e13f6] to-[#8c03f5] bg-clip-text text-transparent">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    <div className="flex flex-row gap-3 pt-4 justify-center lg:justify-start">
                        <button className=" btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] transition-all px-5 py-6 rounded-full font-semibold text-white">
                            Explore Products
                        </button>
                        <button className=" bg-linear-to-r from-[#2e13f6] to-[#8c03f5] bg-clip-text text-transparent flex gap-3 justify-center items-center btn btn-outline btn-primary px-5 py-6 rounded-full">
                            <span className="group-hover:translate-x-1 transition"><img src={leftarrow} alt="" /></span>
                            Watch Demo

                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center lg:justify-end">
                    <div>
                        <img

                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;