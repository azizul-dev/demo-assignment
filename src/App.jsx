
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
import { BiCake } from 'react-icons/bi'


const getPremiumToolsSection = async () => {
  const res = await fetch("/public/digiData.json")
  return res.json()
}




function App() {
  const [toolsPromise] = useState(() => getPremiumToolsSection())

  const [activeTab, setActiveTab] = useState("Products")

  const [carts, setCarts] = useState([])

  

  return (
    <>
      <NavBar />

      <Banner />

      <Rating />

      <div role="tablist" className="tabs tabs-lift justify-center gap-4">
        <a onClick={() => setActiveTab("Products")} role="tab" className={`tab w-40 font-bold rounded-full ${activeTab === "Products"
            ? "tab-active text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            : ""
          }`}>Products</a>
        <a onClick={() => setActiveTab("Cart")} role="tab" className={`tab w-40 font-bold rounded-full ${activeTab === "Cart"
            ? "tab-active text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
            : ""
          }`}>Cart (2)</a>
      </div>

      <Suspense fallback={<div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-ring loading-xl"></span>
      </div>}>
        {activeTab === "Products" && <PremiumToolsSection toolsPromise={toolsPromise} carts={carts} setCarts={setCarts}/>}
      </Suspense>


      {activeTab === "Cart" && <Cart carts={carts}/>}

      <Steps />

      <Simple />

      <Ready />
      <Footer />
    </>
  )
}

export default App
