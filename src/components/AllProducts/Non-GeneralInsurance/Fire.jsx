import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import InsuranceCard from '../GeneralInsurance/RelativeComponents/InsuranceCard'
import { Helmet } from 'react-helmet'
const Fire = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Fire & Burglary Insurance",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      
    },
  ];
  return (
    <>
    <Helmet>
  
  <title>Fire Insurance - NIB</title>
  <meta
    name="description"
    content="Safeguard your property with comprehensive fire insurance from Notion Insurance Broker Pvt. Ltd. Our policies provide coverage for damages caused by fire, ensuring financial security and peace of mind for homeowners and businesses alike."
  />
  <meta
    name="keywords"
    content="fire insurance, NIB fire insurance, Notion Insurance Broker fire insurance, property insurance, fire damage coverage, business fire insurance, home fire insurance, fire protection, financial security, insurance for fire risks"
  />
</Helmet>

    <div>
      <Card className="mt-6 shadow-none md:px-10  bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
        <CardBody className="px-1">
          <Typography variant="h4" color="blue-gray" className="mb-2 ">
            Top Fire Insurance Plans
          </Typography>

          <div className="mt-4 grid w-full   grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {insuranceOptions.map((option, index) => (
              <InsuranceCard key={index} {...option} />
            ))}
          </div>
          <br />
            <Card className="mt-6 w-full text-center  md:hover:scale-105 duration-300">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Fire & Burglary Insurance
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                Fire insurance covers damage or loss to a property because of fire. It is a specific form of insurance in addition to homeowner’s or property insurance, and it covers the cost of replacement and repair or reconstruction above what the property insurance policy covers. Fire insurance policies cover damage to the property, and may also cover damage to nearby structures, personal property and costs because of not having the capacity to live in or use the property if damages occur.

The policy typically includes additional coverage against smoke or water damage due to a fire. A fire insurance policy is usually set up for one year. The policyholder may renew the policy according to the terms of the policy.
                </Typography>
              </CardBody>
            </Card>
           
            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300">
                <Typography variant="h5" color="blue-gray" className="mb-2 mt-10 text-center">
                Important Characteristics of Fire Insurance Coverage
                </Typography>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                   <span className="font-bold mr-1">Comprehensive Fire Damage Protection : </span>Covers damages caused by accidental fires to insured property.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                   <span className="font-bold mr-1">Flexibility in Customizing Coverage : </span>Allows tailored coverage options to meet individual risk and needs.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                   <span className="font-bold mr-1">Protection Against Allied Perils : </span>Includes coverage for explosions, lightning, and firefighting water damage.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                   <span className="font-bold mr-1">Loss of Profits Compensation : </span>Compensates businesses for income loss during fire-related disruptions.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                   <span className="font-bold mr-1">Coverage for Firefighting Expenses : </span>Covers expenses for hiring firefighters and fire-extinguishing equipment.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>
           
        </CardBody>
      </Card>
    </div>
  </>
  )
}

export default Fire