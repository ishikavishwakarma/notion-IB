import React, { useEffect } from 'react'
import { Dialog } from "@material-tailwind/react";

import { MdOutlinePlayCircle, MdOutlinePlayCircleFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="px-10" >
            <div className="h-full w-full">
                <div className="grid gap-10 justify-content-center grid-cols-1 md:grid-cols-2   ">

                    <div className='max-sm:w-screen h-full flex flex-col items-center md:items-start justify-center gap-4  lg:pl-10'>
                        <div>
                            <h1 className="py-3 text-5xl lg:text-6xl font-semibold " >Buy Insurance,</h1>
                            <span className="text-4xl lg:text-5xl text-orange-900">
                                <Typewriter
                                    words={['Smart Way', 'Simple and Easy']}
                                    loop={5}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                        <p className='text-md font-normal text-gray-800'>We are a Professional Organization with dedicated team of qualified Insurance Professionals, to service various Insurance and Risk Management requirements of clients spread across the country.</p>


                    </div>

                    <div className=' p-5 align-middle w-auto md:w-[40vw] relative justify-center items-end flex flex-col max-sm:hidden '>
                       
                        <img
                            className='rounded-full h-full w-full lg:h-[90%] shadow-xl lg:w-3/5'
                            src="/assets/images/hero/hero.avif"
                            alt=""
                        //    loading='lazy'
                        />
                        
                        <span className='absolute z-9999 top-[50%] left-[50%] lg:left-[70%]'>
                            <div onClick={handleOpen} className="wrapper">
                                <div className="video-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>
                                    <a className='video text-5xl -mb-2' frameBorder="0" allowFullScreen data-lity ><MdOutlinePlayCircle /></a>

                                </div>
                            </div>

                            <Dialog
                                open={open}
                                handler={handleOpen}
                                animate={{
                                    mount: { scale: 1, y: 0 },
                                    unmount: { scale: 0.9, y: -100 },
                                }}
                                className='object-contain overflow-hidden'
                            >

                                <iframe loading='lazy' className='w-full h-full md:h-[400px] iframe' src="https://www.youtube.com/embed/WtTeXHkZ6pI?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowFullScreen></iframe>

                            </Dialog>
                        </span>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Hero
