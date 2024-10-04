import React from 'react';
import { CardBody, CardHeader, Typography } from '@material-tailwind/react'; // Assuming you're using Material Tailwind

function ImageTextCard({ heading,subheading ,imageSrc, altText, description }) {
  return (
    <>
     <Typography variant="h3" color="blue-gray" className="mb-2 pt-8 w-full text-center">
      {heading}
      <Typography color="gray" variant="h5" className="mb-10 text-center pt-2 px-3 lg:px-20 font-medium">
     {subheading}
        </Typography>
      </Typography>
    <div className="flex flex-col lg:flex-row">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 lg:w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src={imageSrc}
          alt={altText}
          className="h-80 w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography className="mb-8 text-gray-700 font-normal">
          {description}
        </Typography>
      </CardBody>
    </div>
    </>
  );
}

export default ImageTextCard;
