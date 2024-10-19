import React, { useState } from 'react'
import { PiPhoneCallBold } from "react-icons/pi";
import logo from "../assets/logo_dark.svg"
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';

function Navbar() {
  const[loginclose,setLoginClose]=useState(false)
  const [dropdown, setDropdown] = useState(null)
  const [subdropdown, setSubDropdown] = useState(null)
  const navigate = useNavigate()

  function toggleLogin(){ 
    setLoginClose(!loginclose)
  }

  function handleMouseEnter(menu) {
    setDropdown(menu)
  }

  function handlemouseleave() {
    setDropdown(null)
    setSubDropdown(null)
  }
  function subhandlemouseEnter(subMenu) {
    setSubDropdown(subMenu)
  }
  function subhandlemouseleave(menu) {
    setSubDropdown(menu)
  }

  return (
    <div className='cursor-pointer'>

      <div className='flex justify-around px-6 py-7 mt-2 items-center relative'>
        <div>
          <div>
            <img onClick={() => navigate("/")} src={logo} width={"100px"} alt="logo" />
          </div>
        </div>

        <div className='flex justify-evenly gap-6 font-semibold'>

          <div onMouseEnter={() => handleMouseEnter("Exams")}
            onMouseLeave={handlemouseleave}
            className="border-b-4 border-transparent hover:border-[#78abfb]"
          >Exams
            {
              dropdown === "Exams" && (
                <div className='absolute mt-2 p-3 bg-[#274278] space-y-2 rounded-lg'>
                  <div className='flex justify-between items-center p-2 hover:bg-[rgb(120,171,251)] rounded-md' onMouseEnter={() => subhandlemouseEnter("NEET")} onMouseLeave={() => subhandlemouseleave("NEET")}>
                    <div>NEET
                      {
                        subdropdown === "NEET" && (
                          <div className='absolute px-4 left-full top-0 ml-2 w-[180px] py-3 bg-[#274278] rounded-lg space-y-3'>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md' onClick={() => navigate("neet/online-coaching-class-11")}>Class 11th</div>
                            <div onClick={() => navigate("neet/online-coaching-class-12")} className='hover:bg-[#78abfb] p-2 rounded-md'>Class 12th</div>
                            <div onClick={() => navigate("neet/online-coaching-class-12-droppers")} className='hover:bg-[#78abfb] p-2 rounded-md'>Class 12th plus</div>
                          </div>
                        )
                      }
                    </div>
                    <MdKeyboardArrowRight />
                  </div>
                  <div className='flex justify-between items-center p-2 hover:bg-[#78abfb] rounded-md' onMouseEnter={() => subhandlemouseEnter("JEE")} onMouseLeave={() => subhandlemouseleave("JEE")}>
                    <div>JEE
                      {
                        subdropdown === "JEE" && (
                          <div className='absolute px-4 left-full top-14 ml-2 w-[180px] py-3 bg-[#274278] rounded-lg space-y-3'>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md'>Class 11th</div>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md'>Class 12th</div>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md'>Class 12th plus</div>
                          </div>
                        )
                      }
                    </div>
                    <MdKeyboardArrowRight />
                  </div>
                  <div className='flex justify-between items-center p-2 hover:bg-[#78abfb] rounded-md' onMouseEnter={() => subhandlemouseEnter("class610")} onMouseLeave={() => subhandlemouseleave("class610")}>
                    <div>Class 6-10
                      {
                        subdropdown === "class610" && (
                          <div className='absolute px-4 left-full top-28 ml-2 w-[180px] py-3 bg-[#274278] rounded-lg space-y-3'>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md'>Class 6th</div>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md'>Class 7th</div>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md'>Class 8th</div>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md'>Class 9th</div>
                            <div className='hover:bg-[#78abfb] p-2 rounded-md'>Class 10th</div>
                          </div>
                        )
                      }
                    </div>
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
                  <div onClick={() => navigate("/ultimate-program-live-courses")} className='p-2  hover:bg-[#78abfb] rounded-md'>Online Programms</div>
                  <div className='p-2  hover:bg-[#78abfb] rounded-md'>
                    <NavLink to="https://www.allen.ac.in/" target='_blank'>Classroom Programms</NavLink>
                  </div>
                  <div className='p-2  hover:bg-[#78abfb] rounded-md'>
                    <NavLink to="https://dlp.allen.ac.in/" target='_blank'>Distance Learning</NavLink>
                  </div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("Scholarships")}
            onMouseLeave={handlemouseleave} className='hover:border-b-4 hover:border-[#78abfb]'>Scholarships

            {
              dropdown === "Scholarships" && (
                <div className='absolute mt-2 p-3 bg-[#274278] rounded-lg space-y-2'>
                  <div onClick={() => navigate("adsat-register")} className='p-1  hover:bg-[#78abfb] rounded-md'>ADSAT</div>
                  <div className='p-1  hover:bg-[#78abfb] rounded-md'>
                  <NavLink to="https://studyonline.tallentex.com/" target='_blank'>TALLENTEX</NavLink>
                    
                    </div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("TestSeries")}
            onMouseLeave={handlemouseleave} className='hover:border-b-4 hover:border-[#78abfb]'>Test Series <span className='relative bottom-3 right-2 bg-[#febf1c] text-black rounded-lg m-1 px-2 text-sm font-semibold'>New</span>
            {
              dropdown === "TestSeries" && (
                <div className='absolute mt-2 p-3 bg-[#274278] space-y-2 rounded-lg'>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md '><div>NEET</div> <div><MdKeyboardArrowRight /></div></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md '><div>JEE(MAIN + ADVANCE)</div> <span><MdKeyboardArrowRight /></span></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md '><div>JEE main</div> <span><MdKeyboardArrowRight /></span></div>
                </div>
              )
            }
          </div>
          <div onMouseEnter={() => handleMouseEnter("StudyMaterials")}
            onMouseLeave={handlemouseleave} className='hover:border-b-4 hover:border-[#78abfb]'>Study Materials
            {
              dropdown === "StudyMaterials" && (
                <div className='absolute mt-2 p-3 bg-[#274278] space-y-2 rounded-lg'>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md'><div>JEE MAIN</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md'><div>JEE Advanced</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md'><div>NEET</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md'><div>NCERT Solutions</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md'><div>CBSE</div> <MdKeyboardArrowRight /></div>
                  <div className='flex justify-between items-center p-2  hover:bg-[#78abfb] rounded-md'><div>Olympiad</div> <MdKeyboardArrowRight /></div>

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



          <div onClick={toggleLogin}>
            <div className='px-4 py-2 border rounded-full hover:bg-[#274278]'>Login</div>
          </div>
        </div>

        {
          loginclose && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10">
              <div className={`fixed top-0 right-0 h-full w-[450px] bg-[#13203b] z-20 transform transition-transform duration-300 ${loginclose ? 'translate-x-0' : 'translate-x-full'}`}>
                <Login closeLogin={toggleLogin}/>
              </div>
            </div>
          )
        }
      </div>


    </div>
  )
}

export default Navbar