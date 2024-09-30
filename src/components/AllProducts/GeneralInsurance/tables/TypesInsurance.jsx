import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react'; // Adjust according to your imports

function InsuranceTypes({ title, description, insuranceOptions }) {
  return (
    <div className="pt-8">
      <Typography variant="h3" color="blue-gray" className="mb-2 text-center">
        {title}
      </Typography>
      <Typography color="gray" className="mb-10 pt-2 lg:px-20 font-normal text-center">
        {description}
      </Typography>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {insuranceOptions.map((option, index) => (
          <Card key={index} className="mt-6 justify-between xl:w-96">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {option.name}
              </Typography>
              <Typography>
                {option.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button className="bg-light-blue-700">Check Premium</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default InsuranceTypes;
