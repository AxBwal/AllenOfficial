import React, { useState } from 'react'
import { PiPhoneCallBold } from "react-icons/pi";
import logo from "../assets/logo_dark.svg"
import { MdKeyboardArrowRight } from "react-icons/md";

function Navbar() {
  const [dropdown, setDropdown] = useState(null)

  function handleMouseEnter(menu) {
    setDropdown(menu)
  }

  function handlemouseleave() {
    setDropdown(null)
  }

  return (
    <div className='cursor-pointer'>

      <div className='flex justify-around px-6 py-7 mt-2 items-center'>
        <div>
          <div>
            <img src={logo} width={"100px"} alt="logo" />
          </div>
        </div>

        <div className='flex justify-evenly gap-6 font-semibold'>

          <div onMouseEnter={() => handleMouseEnter("Exams")}
            onMouseLeave={handlemouseleave}
          >Exams
            {
              dropdown === "Exams" && (
                <div className='absolute mt-2 p-3 bg-[#274278] space-y-2 rounded-lg'>
                  <div className='flex justify-between items-center p-2 hover:bg-[#1e355f] rounded-md'>
                    <div>NEET</div>
                    <MdKeyboardArrowRight />
                  </div>
                  <div className='flex justify-between items-center p-2 hover:bg-[#1e355f] rounded-md'>
                    <div>JEE</div>
                    <MdKeyboardArrowRight />
                  </div>
                  <div className='flex justify-between items-center p-2 hover:bg-[#1e355f] rounded-md'>
                    <div>Class 6-10</div>
                    <MdKeyboardArrowRight />
                  </div>
                </div>
              )
            }

          </div>

          <div onMouseEnter={() => handleMouseEnter("Programs")}
            onMouseLeave={handlemouseleave}
          >Programs
            {
              dropdown === "Programs" && (
                <div className='absolute mt-2 p-3 bg-[#274278] rounded-lg space-y-2'>
                  <div className='p-2'>Online Programms</div>
                  <div className='p-2'>Classroom Programms</div>
                  <div className='p-2'>Distance Learning</div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("Scholarships")}
            onMouseLeave={handlemouseleave}>Scholarships

            {
              dropdown === "Scholarships" && (
                <div className='absolute mt-2 p-3 bg-[#274278] rounded-lg space-y-2'>
                  <div className='p-1'>ADSAT</div>
                  <div className='p-1'>TALLENTEX</div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("TestSeries")}
            onMouseLeave={handlemouseleave}>Test Series
            {
              dropdown === "TestSeries" && (
                <div className='absolute mt-2 p-3 bg-[#274278] space-y-2 rounded-lg'>
                  <div className='flex justify-between items-center p-2 '><div>NEET</div> <div><MdKeyboardArrowRight /></div></div>
                  <div className='flex justify-between items-center p-2 '><div>JEE(MAIN + ADVANCE)</div> <span><MdKeyboardArrowRight /></span></div>
                  <div className='flex justify-between items-center p-2 '><div>JEE main</div> <span><MdKeyboardArrowRight /></span></div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("StudyMaterials")}
            onMouseLeave={handlemouseleave}>Study Materials
            {
              dropdown === "StudyMaterials" && (
                <div className='absolute mt-2 p-3 bg-[#274278] space-y-2 rounded-lg'>
                  <div className='flex justify-between items-center p-2'><div>JEE MAIN</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2'><div>JEE Advanced</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2'><div>NEET</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2'><div>NCERT Solutions</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2'><div>CBSE</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2'><div>Olympiad</div> <MdKeyboardArrowRight /></div>

                </div>
              )
            }
          </div>
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