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

                    <div className='max-sm:w-screen h-full flex flex-col items-center md:items-start justify-center gap-4  lg:pl-10'>
                        <div>
                        <h1 className="py-3 text-4xl lg:text-6xl font-semibold " >Buy Insurance,</h1>
                        <span className="text-3xl lg:text-5xl text-orange-900">The Smart Way.</span>
                        </div>
                        <p className='text-lg font-medium text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt voluptatibus facere iure molestias sequi quo nulla quam nam ex molestiae?</p>
                       

                    </div>

                    <div className=' p-5 h-[35vw] align-middle w-auto md:w-[40vw] relative justify-center flex flex-col max-sm:hidden '>
                        <img
                            className='md:h-[30vw] h-[60vw] shadow-xl  w-auto sm:h-[90%] sm:w-[90%] md:w-full'
                            src="assets/images/hero/hero2.webp"
                            alt=""
                            style={{
                                clipPath: 'polygon(29% 0%, 100% 0%, 100% 100%, 25% 100%, 0 50%)'
                            }}
                        />
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
