import React from 'react';
import { FaCheck } from 'react-icons/fa';


const Simple = () => {
    return (
        <div>
            <div className='py-20 px-4 md:px-0'>
                <div className='flex flex-col justify-center items-center space-y-3 py-10'>
                    <h1 className='font-bold text-4xl'>Simple, Transparent Pricing</h1>
                    <p className='text-gray-500'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto items-stretch '>

                    
                    <div className='border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                        <h2 className='font-bold text-2xl'>Starter</h2>
                        <p className='text-gray-500'>Perfect for getting started</p>

                        
                        <div className='flex items-end gap-1'>
                            <h1 className='font-bold text-5xl'>$0</h1>
                            <span className='text-gray-500 mb-1'>/Month</span>
                        </div>

                        
                        <ul className='flex flex-col gap-2 flex-1'>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Access to 10 free tools</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Basic templates</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Community support</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> 1 project per month</li>
                        </ul>

                        
                        <button className=' btn mt-4 w-full py-3 rounded-full bg-linear-to-r from-[#2e13f6] to-[#8c03f5] text-white font-semibold'>
                            Get Started Free
                        </button>
                    </div>

                   
                    <div className='relative bg-linear-to-b from-[#2e13f6] to-[#8c03f5] rounded-2xl p-8 flex flex-col gap-4 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg'>

                        
                        <span className='absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-200 text-yellow-800 text-sm font-semibold px-4 py-1 rounded-full'>
                            Most Popular
                        </span>

                        <h2 className='font-bold text-2xl'>Pro</h2>
                        <p className='text-purple-200'>Best for professionals</p>

                        <div className='flex items-end gap-1'>
                            <h1 className='font-bold text-5xl'>$29</h1>
                            <span className='text-purple-200 mb-1'>/Month</span>
                        </div>

                        <ul className='flex flex-col gap-2 flex-1'>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-300' /> Access to all premium tools</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-300' /> Unlimited templates</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-300' /> Priority support</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-300' /> Unlimited projects</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-300' /> Cloud sync</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-300' /> Advanced analytics</li>
                        </ul>

                        
                        <button className=' btn mt-4 w-full py-3 rounded-full bg-white text-purple-700 font-semibold'>
                            Start Pro Trial
                        </button>
                    </div>

                    
                    <div className='border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
                        <h2 className='font-bold text-2xl'>Enterprise</h2>
                        <p className='text-gray-500'>For teams and businesses</p>

                        <div className='flex items-end gap-1'>
                            <h1 className='font-bold text-5xl'>$99</h1>
                            <span className='text-gray-500 mb-1'>/Month</span>
                        </div>

                        <ul className='flex flex-col gap-2 flex-1'>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Everything in Pro</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Team collaboration</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Custom integrations</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Dedicated support</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> SLA guarantee</li>
                            <li className='flex items-center gap-2'><FaCheck className='text-green-500' /> Custom branding</li>
                        </ul>

                        <button className=' btn mt-4 w-full py-3 rounded-full bg-linear-to-r from-[#2e13f6] to-[#8c03f5] text-white font-semibold'>
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Simple;