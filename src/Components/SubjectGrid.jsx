import React from 'react'
import pic1 from "../assets/subjectgrid/subjectgrid1.webp"
import pic2 from "../assets/subjectgrid/subjectgrid2.webp"
import pic3 from "../assets/subjectgrid/subjectgrid3.webp"
import { TiArrowRight } from "react-icons/ti";

function SubjectGrid() {
    return (
        <div>
            <h1 className='font-semibold text-3xl  px-10 mb-6'>Discover the perfect online program</h1>

            <div className='grid grid-cols-2 gap-3 px-10'>
                <div className='shadow-lg rounded-lg bg-[#13203b] flex w-[400px] h-[250px]'>
                    <h1 className='flex flex-col p-4 text-2xl font-semibold'>JEE <span className='mt-28 flex items-center gap-3 text-[#78abfb]'>View <TiArrowRight size={"30px"} /></span></h1>
                    <img className='pt-9 pr-2 mt-6' width={"250px"} src={pic1} alt="pic1" />

                </div>
                <div className='shadow-lg rounded-lg bg-[#13203b] flex w-[400px] h-[250px]'>

                    <h1 className='flex flex-col p-4 text-2xl font-semibold'>NEET <span className='mt-28 flex items-center gap-3 text-[#78abfb]'>View <TiArrowRight size={"30px"} /></span></h1>
                    <img width={"250px"} className='mt-6' src={pic2} alt="pic2" />
                </div>
                <div className='shadow-lg rounded-lg bg-[#13203b] flex w-[400px] h-[250px]'>

                    <h1 className='flex flex-col p-3 text-2xl font-semibold'>Grade 6-10 <span className='mt-28 flex items-center gap-3 text-[#78abfb]'>View <TiArrowRight size={"30px"} /></span></h1>
                    <img width={"250px"} className='mt-6' src={pic3} alt="pic3" />
                </div>
            </div>
        </div>
    )
}

export default SubjectGrid