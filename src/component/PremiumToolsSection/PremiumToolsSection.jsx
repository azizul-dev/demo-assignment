import React, { use } from 'react';

const PremiumToolsSection = ({ toolsPromise }) => {
    const premiumToolsSection = use(toolsPromise)
    console.log(premiumToolsSection);


    const tagColors = {
        "popular": "bg-blue-100 text-blue-600",
        "best seller": "bg-green-100 text-green-600",
        "new": "bg-orange-100 text-orange-600"
    }
    return (
        
        <div className=' py-20'>
            
            <div className=' text-center space-y-4'>
                <h2 className=' font-bold text-4xl'>Premium Digital Tools</h2>
                <p className=' text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
            </div>
            <div className='grid grid-cols-1s md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-10'>
                {
                    premiumToolsSection.map((premiumTools, index) => <div key={index} className=' p-4 space-y-7 relative shadow shadow-gray-600 rounded-md border-gray-500 '>
                        <div>
                            <span className="text-4xl">{premiumTools.icon}</span>
                        </div>
                        <div>
                            <h2 className=' font-bold text-2xl'>{premiumTools.name}</h2>
                            <p className='text-[#627382]'>{premiumTools.description}</p>
                        </div>
                        <div className=' flex items-center'>
                            <h2 className=' font-bold text-2xl'>${premiumTools.price}</h2>
                            <p>{premiumTools.period}</p>
                        </div>
                        <div>
                            <div>                            
                                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-sm ${tagColors[premiumTools.tagType]}`}>{premiumTools.tag}</span>
                                <ul>
                                    {premiumTools.features.map((feature, index) => (
                                        <li key={index}>✅ {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <button className=' btn w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Buy Now</button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default PremiumToolsSection;