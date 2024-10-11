import React, { useEffect, useState } from 'react'
import ad1 from "../assets/advertisements/ad1.webp"
import ad2 from "../assets/advertisements/ad2.webp"
import ad3 from "../assets/advertisements/ad3.webp"
import ad4 from "../assets/advertisements/ad4.webp"

function Advertisements() {
    const advertise = [ad1, ad2, ad3, ad4]
    const [setImageid, useSetimageId] = useState(null)
    useEffect(() => {
        const setid = setInterval(() => {
            useSetimageId(advertise[Math.floor(Math.random() * advertise.length)])
        }, 1000)

        return () => clearInterval(setid)

    }, [])
    return (
        <div>
            <img className='mx-auto' src={setImageid} width={"900px"} alt="advertise" />
        </div>
    )
}

export default Advertisements