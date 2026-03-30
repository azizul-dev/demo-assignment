import React from 'react';

const Cart = ({ carts }) => {

    const totalPrice = carts.reduce ((sum, item) => sum + item.price, 0)
    return (
        <div className=' container mx-auto space-y-5'>
            <h1 className=' text-2xl font-bold'>Your Carts</h1>
            {
                carts.map((item, index) => <div key={index} className=' flex gap-5 shadow shadow-gray-600 rounded-md border-gray-500 bg-gray-200 py-5 p-4 mb-10'>
                    <div>
                        <span className="text-4xl">{item.icon}</span>
                    </div>

                    <div>
                        <div>
                            <h2>{item.name}</h2>
                        </div>
                        <div className=' flex'>
                            <h2 className=' font-semibold text-xl'>${item.price}</h2>
                        <p>/{item.period}</p>
                        </div>
                    </div>
                </div>)
            }

            <div className=' flex justify-between items-center bg-zinc-50 mb-10 p-5 mt-5 rounded-lg'>
                <h2 className=' font-bold text-gray-600'>Total</h2>
                <h1 className=' font-bold text-2xl'>${totalPrice}</h1>
            </div>
        </div>
    );
};

export default Cart;