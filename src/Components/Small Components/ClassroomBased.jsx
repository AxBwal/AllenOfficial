import React from 'react'
import classrombased from "../../assets/subjectgrid/classroombased.webp"

function ClassroomBased() {
    return (
        <div>
            <div className='text-4xl font-semibold mb-8'>Looking for a classroom based program?</div>
            <div className='mx-auto flex items-center justify-between bg-[#13203b] w-[800px] h-[200px] rounded-xl'>
                <div className='flex flex-col gap-7 px-5'>
                    <div className='text-2xl text-[#bbc2d1] font-semibold flex flex-col gap-3'><span>Present in 53 cities with</span>
                        <span>250+ classrooms</span></div>
                <div className='bg-white text-black rounded-xl w-fit px-6 py-3'>Find a Centre</div>
                </div>
                <div>
                    <img width={"300px"} src={classrombased} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ClassroomBased