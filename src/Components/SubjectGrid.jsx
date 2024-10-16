import React from 'react'
import pic1 from "../assets/subjectgrid/subjectgrid1.webp"
import pic2 from "../assets/subjectgrid/subjectgrid2.webp"
import pic3 from "../assets/subjectgrid/subjectgrid3.webp"

function SubjectGrid() {
    return (
        <div>
            <h1 className='font-semibold text-4xl  px-10 mb-6'>Discover the perfect online program</h1>

            <div className='grid grid-cols-2 gap-3 px-10'>
                <div className='shadow-lg rounded-lg bg-[#13203b] flex w-[400px] h-[250px]'>
                    <h1 className='flex flex-col'>JEE <span>View</span></h1>
                    <img width={"300px"} src={pic1} alt="pic1" />

                </div>
                <div className='shadow-lg rounded-lg bg-[#13203b] flex w-[400px] h-[250px]'>

                    <h1 className='flex flex-col'>NEET <span>View</span></h1>
                    <img width={"300px"} src={pic2} alt="pic2" />
                </div>
                <div className='shadow-lg rounded-lg bg-[#13203b] flex w-[400px] h-[250px]'>

                    <h1 className='flex flex-col'>Grade 6-10 <span>View</span></h1>
                    <img width={"300px"} src={pic3} alt="pic3" />
                </div>
            </div>
        </div>
    )
}

export default SubjectGrid