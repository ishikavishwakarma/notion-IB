import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  TabPanel,
  CardHeader,
} from "@material-tailwind/react";
import Header from '../Header'
function InsuranceCard({ logo, insurerName, price, keyFeatures }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center">

        <img src={logo} alt={insurerName} className="h-10 w-20 mr-4" />
      <div className="flex items-center justify-center">
        <h3 className="text-lg font-semibold">{insurerName}</h3>
      </div>
      </div>
      <div className="mt-4 w-full items-center flex flex-col justify-center">
        <p className="text-gray-500">STARTING FROM</p>
        <p className="text-2xl font-bold">₹ {price}</p>
      </div>
      <div className="w-full items-center flex  justify-center">

      <button className="bg-red-500 w-[60%] hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-4">
        Check Premium
      </button>
      </div>
      </div>
      <div className="mt-4 flex gap-10">
        <h4 className="text-sm font-semibold">Key Features:</h4>
        <ul className="list-disc grid grid-cols-2 list-inside text-gray-600">
          {keyFeatures.map((feature, index) => (
            <div key={index}>
              <span className="text-green-500 mr-1">✓</span> {feature}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CarInsurance = () => {
  const insuranceOptions = [
    {
      logo: '../../assets/images/Products/new-india.jpg', // Replace with actual image URLs
      insurerName: 'New India Bike Insurance',
      price: '714',
      keyFeatures: ['No Inspection Needed', 'Immediate Policy Issurance'],
    },
    {
      logo: '../../assets/images/Products/new-india.jpg', // Replace with actual image URLs
      insurerName: 'New India Bike Insurance',
      price: '714',
      keyFeatures: ['No Inspection Needed', 'Immediate Policy Issurance'],
    },
    {
      logo: '../../assets/images/Products/new-india.jpg', // Replace with actual image URLs
      insurerName: 'New India Bike Insurance',
      price: '714',
      keyFeatures: ['No Inspection Needed', 'Immediate Policy Issurance'],
    },
   
    // Add more insurance options as needed
  ];
  return (
    <div>
     
      <Card className="mt-6 bg-white w-full">
      
      
      <CardBody>
      <div className="container flex flex-col justify-center  p-">
      <Typography variant="h4" color="blue-gray" className="mb-2 ">
        Top Bike Insurance Plans
      </Typography>
      
      <div className="mt-4 grid w-full   grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
        {insuranceOptions.map((option, index) => (
          <InsuranceCard key={index} {...option} />
        ))}
      </div>
      <Typography variant="h4" color="blue-gray" className="mb-2 pt-8 w-full text-center">
      What Is Bike Insurance?
      <Typography color="gray" className="mb-10 text-center pt-2 px-20 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
      </Typography>
      <Card className="w-full flex-row">
     
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        
        <Typography variant="h4" color="blue-gray" className="mb-2">
          Lyft launching cross-platform service this week
        </Typography>
        <Typography color="gray" className="mb-8 font-normal">
          Like so many organizations these days, Autodesk is a company in
          transition. It was until recently a traditional boxed software company
          selling licenses. Yet its own business model disruption is only part
          of the story
        </Typography>
        <a href="#" className="inline-block">
          <Button variant="text" className="flex items-center gap-2">
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardBody>
    </Card>
    </div>
      </CardBody>
    </Card>
    
      </div>
  )
}

export default CarInsurance
