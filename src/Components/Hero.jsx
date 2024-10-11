import Hero1 from "../assets/hero_1.webp"
import Hero2 from "../assets/hero2.webp"
import Hero3 from "../assets/hero3.webp"
import Hero4 from "../assets/hero4.webp"
import { useEffect, useState } from "react"

function Hero() {
    const images = [Hero1, Hero2, Hero3, Hero4]
    const [imageid, setImageId] = useState(null)

    useEffect(() => {
        const intervalid = setInterval(() => {
            setImageId(images[Math.floor(Math.random() * images.length)])
        }, 2000)

        return () => clearInterval(intervalid)
    }, [])
    return <div>


        <div className="flex justify-around items-center px-7 py-4">
            <div className="flex flex-col gap-20 mb-24">
                <div className="font-bold text-4xl flex flex-col gap-1">
                    <span> Your Dream.</span>
                    <span>Our Expertise.</span>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="font-semibold">
                        What brings you to us today?
                    </div>

                    <div className="flex gap-5 items-center cursor-pointer">
                        <div className="rounded-full  border-2 px-6 py-2 font-bold" style={{ borderColor: '#3f8dfd' }}>NEET</div>
                        <div className="rounded-full  border-2 px-6 py-2 font-bold" style={{ borderColor: '#3f8dfd' }}>JEE</div>
                        <div className="rounded-full  border-2 px-6 py-2 font-bold" style={{ borderColor: '#3f8dfd' }}>Grade 6-10</div>
                    </div>
                </div>
            </div>


            <div>
                <img src={imageid} width={"450px"} alt="Hero images" />
            </div>
        </div>


    </div>
}

export default Hero