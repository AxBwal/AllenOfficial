import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import OnlinePrograms from './Components/Programs/OnlinePrograms'
import Home from './pages/Home'

function App() {
  return (
    <div className='bg-[#0f1825] text-white'>
      <div className='flex flex-col gap-6'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ultimate-program-live-courses' element={<OnlinePrograms/>}/>
      </Routes>
      <Footer />
      </div>

    </div>
  )
}

export default App