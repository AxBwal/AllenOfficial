import React from 'react'
import NEET1 from "../assets/subjectgrid/NEET1.webp"
import NEET2 from "../assets/subjectgrid/NEET2.webp"
import { RiLiveLine } from "react-icons/ri";
import { SlNote } from "react-icons/sl";
import { PiVideoDuotone } from "react-icons/pi";
function OnlineCochNEETclass12() {
    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <img src={NEET1} alt="NEET1" width={"900px"}  />
                </div>
                <h1 className='text-2xl font-semibold'>NEET programs for Class 12th</h1>
                <div className='text-[#bbc2d1] flex'>
                    <button className='flex border rounded-lg items-center gap-2 px-5 py-1'> <RiLiveLine />Live</button>
                    <button className='flex border rounded-lg items-center gap-2 px-5 py-1'> <SlNote />Online Test Series</button>
                    <button className='flex border rounded-lg items-center gap-2 px-5 py-1'> <PiVideoDuotone />Recorded</button>
                    <button className='flex border rounded-lg items-center gap-2 px-5 py-1'>Practice</button>
                </div>
                <div className='flex justify-center'>
                    <img src={NEET2} alt="NEET2" width={"900px"} />
                </div>
            </div>
        </div>
      )
}

export default OnlineCochNEETclass12