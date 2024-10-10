import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

const OurExperts = () => {
    return (
        <div className='flex flex-col items-center justify-center'>

            <Card className="md:hover:scale-105 duration-300 py-10 mt-5 flex flex-wrap items-center justify-center gap-5 md:flex-row md:w-4/5">
                <CardHeader shadow={false} className='md:px-10 text-center '>
                    <Typography variant="h3" color="blue-gray" className="mb-1">
                        Our Experts
                    </Typography>
                    <Typography variant="p" color="blue-gray" className="mb-3">
                        With over 100 years of combined experience, we've got a well-seasoned team at the helm.
                    </Typography>
                </CardHeader>

                <CardBody className='flex flex-wrap items-center justify-center gap-x-5 gap-y-10 md:gap-x-10 md:flex-row w-full md:px-5 p-1'>

                    <Card color="transparent" className="w-full md:max-w-[15rem] max-w-[10rem] md:hover:scale-105 duration-300 hover:shadow-2xl py-0.5 pr-0.2">
                        <CardHeader className="mx-0 flex flex-col justify-center items-center gap-4 py-4">
                            <Avatar
                                size="xxl"
                                variant="circular"
                                src="assets/images/founder/img3.jpg"
                                alt="tania andrew"
                            />
                            <div className="flex w-full items-center flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h6" color="blue-gray">
                                        Bharat Shrivastava
                                    </Typography>
                                </div>
                                <Typography color="blue-gray" className='text-center text-blue-900 text-sm '>Principal Officer & C.E.O</Typography>
                            </div>
                        </CardHeader>

                    </Card>

                    <Card color="transparent" className="w-full md:max-w-[15rem] max-w-[10rem] md:hover:scale-105 duration-300 hover:shadow-2xl py-0.5 pr-0.2">
                        <CardHeader className="mx-0 flex flex-col justify-center items-center gap-4 py-4">
                            <Avatar
                                size="xxl"
                                variant="circular"
                                src="assets/images/founder/img4.png"
                                alt="tania andrew"
                            />
                            <div className="flex w-full items-center flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h6" color="blue-gray">
                                        Suresh G Malviya
                                    </Typography>
                                </div>
                                <Typography color="blue-gray" className='text-center text-blue-900 text-sm '>Director</Typography>
                            </div>
                        </CardHeader>

                    </Card>

                    <Card color="transparent" className="w-full md:max-w-[15rem] max-w-[10rem] md:hover:scale-105 duration-300 hover:shadow-2xl py-0.5 pr-0.2">
                        <CardHeader className="mx-0 flex flex-col justify-center items-center gap-4 py-4">
                            <Avatar
                                size="xxl"
                                variant="circular"
                                src="assets/images/founder/img2.jpg"
                                alt="tania andrew"
                            />
                            <div className="flex w-full items-center flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h6" color="blue-gray">
                                        Arun Gupta
                                    </Typography>
                                </div>
                                <Typography color="blue-gray" className='text-center text-blue-900 text-sm '>Managing Director</Typography>
                            </div>
                        </CardHeader>

                    </Card>

                    <Card color="transparent" className="w-full md:max-w-[15rem] max-w-[10rem] md:hover:scale-105 duration-300 hover:shadow-2xl py-0.5 pr-0.2">
                        <CardHeader className="mx-0 flex flex-col justify-center items-center gap-4 py-4">
                            <Avatar
                                size="xxl"
                                variant="circular"
                                src="assets/images/founder/img1.jpg"
                                alt="tania andrew"
                            />
                            <div className="flex w-full items-center flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h6" color="blue-gray">
                                        Kanchan S Malviya
                                    </Typography>
                                </div>
                                <Typography color="blue-gray" className='text-center text-blue-900 text-sm '>Director</Typography>
                            </div>
                        </CardHeader>

                    </Card>

                    <Card color="transparent" className="w-full md:max-w-[15rem] max-w-[10rem] md:hover:scale-105 duration-300 hover:shadow-2xl py-0.5 pr-0.2">
                        <CardHeader className="mx-0 flex flex-col justify-center items-center gap-4 py-4">
                            <Avatar
                                size="xxl"
                                variant="circular"
                                src="assets/images/founder/img5.png"
                                alt="tania andrew"
                            />
                            <div className="flex w-full items-center flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                    <Typography variant="h6" color="blue-gray">
                                        Avinash Gupta
                                    </Typography>
                                </div>
                                <Typography color="blue-gray" className='text-center text-blue-900 text-sm '>Chief Operating Officer(C.O.O)</Typography>
                            </div>
                        </CardHeader>

                    </Card>


                </CardBody>

            </Card>

        </div>
    )
}

export default OurExperts
