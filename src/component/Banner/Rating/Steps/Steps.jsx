import React from 'react';
import user from '../../../../assets/products/user.png'
import packageImg from '../../../../assets/products/package.png'
import rocket from '../../../../assets/products/rocket.png'

const Steps = () => {
    return (
        <div>
            <div className='bg-[#F1F1F1] py-20 px-4 md:px-0'>
                <div className=' flex flex-col justify-center items-center space-y-3 py-10'>
                    <h1 className=' font-bold text-4xl'>Get Started in 3 Steps</h1>
                <p className=' text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
                    <div className=' relative bg-[#FFFFFF] flex flex-col items-center justify-between p-10 space-y-5 rounded-md'>
                         <span className='absolute top-3 right-4 bg-linear-to-r from-[#2e13f6] to-[#8c03f5] rounded-full text-white h-8 w-8 flex items-center justify-center'>01</span>
                        <img src={user} alt="" />
                        <h2 className=' font-semibold text-xl'>Create Account</h2>
                        <p className=' text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className=' relative bg-[#FFFFFF] flex flex-col items-center justify-between p-10 rounded-md'>
                         <span className='absolute top-3 right-4 bg-linear-to-r from-[#2e13f6] to-[#8c03f5] rounded-full text-white h-8 w-8 flex items-center justify-center'>02</span>
                        <img src={packageImg} alt="" />
                        <h2 className=' font-semibold text-xl'>Choose Products</h2>
                        <p className=' text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>
                    <div className=' relative bg-[#FFFFFF] flex flex-col items-center justify-between p-10 rounded-md'>
                         <span className='absolute top-3 right-4 bg-linear-to-r from-[#2e13f6] to-[#8c03f5] rounded-full text-white h-8 w-8 flex items-center justify-center'>03</span>
                        <img src={rocket} alt="" />
                        <h2 className=' font-semibold text-xl'>Start Creating</h2>
                        <p className=' text-gray-500'>Download and start using your premium tools immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;