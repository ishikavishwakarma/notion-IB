import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
const Information = () => {
    return (
        <div className="flex flex-col items-center pb-10">
            <h1 className="text-5xl pl-20 font-semibold bg-red-50 w-full text-start text-white py-5 h-52 about_top">Know <br /> More About Us</h1>
            
            <Card className="information py-10 mt-5 flex flex-row w-4/5 px-5">
                <CardBody className="px-10">
                    <Typography variant="h3" color="blue-gray" className="mb-2">
                    About Us
                    </Typography>
                    <Typography className="py-3">
                        Notion Insurance Broker Pvt. Ltd. (INDIA) is fast upcoming Insurance Broker from central India & are duly licensed from IRDAI (Insurance Regulatory and Development Authority of India). With our dedicated team of Insurance professionals, we cater tailor-made policies to our valued customers in accordance to their risk, which is not only cost effective but provides wider coverage for indemnification.                    </Typography>
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

export default Information