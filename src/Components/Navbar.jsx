import React from 'react'
import { PiPhoneCallBold } from "react-icons/pi";
import logo from "../assets/logo_dark.svg"

function Navbar() {
  return (
    <div>

      <div className='flex justify-around px-6 py-7 mt-2 items-center'>
        <div>
          <div>
            <img src={logo} width={"100px"} alt="logo" />
          </div>
        </div>

        <div className='flex justify-evenly gap-6 font-semibold'>
          <div>Exams</div>
          <div>Programs</div>
          <div>Scholarships</div>
          <div>Test Series</div>
          <div>Study Materials</div>
        </div>

        <div className='flex justify-evenly gap-6'>
          <div className='px-5 py-2 text-black bg-white border rounded-full flex gap-2 items-center'>
            <PiPhoneCallBold size={"20px"} className="icon-red" style={{ backgroundColor: "white" }} />
            Talk to us
          </div>



          <div className='px-4 py-2 border rounded-full'>Login</div>
        </div>
      </div>


    </div>
  )
}

export default Navbar