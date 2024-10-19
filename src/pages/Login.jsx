import React from 'react'
import logo from "../assets/logo_dark.svg"
import { IoClose } from "react-icons/io5";

function Login({closeLogin}) {
    return (
        <div className='p-6 bg-[#13203b]'>
            <div className='flex justify-between items-center'>
                <img width={"100px"} src={logo} alt="logo" />
                <IoClose size={24} className="cursor-pointer" onClick={closeLogin} />
            </div>

            <div className='mt-24'>
                <h1 className='text-white text-lg font-bold'>Login with mobile number</h1>
                <div className='flex flex-col  mt-4'>
                    <input className='p-2 bg-[#0f1825] rounded-md mb-4' type="text" name="" id="" placeholder='Enter 10 digit Mobile Number' />
                    <button className='bg-gray-600 text-white p-2 rounded-md'>Send otp</button>
                </div>

                <div className='mt-10 text-center'>
                    <h1 className='text-white'>Or</h1>
                    <button className='bg-[#13203b] border px-8 text-white py-2 rounded-md mt-2'>Login with Username</button>
                </div>
                <div className='mt-6 text-white text-sm'>
                    By continuing you are accepting our privacy policy and T&C
                </div>
            </div>

        </div>
    )
}

export default Login