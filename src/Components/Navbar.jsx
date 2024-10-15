import React, { useState } from 'react'
import { PiPhoneCallBold } from "react-icons/pi";
import logo from "../assets/logo_dark.svg"

function Navbar() {
  const [dropdown, setDropdown] = useState(null)

  function handleMouseEnter(menu) {
    setDropdown(menu)
  }

  function handlemouseleave() {
    setDropdown(null)
  }

  return (
    <div>

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
                <div className='absolute mt-2 p-3 bg-[#274278]'>
                  <div>NEET</div>
                  <div>JEE</div>
                  <div>Class 6-10</div>
                </div>
              )
            }
          </div>

          <div onMouseEnter={() => handleMouseEnter("Programs")}
            onMouseLeave={handlemouseleave}
          >Programs
            {
              dropdown === "Programs" && (
                <div className='absolute mt-2 p-3 bg-[#274278]'>
                  <div>Online Programms</div>
                  <div>Classroom Programms</div>
                  <div>Distance Learning</div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("Scholarships")}
            onMouseLeave={handlemouseleave}>Scholarships

            {
              dropdown === "Scholarships" && (
                <div className='absolute mt-2 p-3 bg-[#274278]'>
                  <div>ADSAT</div>
                  <div>TALLENTEX</div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("TestSeries")}
            onMouseLeave={handlemouseleave}>Test Series
            {
              dropdown === "TestSeries" && (
                <div className='absolute mt-2 p-3 bg-[#274278]'>
                  <div>NEET</div>
                  <div>JEE(MAIN + ADVANCE)</div>
                  <div>JEE main</div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("StudyMaterials")}
            onMouseLeave={handlemouseleave}>Study Materials
            {
              dropdown === "StudyMaterials" && (
                <div className='absolute mt-2 p-3 bg-[#274278]'>
                  <div>JEE MAIN</div>
                  <div>JEE Advanced</div>
                  <div>NEET</div>
                  <div>NCERT Solutions</div>
                  <div>CBSE</div>
                  <div>Olympiad</div>

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