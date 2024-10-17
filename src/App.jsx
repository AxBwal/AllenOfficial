import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import OnlinePrograms from './Components/Programs/OnlinePrograms'
import Home from './pages/Home'
import ADSAT from './Components/Programs/ADSAT'

function App() {
  return (
    <div className='bg-[#0f1825] text-white'>
      <div className='flex flex-col gap-6'>
      <div className='sticky top-0 z-5 bg-[#0f1825] shadow-sm '>
      <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ultimate-program-live-courses' element={<OnlinePrograms/>}/>
        <Route path='/adsat-register' element={<ADSAT/>}/>
      </Routes>
      <Footer />
      </div>

    </div>
  )
}

export default App