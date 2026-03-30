
import './App.css'
import Banner from './component/Banner/Banner'
import Rating from './component/Banner/Rating/Rating'
import Steps from './component/Banner/Rating/Steps/Steps'
import NavBar from './component/NavBar/NavBar'
import Simple from './component/Simple/Simple'
import Ready from './component/Ready/Ready'
import Footer from './component/Footer/Footer'
import PremiumToolsSection from './component/PremiumToolsSection/PremiumToolsSection'
import { Suspense } from 'react'


const getPremiumToolsSection = async () => {
  const res = await fetch("/public/digiData.json")
  return res.json()
}




function App() {
  const toolsPromise = getPremiumToolsSection()

  return (
    <>
      <NavBar />

      <Banner />

      <Rating />

      <Suspense fallback={<div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-ring loading-xl"></span>
      </div>}>
        <PremiumToolsSection toolsPromise={toolsPromise} />
      </Suspense>

      <Steps />

      <Simple />

      <Ready />
      <Footer />
    </>
  )
}

export default App
