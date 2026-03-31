import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'
import { toast } from 'react-toastify';

const Cart = ({ carts, setCarts, setActiveTab }) => {

    const handlePayment = () => {
        setCarts([])
        toast.success("Payment Successfully")
        window.scrollTo({ top: 1000, behavior: "smooth" });
    };

    const handleDelete = (removeItem) => {
        const filteredArray = carts.filter(c => c.id !== removeItem.id)
        setCarts(filteredArray)


        toast.error("Removed from your cart!");
    }

    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0)
    return (
        <div className=' container mx-auto space-y-5 shadow shadow-zinc-100 rounded-md border-zinc-100 bg-zinc-50 py-5 p-4 mb-10'>
            {
                carts.length === 0 ?

                    <div className=' bg-[#ffffff] mt-10 mb-10 p-10'>
                        <div >
                            <h1 className=' text-2xl font-bold'>Your Carts</h1>
                        </div>
                        <div className=' flex justify-center items-center flex-col space-y-5 mb-10'>
                            <FaShoppingCart className='text-8xl text-gray-300 animate-pulse' />
                            <p className='text-zinc-600 text-xl'>Your cart is empty!</p>
                            <p className='text-zinc-400 text-sm'>Add some awesome tools to get started!</p>
                            <button onClick={() => {
                                setActiveTab("Products");
                                window.scrollTo({ top: 1, behavior: "smooth" });
                            }} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white px-6'>
                                Explore Products
                            </button>
                        </div>
                    </div>
                    : <>
                        <h1 className=' text-2xl font-bold'>Your Carts</h1>

                        {

                            carts.map((item, index) => <div key={index} className=' flex justify-between items-center gap-5 shadow shadow-gray-600 rounded-md border-gray-500 bg-gray-200 py-5 p-4 mb-10 transition-transform duration-300 hover:scale-102'>

                                <div className='flex items-center gap-4'>
                                    <span className="text-4xl">{item.icon}</span>
                                    <div>
                                        <h2 className='font-semibold'>{item.name}</h2>
                                        <div className='flex items-center gap-1'>
                                            <h2 className='font-bold text-xl'>${item.price}</h2>
                                            <p>/{item.period}</p>
                                        </div>
                                    </div>
                                </div>


                                <button onClick={() => handleDelete(item)} className='btn btn-error text-white  rounded-lg'>Remove</button>

                            </div>

                            )
                        }

                        <div className=' flex justify-between items-center bg-zinc-50 mb-10 p-5 mt-5 rounded-lg'>
                            {/* <h2 className=' font-bold text-gray-600'>Total</h2> */}
                            <h2 className='font-bold text-gray-600'>Total <span className="text-sm font-normal text-gray-400">(prices may vary by period)</span></h2>
                            <h1 className=' font-bold text-2xl'>${totalPrice}</h1>
                        </div>

                        <button onClick={handlePayment} className='btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white w-full mb-10 font-bold text-2xl transition-transform duration-300 hover:scale-102'>Proceed to Checkout</button>

                    </>
            }

        </div >
    );
};

export default Cart;