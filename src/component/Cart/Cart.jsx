import React from 'react';
import shopping from '../../assets/products/shopping-cart.png'

const Cart = ({ carts, setCarts }) => {

    const handlePayment = () => {
        setCarts([])
    }

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    return (
        <div className=' container mx-auto space-y-5 shadow shadow-zinc-100 rounded-md border-zinc-100 bg-zinc-50 py-5 p-4 mb-10'>
            {
                carts.length === 0 ?

                    <div className=' bg-[#ffffff] mt-10 p-4'>
                        <div >
                            <h1 className=' text-2xl font-bold'>Your Carts</h1>
                        </div>
                        <div className=' flex justify-center items-center flex-col space-y-5 mb-10'>
                            <img className=' h-30 w-30' src={shopping} alt="" />
                            <p>Your Cart is empty</p>
                        </div>
                    </div>
                    : <>
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

                        <button onClick={handlePayment} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-full mb-10 font-bold text-2xl'>Proceed to Checkout</button>

                    </>
            }

        </div>
    );
};

export default Cart;