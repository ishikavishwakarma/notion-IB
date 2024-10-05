import { Card, CardBody, Typography } from '@material-tailwind/react'
import React from 'react'
import InsuranceCard from '../GeneralInsurance/RelativeComponents/InsuranceCard'

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
    <div>
      <Card className="mt-6 shadow-none px-3 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
        <CardBody className="px-1">
          <Typography variant="h4" color="blue-gray" className="mb-2 ">
            Top Fire Insurance Plans
          </Typography>

          <div className="mt-4 grid w-full px-6   grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
            {insuranceOptions.map((option, index) => (
              <InsuranceCard key={index} {...option} />
            ))}
          </div>
          <br />
            <Card className="mt-6 w-full text-center">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Fire & Burglary Insurance
                </Typography>
                <Typography className="md:px-5">
                Fire insurance covers damage or loss to a property because of fire. It is a specific form of insurance in addition to homeowner’s or property insurance, and it covers the cost of replacement and repair or reconstruction above what the property insurance policy covers. Fire insurance policies cover damage to the property, and may also cover damage to nearby structures, personal property and costs because of not having the capacity to live in or use the property if damages occur.

The policy typically includes additional coverage against smoke or water damage due to a fire. A fire insurance policy is usually set up for one year. The policyholder may renew the policy according to the terms of the policy.
                </Typography>
              </CardBody>
            </Card>
           
            <Card className="mt-6 md:px-10 w-full ">
                <Typography variant="h5" color="blue-gray" className="mb-2 mt-10 text-center">
                Important Characteristics of Fire Insurance Coverage
                </Typography>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                   <span className="font-bold">Comprehensive Fire Damage Protection : </span>Covers damages caused by accidental fires to insured property.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                   <span className="font-bold">Flexibility in Customizing Coverage : </span>Allows tailored coverage options to meet individual risk and needs.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                   <span className="font-bold">Protection Against Allied Perils : </span>Includes coverage for explosions, lightning, and firefighting water damage.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                   <span className="font-bold">Loss of Profits Compensation : </span>Compensates businesses for income loss during fire-related disruptions.
                    </Typography>
                  </li>
                  <li>
                    <Typography>
                   <span className="font-bold">Coverage for Firefighting Expenses : </span>Covers expenses for hiring firefighters and fire-extinguishing equipment.
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