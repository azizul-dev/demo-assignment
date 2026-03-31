
import { toast } from 'react-toastify';


const DigiToolsCart = ({ premiumTools, carts, setCarts }) => {

    
    const isAddToCart = carts.some(item => item.id === premiumTools.id)

    const handlePurchasing = () => {
   

        const isFound = carts.find(item => item.id === premiumTools.id)
        if(isFound){
            toast.error("Item already in Cart")
            return;
        }

        setCarts([...carts,premiumTools])
        toast.success("Added to cart successfully!")
    }


    const tagColors = {
        "popular": "bg-blue-100 text-blue-600",
        "best seller": "bg-green-100 text-green-600",
        "new": "bg-orange-100 text-orange-600"
    }
    return (
        <div className=' p-4 space-y-7 relative shadow shadow-gray-600 rounded-md border-gray-500 overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-purple-300 hover:shadow-lg'>
            <div>
                <span className="text-4xl">{premiumTools.icon}</span>
            </div>
            <div>
                <h2 className=' font-bold text-2xl'>{premiumTools.name}</h2>
                <p className='text-[#627382]'>{premiumTools.description}</p>
            </div>
            <div className=' flex items-center'>
                <h2 className=' font-bold text-2xl'>${premiumTools.price}</h2>
                <p>/{premiumTools.period}</p>
            </div>
            <div>
                <div>
                    <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm animate-pulse ${tagColors[premiumTools.tagType]}`}>{premiumTools.tag}</span>
                    <ul>
                        {premiumTools.features.map((feature, index) => (
                            <li key={index}>✅ {feature}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <button onClick={handlePurchasing} className={`btn w-full text-white rounded-full ${isAddToCart
                    ? "bg-green-500"
                    : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
                }`}>
                {isAddToCart ? "✔ Added to Cart!" : "Buy Now"}
            </button>

        </div>
    );
};

export default DigiToolsCart;