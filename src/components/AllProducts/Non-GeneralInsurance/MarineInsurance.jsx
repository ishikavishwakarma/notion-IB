import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";

const MarineInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Marine Insurance ",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      link: "/",
    },
  ];

  // const [showAll, setShowAll] = useState(false);
  // const displayedOptions = showAll ? insuranceOptions : insuranceOptions.slice(0, 3);

  return (
    <>
      <div>
        <Card className="mt-6 shadow-none px-3 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Marine Insurance Plans
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
                  A Guide to Marine Insurance
                </Typography>
                <Typography className="px-5">
                  Marine insurance provides coverage for the loss or damage of
                  ships, cargo, terminals, and any transport by which goods are
                  transferred between points of origin and destination. It
                  safeguards businesses involved in shipping against financial
                  losses due to unforeseen events such as accidents, piracy,
                  natural disasters, or damage during transit.
                  <br />
                  By securing a marine insurance policy, companies can protect
                  their investments and ensure smooth operations, knowing that
                  any potential risks to their shipments are covered. This type
                  of insurance is crucial for mitigating the financial impact of
                  uncertainties in the shipping industry.
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default MarineInsurance;
