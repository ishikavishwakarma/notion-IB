import React, { useEffect } from 'react'
import { Dialog } from "@material-tailwind/react";

import { MdOutlinePlayCircle, MdOutlinePlayCircleFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="container" >
            <div className="h-fit flex justify-center w-full">
                <div className="grid gap-10 justify-content-center grid-cols-1 md:grid-cols-2   ">

                    <div className='max-sm:w-screen h-full flex flex-col items-center md:items-start justify-center gap-4 '>
                        <div>
                            <h1 className="py-3 text-4xl lg:text-5xl font-semibold " >Buy Insurance,</h1>
                            <span className="text-3xl lg:text-4xl text-orange-900">
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
                        <p className='md:text-sm text-justify text-sm px-2 md:px-0 lg:text-base font-normal text-gray-800'>We are a professional organization with a dedicated team of qualified insurance professionals, committed to meeting the diverse insurance and risk management needs of clients nationwide. Our team specializes in providing customized solutions for individuals and businesses across various sectors, including life, health, home, and business insurance.We understand that every client has unique requirements, and we work closely with them to identify the best strategies to mitigate risks and protect their assets.With a focus on integrity, transparency, and customer satisfaction, we offer expert guidance and support, ensuring that our clients receive comprehensive coverage tailored to their specific needs. </p>


                    </div>

                    <div className=' p-5 align-middle w-auto  relative justify-center items-end flex flex-col max-sm:hidden '>
                       
                        <img
                            className='rounded-full h-full w-full md:w-full md:h-[80%] xl:h-[90%] lg:h-[90%] shadow-xl lg:w-[80%] xl:w-3/4'
                            src="/assets/images/hero/hero.avif"
                            alt="NIB insurance"
                           loading='lazy'
                        />
                        
                        <span className='absolute z-9999 top-[50%] left-[50%] lg:left-[60%]'>
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
