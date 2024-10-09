import React from 'react'
import { Link } from 'react-router-dom'


const Contact2 = () => {
    return (
        
            <div class="bg-blue-gray-700 md:flex gap-x-24 md:mb-16 mb-10">
                <div class="md:flex items-center gap-5 px-5 py-2">
                    <h2 class="text-white font-manrope text-4xl font-semibold leading-10 md:text-left text-center">Find Your Insurance Agent</h2>
                    <div class="flex md:items-center md:justify-start justify-center py-2">
                        <Link to="/contact">
                          <button class="w-36 h-12 rounded-full bg-blue-900 transition-all duration-500 hover:bg-blue-600 shadow text-white text-center text-base font-semibold leading-6">Contact Us</button>
                        </Link>
                    </div>
                </div>
                <div class="md:border-indigo-600 border-white  py-6 md:flex items-center gap-4">
                    <div class="mb-2">
                        <h6 class="text-gray-100 text-sm font-medium leading-5 pb-2 md:text-start text-center">Email Address</h6>
                        <h3 class="text-blue-400 text-xl font-semibold leading-8 md:text-start text-center">pagedone@gmail.com</h3>
                    </div>
                    <div>
                        <h6 class="text-gray-100 text-sm font-medium leading-5 pb-2 md:text-start text-center">Phone Number</h6>
                        <h3 class="text-white text-xl font-semibold leading-8 md:text-start text-center">+91 470-601-1911</h3>
                    </div>
                </div>
            </div>
       
    )
}

export default Contact2