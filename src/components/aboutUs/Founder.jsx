import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";


const Founder = () => {
    return (
        <div className="flex flex-col items-center py-10 mt-5">
            <CardBody className="px-10">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                    Our experts
                </Typography>
            </CardBody>
            <Card className="founder py-10 flex flex-row flex-wrap items-center justify-center gap-5 px-5 w-4/5">

                        <Card className=" p-3 flex bg-gray-50 w-[300px]">

                            <div className='overflow-hidden rounded-xl'>
                            <img
                                className='h-72 rounded-xl hover:scale-125 duration-150'
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" />

                            </div>
                            <CardBody className="px-2 flex flex-col">
                            <Typography variant="h6" color="blue-gray" >
                                    <i>
                                        ~Founder
                                    </i>
                                </Typography>
                                <Typography variant="h4" color="blue-gray" >
                                    Mr.John Doe
                                </Typography>

                                <Typography >
                                    15 year of Experience
                                </Typography>

                               
                            </CardBody>
                        </Card>
                        <Card className=" p-3 flex bg-gray-50 w-[300px]">

                            <div className='overflow-hidden rounded-xl'>
                            <img
                                className='h-72 rounded-xl hover:scale-125 duration-150'
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" />

                            </div>
                            <CardBody className="px-2 flex flex-col">
                            <Typography variant="h6" color="blue-gray" >
                                    <i>
                                        ~Founder
                                    </i>
                                </Typography>
                                <Typography variant="h4" color="blue-gray" >
                                    Mr.John Doe
                                </Typography>

                                <Typography >
                                    15 year of Experience
                                </Typography>

                               
                            </CardBody>
                        </Card>
                        <Card className=" p-3 flex bg-gray-50 w-[300px]">

                            <div className='overflow-hidden rounded-xl'>
                            <img
                                className='h-72 rounded-xl hover:scale-125 duration-150'
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" />

                            </div>
                            <CardBody className="px-2 flex flex-col">
                            <Typography variant="h6" color="blue-gray" >
                                    <i>
                                        ~Founder
                                    </i>
                                </Typography>
                                <Typography variant="h4" color="blue-gray" >
                                    Mr.John Doe
                                </Typography>

                                <Typography >
                                    15 year of Experience
                                </Typography>

                               
                            </CardBody>
                        </Card>
                        <Card className=" p-3 flex bg-gray-50 w-[300px]">

                            <div className='overflow-hidden rounded-xl'>
                            <img
                                className='h-72 rounded-xl hover:scale-125 duration-150'
                                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="card-image" />

                            </div>
                            <CardBody className="px-2 flex flex-col">
                            <Typography variant="h6" color="blue-gray" >
                                    <i>
                                        ~Founder
                                    </i>
                                </Typography>
                                <Typography variant="h4" color="blue-gray" >
                                    Mr.John Doe
                                </Typography>

                                <Typography >
                                    15 year of Experience
                                </Typography>

                               
                            </CardBody>
                        </Card>
                    

            </Card>
        </div>

    )
}

export default Founder