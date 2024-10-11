import React from 'react'
import Navbar from './Components/Navbar'
import scholoshipbanner from "./assets/allenbanner.webp"
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Advertisements from './Components/Advertisements'
import scanner from "./assets/scan.webp"

function App() {
  return (
    <div className='bg-[#0f1825] text-white'>
      <div className='flex flex-col gap-6'>
      <Navbar />
      <div className='py-6'>
        <img className='mx-auto' src={scholoshipbanner} width={"900px"} alt="ScholorShip Banner" />
      </div>
      <Hero />
      <Advertisements />
      <div  className='py-6'>
        <img className='mx-auto' src={scanner} width={"900px"} alt="ScholorShip Banner" />
      </div>
      <Footer />
      </div>

    </div>
  )
}

export default App