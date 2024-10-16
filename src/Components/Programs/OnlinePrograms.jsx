import React from 'react'
import pic1 from "../../assets/onlineprogram1.webp"
import { MdKeyboardArrowRight } from "react-icons/md";
import SubjectGrid from '../SubjectGrid';

function OnlinePrograms() {
  return (
    <div className='flex flex-col mt-3 px-5'>
      <div className='flex flex-col gap-5'>
        <div className='flex  px-10 gap-3 items-center'>Home <MdKeyboardArrowRight /> Online Programs </div>

        <h1 className='font-semibold text-4xl  px-10'>Online Programs</h1>
      </div>

      <div className='flex items-center justify-around px-10'>

        <div className='-mt-14'>To get the full ALLEN Learning Experience explore the Ultimate Series of Programs for JEE, NEET and Olympiads. The Ultimate Programs are Allen Recommended. They provide a fully structured curriculum with a week-by-week plan and foster meaningful teacher-student interaction. These programs offer a personalized study experience, guiding you throughout your journey on where to concentrate your efforts.</div>

        <img width={"500px"} src={pic1} alt="onlineprogram" />

      </div>
      <div className='flex justify-center'>
      <SubjectGrid/>
      </div>
    </div>
  )
}

export default OnlinePrograms