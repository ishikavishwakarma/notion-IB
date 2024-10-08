import React, { useEffect } from 'react'

import { MdOutlinePlayCircle, MdOutlinePlayCircleFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Hero = () => {

    const handlePlayClick = () => {
        const url = 'https://www.youtube.com/embed/ZwKhufmMxko';
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="px-10" >
            <div className="h-full w-full">
                <div className="grid gap-20 lg:gap-20 md:gap-10 grid-cols-1 md:grid-cols-2   ">
                    <div className='max-sm:w-screen h-full flex flex-col items-center md:items-start justify-center gap-5  lg:pl-10'>
                    <h1 className="mb-3 md:text-3xl lg:text-6xl  hidden md:block font-semibold" >Buy Insurance, <span className="font-light">The <br /> Smart Way.</span></h1>
                    <h1 className="mb-3 text-2xl mt-2 text-center md:hidden font-semibold" >Buy Insurance, <span className="font-light">The Smart Way.</span></h1>
                        <p className='text-lg  md:text-start font-medium text-gray-600'>Insurance provides financial protection, offering peace of mind during unexpected events. Safeguard your future today with coverage tailored to your needs. Ensure security for you and your loved ones.</p>
                        <button className="rounded-md  max-sm:text-sm relative flex max-sm:py-1 px-3 py-1.5 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
                            <span className="relative z-10 max-sm:py-0 max-sm:px-0 py-2 px-3 font-semibold">Discover More</span>
                        </button>
                    </div>

                    <div className=' p-5 h-[35vw] align-middle w-auto md:w-[40vw] relative justify-center flex flex-col max-sm:hidden '>
                        <img className='md:h-[30vw] h-[60vw]   w-auto sm:h-[90%] sm:w-[90%] md:w-full' src="assets/images/hero/beautiful-curly-girl.png" alt="" />

                        <span className='absolute z-9999 top-[50%] left-[50%] '>
                            <div className="wrapper">
                                <div className="video-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>
                                    <a className='video text-5xl' href="https://www.youtube.com/embed/ZwKhufmMxko" frameborder="0" allowfullscreen data-lity ><MdOutlinePlayCircle /></a>

                                </div>
                            </div>
                        </span>
                    </div>
                    <div className='hidden max-sm:block p-5 rounded-lg overflow-hidden'>
                        <img className='h-[36vw]' src="assets/images/hero/slider-8-1.jpg" alt="" />

                        <span className='absolute z-9999 top-52 right-52 max-sm:bottom-0'>
                            <div className="wrapper">
                                <div className="video-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>
                                    <a className='video text-5xl' href="https://www.youtube.com/embed/ZwKhufmMxko" frameborder="0" allowfullscreen data-lity ><MdOutlinePlayCircle /></a>

                                </div>
                            </div>
                        </span>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Hero
