import React from 'react'
import {
    Card,
    CardBody,
    Typography,

} from "@material-tailwind/react";

const Mission = () => {
    return (
        <div className="flex flex-col items-center py-10">
            <Card className=" py-10 flex flex-row-reverse w-4/5 px-5">
                <CardBody className="px-10">
                    <Typography variant="h2" color="blue-gray" className="mb-2">
                        Our vision
                    </Typography>
                    <Typography className="py-3">
                        <i></i>
                        Our vision is to set the standard of excellence among Insurance providers by being innovative, being financially strong, and exceeding customer expectations. We will attract and retain the very best employees and POSP (Point of Sales Persons) to help us achieve this goal.
                    </Typography>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                   <i>
                   Notion Insurance Broker Pvt. Ltd.
                   </i>
                    </Typography>
                </CardBody>

                <img
                    className="w-[30vw] rounded-xl"
                    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt="card-image"
                />



            </Card>
        </div>

    )
}

export default Mission