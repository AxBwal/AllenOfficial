import React, { useState } from 'react'
import { PiPhoneCallBold } from "react-icons/pi";
import logo from "../assets/logo_dark.svg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [dropdown, setDropdown] = useState(null)
  const navigate=useNavigate()

  function handleMouseEnter(menu) {
    setDropdown(menu)
  }

  function handlemouseleave() {
    setDropdown(null)
  }

  return (
    <div className='cursor-pointer'>

      <div className='flex justify-around px-6 py-7 mt-2 items-center relative'>
        <div>
          <div>
            <img onClick={()=>navigate("/")} src={logo} width={"100px"} alt="logo" />
          </div>
        </div>

        <div className='flex justify-evenly gap-6 font-semibold'>

          <div onMouseEnter={() => handleMouseEnter("Exams")}
            onMouseLeave={handlemouseleave}
            className='hover:border-b-4 hover:border-[#78abfb]'
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
             className='hover:border-b-4 hover:border-[#78abfb]'
          >Programs
            {
              dropdown === "Programs" && (
                <div className='absolute mt-2 p-3 bg-[#274278] rounded-lg space-y-2'>
                  <div onClick={()=>navigate("/ultimate-program-live-courses")} className='p-2  hover:bg-[#1e355f] rounded-md'>Online Programms</div>
                  <div className='p-2  hover:bg-[#1e355f] rounded-md'>Classroom Programms</div>
                  <div className='p-2  hover:bg-[#1e355f] rounded-md'>Distance Learning</div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("Scholarships")}
            onMouseLeave={handlemouseleave}  className='hover:border-b-4 hover:border-[#78abfb]'>Scholarships

            {
              dropdown === "Scholarships" && (
                <div className='absolute mt-2 p-3 bg-[#274278] rounded-lg space-y-2'>
                  <div className='p-1  hover:bg-[#1e355f] rounded-md'>ADSAT</div>
                  <div className='p-1  hover:bg-[#1e355f] rounded-md'>TALLENTEX</div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("TestSeries")}
            onMouseLeave={handlemouseleave}  className='hover:border-b-4 hover:border-[#78abfb]'>Test Series <span className='relative bottom-3 right-2 bg-[#febf1c] text-black rounded-lg m-1 px-2 text-sm font-semibold'>New</span>
            {
              dropdown === "TestSeries" && (
                <div className='absolute mt-2 p-3 bg-[#274278] space-y-2 rounded-lg'>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md '><div>NEET</div> <div><MdKeyboardArrowRight /></div></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md '><div>JEE(MAIN + ADVANCE)</div> <span><MdKeyboardArrowRight /></span></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md '><div>JEE main</div> <span><MdKeyboardArrowRight /></span></div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("StudyMaterials")}
            onMouseLeave={handlemouseleave}  className='hover:border-b-4 hover:border-[#78abfb]'>Study Materials
            {
              dropdown === "StudyMaterials" && (
                <div className='absolute mt-2 p-3 bg-[#274278] space-y-2 rounded-lg'>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md'><div>JEE MAIN</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md'><div>JEE Advanced</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md'><div>NEET</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md'><div>NCERT Solutions</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md'><div>CBSE</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#1e355f] rounded-md'><div>Olympiad</div> <MdKeyboardArrowRight /></div>

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