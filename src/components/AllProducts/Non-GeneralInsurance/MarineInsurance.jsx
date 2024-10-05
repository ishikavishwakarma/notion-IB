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
                <Typography className="md:px-5">
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
            <br />
            <br />
                <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                  Key Features of Marine Insurance
                </Typography>
                <Typography className="md:px-20 text-center">
                  Marine insurance is essential for businesses involved in
                  shipping and cargo transport, offering a comprehensive range
                  of coverage. Below are four key features that make marine
                  insurance an indispensable part of global trade.
                </Typography>
            <Card className="mt-6 md:px-10 w-full ">
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                   <span className="font-bold">Comprehensive Coverage for Various Risks : </span>Marine insurance provides coverage against a wide array of risks, including loss or damage caused by accidents, natural disasters, piracy, and even theft. It protects ships, cargo, and freight during their journey, ensuring that any unforeseen event does not lead to significant financial losses. 
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card className="mt-6 md:px-10 w-full ">
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                   <span className="font-bold">Types of Coverage Options : </span>Marine insurance offers various types of coverage depending on the needs of the policyholder. The two main types are Hull Insurance, which covers physical damage to the ship or vessel, and Cargo Insurance, which protects the goods being transported.  
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card className="mt-6 md:px-10 w-full ">
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                   <span className="font-bold">Liability Protection : </span>In addition to covering physical loss or damage, marine insurance also includes liability protection. This feature safeguards businesses from third-party claims in case of damages caused to other ships, cargo, or individuals during the voyage.  
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>
            <Card className="mt-6 md:px-10 w-full ">
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                   <span className="font-bold">Customizable Policies for Specific Needs : </span>Marine insurance policies are highly customizable, allowing businesses to adapt coverage to specific routes, cargo types, and transport methods. Whether it's a one-time shipment or regular sea transport operations, insurers offer flexible terms to meet the varied demands of international trade.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default MarineInsurance;
