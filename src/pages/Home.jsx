import React from 'react'
import Hero from '../Components/Hero'
import scholoshipbanner from "../assets/allenbanner.webp"
import scanner from "../assets/scan.webp"
import Advertisements from '../Components/Advertisements'
import SubjectGrid from '../Components/SubjectGrid'

function Home() {
  return (
    <div className='flex flex-col gap-6'>
        <div className='py-6'>
        <img className='mx-auto' src={scholoshipbanner} width={"900px"} alt="ScholorShip Banner" />
      </div>
      <Hero />
      <Advertisements />
     <div className='flex justify-center'>
     <SubjectGrid/>
     </div>
      <div  className='py-6'>
        <img className='mx-auto' src={scanner} width={"900px"} alt="ScholorShip Banner" />
      </div>
    </div>
  )
}

export default Home