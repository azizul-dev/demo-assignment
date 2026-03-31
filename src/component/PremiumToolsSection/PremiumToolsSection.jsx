
import { use } from 'react';
import DigiToolsCart from '../DigiToolsCart/DigiToolsCart';

const PremiumToolsSection = ({ toolsPromise, carts, setCarts }) => {
    const premiumToolsSection = use(toolsPromise)

    return (
        
        <div className=' py-20 container mx-auto'>
            
            <div className=' text-center space-y-4'>
                <h2 className=' font-bold text-4xl'>Premium Digital Tools</h2>
                <p className=' text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-10'>
                {
                    premiumToolsSection.map((premiumTools, index) => 
                    <DigiToolsCart key={index} premiumTools={premiumTools} carts={carts} setCarts={setCarts}/>
                    )
                }
            </div>
        </div>
    );
};

export default PremiumToolsSection;