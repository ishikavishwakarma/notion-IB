import React, { useEffect } from 'react'
import Typical from 'react-typical';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";

import { MdOutlinePlayCircle, MdOutlinePlayCircleFilled } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Hero = () => {


    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <div className="px-10" >
            <div className="h-full w-full">
                <div className="grid gap-20 lg:gap-20 md:gap-10 grid-cols-1 md:grid-cols-2   ">

                    <div className='max-sm:w-screen h-full flex flex-col items-center md:items-start justify-center gap-4  lg:pl-10'>
                        <div>
                            <h1 className="py-3 text-5xl lg:text-6xl font-semibold " >Buy Insurance,</h1>
                            <span className="text-4xl lg:text-5xl text-orange-900">
                                <Typical
                                    steps={[
                                        'The Smart Way', 4000,
                                        'Fast & Easy', 4000,
                                        'Digital', 4000,
                                       
                                    ]}
                                    loop={Infinity}
                                
                                    wrapper="span"
                                />
                            </span>
                        </div>
                        <p className='text-md font-normal text-gray-800'>We are a Professional Organization with dedicated team of qualified Insurance Professionals, to service various Insurance and Risk Management requirements of clients spread across the country.</p>


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
                           
                            <div onClick={handleOpen} className="wrapper">
                                <div className="video-main">
                                    <div className="promo-video">
                                        <div className="waves-block">
                                            <div className="waves wave-1"></div>
                                            <div className="waves wave-2"></div>
                                            <div className="waves wave-3"></div>
                                        </div>
                                    </div>
                                    <a className='video text-5xl' frameborder="0" allowfullscreen data-lity ><MdOutlinePlayCircle /></a>

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
                                
                                <iframe className='w-full md:h-[400px] iframe' src="https://www.youtube.com/embed/NkH_RjW_4Vs?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; " allowfullscreen></iframe>
                                
                            </Dialog>
                        </span>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Hero
