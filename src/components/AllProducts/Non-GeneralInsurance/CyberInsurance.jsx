import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";

const TABLE_HEADERS_PAGE_1 = ["Point of Difference", "Individual Insurance"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Data Breach Coverage",
    details:
      "Covers costs associated with data breaches, including customer notifications, legal fees, and credit monitoring to minimize reputational damage.",
  },
  {
    point: "Cyber-Attack Coverage",
    details:
      "Protects against financial losses from malware and ransomware attacks, covering recovery costs and damage to systems.",
  },
  {
    point: "Network Security Coverage",
    details:
      "Shields businesses from liabilities due to unauthorized access and data theft, addressing legal claims related to security failures.",
  },
  {
    point: "Privacy Liability Coverage",
    details:
      "Covers legal liabilities for unauthorized disclosure of personal data, including legal fees and settlements arising from privacy violations.",
  },
  {
    point: "Business Interruption Coverage",
    details:
      "Compensates for lost income during operational disruptions due to cyber incidents, maintaining financial stability while recovering.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const CyberInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Cyber Insurance ",
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
              Top Cyber Insurance Plans
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
                  A Guide to Cyber Insurance
                </Typography>
                <Typography className="md:px-5">
                  Cyber Insurance, often referred to as Cyber Liability
                  Insurance, is an essential tool for businesses in today's
                  digital landscape. It provides financial protection against
                  the devastating consequences of cyber-attacks, data breaches,
                  and various cyber-related risks that can jeopardize operations
                  and reputation.
                  <br />
                  This type of insurance covers costs associated with data
                  recovery, legal fees, notification expenses, and potential
                  liabilities stemming from compromised customer information. By
                  investing in Cyber Insurance, businesses can mitigate the
                  financial impact of cyber incidents, ensuring they are better
                  equipped to respond to threats while safeguarding their assets
                  and maintaining customer trust in an increasingly
                  interconnected world.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
            <div className="div">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-2 pt-10 w-full text-center"
              >
                Advantages of Having Cyber Insurance
              </Typography>
              <TableComponent
                headers={TABLE_HEADERS_PAGE_1}
                rows={TABLE_ROWS_PAGE_1}
                columnWidths={COLUMN_WIDTHS}
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default CyberInsurance;
