import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className=' h-100 flex items-center justify-center w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 md:px-0'>
                <div className=' flex flex-col items-center justify-center space-y-5'>
                    <h2 className=' font-bold text-3xl text-white text-center'>Ready to Transform Your Workflow?</h2>
                    <p className=' text-gray-100 text-center'>Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
                    <div className="flex flex-row gap-4 pt-4 justify-center">

                        <button className="px-3 py-3 cursor-pointer rounded-full bg-white text-purple-700 font-semibold hover:bg-gray-100">
                            Explore Products
                        </button>


                        <button className="px-5 py-3 rounded-full cursor-pointer border-2 border-white text-white font-semibold hover:bg-white hover:text-purple-700 transition">
                            View Pricing
                        </button>
                    </div>
                    <p className=' text-gray-100 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;