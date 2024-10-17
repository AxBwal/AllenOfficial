import React, { useState } from 'react'
import sorry from "../../assets/subjectgrid/sorry.png"
import SubjectGrid from '../SubjectGrid'

const faqadsat=[
    {
        id:"01",
        question:"What is the ADSAT test ? How can i benefit from it ?",
        answer:"ADSAT (ALLEN Digital Scholarship Admission Test) is an opportunity to secure scholarships of up to 90% on ALLEN Online Programs. The test has no registration fee. If you're interested in Offline courses, kindly visit your nearest ALLEN center to take the test."
    },
    {
        id:"02",
        question:"WHO can Appear for ADSAT ?",
        answer:"Students studying in class 7th upto 11th in 2023-24 are eligible to participate in ADSAT 2024. Students can utilise the scholarships to enrol in online programs for class 8th upto 12th respectively for the academic year 2024-25."
    },
    {
        id:"03",
        question:"What is the ADSAT test ? How can i benefit from it ?",
        answer:"The exam duration will be 2 hrs. It consists of multiple choice questions as per topic-wise syllabus available on the website."
    },
    {
        id:"04",
        question:"What is the Last date For registration?",
        answer:"If you register on a Saturday, you will be allotted to a test slot on next Sunday. Example, for the exam on 10th March 2024, you have to register by 8th March 2024."
    },
    {
        id:"05",
        question:"What is the ADSAT test ? How can i benefit from it ?",
        answer:"ADSAT (ALLEN Digital Scholarship Admission Test) is an opportunity to secure scholarships of up to 90% on ALLEN Online Programs. The test has no registration fee. If you're interested in Offline courses, kindly visit your nearest ALLEN center to take the test."
    },
    {
        id:"06",
        question:"What is the ADSAT test ? How can i benefit from it ?",
        answer:"ADSAT (ALLEN Digital Scholarship Admission Test) is an opportunity to secure scholarships of up to 90% on ALLEN Online Programs. The test has no registration fee. If you're interested in Offline courses, kindly visit your nearest ALLEN center to take the test."
    },
    {
        id:"07",
        question:"What is the ADSAT test ? How can i benefit from it ?",
        answer:"ADSAT (ALLEN Digital Scholarship Admission Test) is an opportunity to secure scholarships of up to 90% on ALLEN Online Programs. The test has no registration fee. If you're interested in Offline courses, kindly visit your nearest ALLEN center to take the test."
    },
    {
        id:"08",
        question:"What is the ADSAT test ? How can i benefit from it ?",
        answer:"ADSAT (ALLEN Digital Scholarship Admission Test) is an opportunity to secure scholarships of up to 90% on ALLEN Online Programs. The test has no registration fee. If you're interested in Offline courses, kindly visit your nearest ALLEN center to take the test."
    },
    {
        id:"09",
        question:"What is the ADSAT test ? How can i benefit from it ?",
        answer:"ADSAT (ALLEN Digital Scholarship Admission Test) is an opportunity to secure scholarships of up to 90% on ALLEN Online Programs. The test has no registration fee. If you're interested in Offline courses, kindly visit your nearest ALLEN center to take the test."
    },
]

function ADSAT() {
    const [openid,setOpenid]=useState(null)

    function idupdate(id){
        setOpenid(prevId => (prevId === id ? null : id));

    }

  return (
    <div>
        <div>
            <img src={sorry} alt="" />
        </div>
        <div>
            <SubjectGrid/>
        </div>

        <div>
            <h1>Frequently Asked Questions</h1>
            {
                faqadsat.map((item)=>{
                    return <div key={item.id} className='p-3'>
                        <div onClick={()=>idupdate(item.id)}>{item.question}</div>

                        {
                            openid ===item.id && (
                                <div className='text-[#bbc2d1]'>{item.answer}</div>  
                            )
                        }
                       
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default ADSAT