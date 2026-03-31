import React from 'react';

const Rating = () => {
    return (
        <div>
            <div className=' px-4 md:px-0 mb-20 mt-20 h-50 w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] flex items-center'>
               <div className=' flex fle justify-around w-full text-center text-white'>
                 <div className=' space-y-4'>
                    <h1 className=' font-bold text-5xl'>50K+</h1>
                    <p>Active Users</p>
                </div>
                <div className=' space-y-4'>
                    <h1 className=' font-bold text-5xl'>200+</h1>
                    <p >Premium Tools</p>
                </div>
                <div className=' space-y-4'>
                    <h1 className=' font-bold text-5xl'>4.9</h1>
                    <p>Rating</p>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Rating;