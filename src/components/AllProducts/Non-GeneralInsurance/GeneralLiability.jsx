import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";

const GeneralLiability = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "General Liability Insurance ",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      link: "/",
    },
  ];
  return (
    <>
      <div>
        <Card className="mt-6 shadow-none px-3 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top General Liability Insurance Plans
            </Typography>

            <div className="mt-4 grid w-full px-6   grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {insuranceOptions.map((option, index) => (
                <InsuranceCard key={index} {...option} />
              ))}
            </div>
            <br />
            <Card className="mt-6 w-full md:text-center">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to General Liability Insurance
                </Typography>
                <Typography className="md:px-5">
                  General Liability Insurance serves as a vital safeguard for
                  businesses by providing financial protection against various
                  unforeseen incidents. This insurance covers expenses arising
                  from accidents, injuries, or property damage that may occur on
                  the business premises or as a result of business operations.
                  By mitigating potential financial losses, it allows businesses
                  to operate with greater peace of mind, ensuring they are
                  prepared for unexpected legal claims.
                  <br />
                  This coverage is essential for maintaining a positive
                  reputation and financial stability, ultimately enabling
                  businesses to focus on growth and success without the constant
                  worry of liability risks.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default GeneralLiability;
