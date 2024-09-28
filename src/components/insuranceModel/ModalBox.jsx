import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";

const ModalBox = ({ text, imgSrc, link }) => {
  return (
    <a href={link} className="no-underline">
    <Card className="w-32 h-24 flex flex-col justify-center">
    {/* <CardHeader floated={false} className="h-20"> */}
    <div className="w-full flex justify-center align-middle">

      <img src={imgSrc} className="h-10 w-10 justify-center" alt="profile-picture" />
    </div>
    {/* </CardHeader> */}
    <CardBody className="text-center py-1 px-2">
      <Typography variant="p" className="font-normal text-xs" color="blue-gray" >
        {text}
      </Typography>
     
    </CardBody>
  
  </Card>
    </a>
  )
}

export default ModalBox