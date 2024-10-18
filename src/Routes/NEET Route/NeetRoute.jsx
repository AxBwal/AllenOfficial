import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OnlineCochNEETclass11 from '../../pages/OnlineCochNEETclass11'

function NeetRoute() {
  return (
    <div>
        <Routes>
            <Route path='neet/online-coaching-class-11' element={<OnlineCochNEETclass11/>}/>
        </Routes>
    </div>
  )
}

export default NeetRoute