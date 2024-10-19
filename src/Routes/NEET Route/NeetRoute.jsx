import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OnlineCochNEETclass11 from '../../pages/OnlineCochNEETclass11'
import OnlineCochNEETclass12 from '../../pages/OnlineCochNEETclass12'
import OnlineCochNEETclass12plus from '../../pages/OnlineCochNEETclass12plus'

function NeetRoute() {
  return (
    <div>
        <Routes>
            <Route path='neet/online-coaching-class-11' element={<OnlineCochNEETclass11/>}/>
            <Route path='neet/online-coaching-class-12' element={<OnlineCochNEETclass12/>}/>
            <Route path='neet/online-coaching-class-12-droppers' element={<OnlineCochNEETclass12plus/>}/>
        </Routes>
    </div>
  )
}

export default NeetRoute