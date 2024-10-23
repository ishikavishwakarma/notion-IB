import React from 'react'
import { FcBriefcase, FcBusinessman, FcCollaboration, FcDebt, FcSurvey } from 'react-icons/fc'

const Work = () => {
    return (
        <div loading='lazy' className="mx-auto w-full md:px-20 px-5 py-20 bg-[url('/assets/images/workflow/workflow.avif')] bg-cover bg-center bg-no-repeat">
            <p className=" text-blue-gray-800 text-center">work process</p>
            <h2 className="font-headline text-2xl font-semibold sm:text-3xl text-center">Our easy work process <br /> in 4 steps</h2>

            <div className="grid sm:grid-cols-4 gap-16 sm:gap-8 mt-16">

                <div className="text-center ">
                    <div className="relative w-32 h-32 mx-auto left-2 rounded-full step">
                        <div
                            className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                            <span className='step-icon step-icon text-6xl'><FcSurvey /></span>
                        </div>
                        <div className="count absolute inset-0 -translate-x-2 -translate-y-2 z-20 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">1</div>
                        <div className="step-line absolute inset-1/2 translate-x-1/2 translate-y-1/2 -z-1 w-1 h-1 bg-blue-500 "></div>
                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-6">Select insurance</h3>
                </div>

                <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto left-2 step">
                        <div
                            className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                            <span className='step-icon text-6xl'><FcCollaboration /></span>
                        </div>

                        <div className="count absolute inset-0 -translate-x-2 -translate-y-2 z-20 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">2</div>
                        <div className="step-line absolute inset-1/2 translate-x-1/2 translate-y-1/2 -z-1 w-1 h-1 bg-blue-500 "></div>

                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-6"> Schedule meeting</h3>

                </div>

                <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto left-2 step">
                        <div
                            className="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                            <span className='step-icon text-6xl'><FcBusinessman /></span>
                        </div>

                        <div className="count absolute inset-0 -translate-x-2 -translate-y-2 z-20 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">3</div>
                        <div className="step-line absolute inset-1/2 translate-x-1/2 translate-y-1/2 -z-1 w-1 h-1 bg-blue-500 "></div>

                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-6"> Meet agent</h3>

                </div>

                <div className="text-center">
                    <div className="relative w-32 h-32 mx-auto left-2 step">
                        <div
                            className="z-10 relative w-[100%] h-[100%] bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                            <span className='step-icon text-6xl'><FcDebt /></span>
                        </div>

                        <div className="count absolute inset-0 -translate-x-2 -translate-y-2 z-20 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">4</div>


                    </div>
                    <h3 className="font-headline text-xl font-semibold mt-6"> Get insurance</h3>

                </div>

            </div>
        </div>
    )
}

export default Work