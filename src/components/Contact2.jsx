import React from 'react'
import { FaPhone } from "react-icons/fa6";

const Contact2 = () => {
    return (
        <div className='contact md:flex items-center justify-between md:px-40 text-center py-10 bg-blue-100'>
            <h1 className='text-4xl text-white font-semibold mb-4'>Find a local insurance agent</h1>
            <div className='md:flex items-center gap-20'>
                <span className='flex items-center justify-center gap-3 mb-4 md:mb-0'>
                    <p className='max-w-max p-3 border-2 hover:bg-blue-300 border-blue-700 rounded-full '><FaPhone className='text-3xl ' /></p>
                    <span className='text-white flex flex-col items-center justify-center gap-1'>
                        <p className='text-xl text-blue-600 font-semibold'>+91 11000888845</p>
                        <p className='text-xs'>Call to Our Experts</p>
                    </span>
                </span>
                <button className='px-5 py-3 text-xl rounded-xl outline-none bg-blue-700 text-white font-semibold '>Contact Us</button>
            </div>
        </div>
    )
}

export default Contact2