
import './App.css'
import Banner from './component/Banner/Banner'
import Rating from './component/Banner/Rating/Rating'
import Steps from './component/Banner/Rating/Steps/Steps'
import NavBar from './component/NavBar/NavBar'
import Simple from './component/Simple/Simple'
import Ready from './component/Ready/Ready'
import Footer from './component/Footer/Footer'
import PremiumToolsSection from './component/PremiumToolsSection/PremiumToolsSection'
import { Suspense, useState } from 'react'
import Cart from './component/Cart/Cart'




const getPremiumToolsSection = async () => {
  const res = await fetch("/digiData.json")
  return res.json()
}




function App() {
  const [toolsPromise] = useState(() => getPremiumToolsSection())

  const [activeTab, setActiveTab] = useState("Products")

  const [carts, setCarts] = useState([])



  return (
    <>
      <NavBar carts={carts} setActiveTab={setActiveTab}/>

      {activeTab === "Cart" ? (

        <Cart carts={carts} setCarts={setCarts} setActiveTab={setActiveTab} />

      ) : (

        <>
          <Banner />
          <Rating />

          <div role="tablist" className="tabs tabs-lift justify-center gap-4 mb-10">
            <a onClick={() => setActiveTab("Products")} role="tab" className={`tab w-40 font-bold rounded-full transition-transform duration-300 hover:scale-105 ${activeTab === "Products" ? "tab-active text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`}>Products</a>
            <a onClick={() => setActiveTab("Cart")} role="tab" className={`tab w-40 font-bold rounded-full transition-transform duration-300 hover:scale-105 ${activeTab === "Cart" ? "tab-active text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]" : ""}`}>{`Cart (${carts.length})`}</a>
          </div>

          <Suspense fallback={<div className="flex justify-center items-center min-h-[200px]"><span className="loading loading-ring loading-xl"></span></div>}>
            <PremiumToolsSection toolsPromise={toolsPromise} carts={carts} setCarts={setCarts} />
          </Suspense>

          <Steps />
          <Simple />
          <Ready />
          
        </>

      )}
      <Footer />
    </>
  )
}

export default App
