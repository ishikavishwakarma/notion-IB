import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";

const TABLE_HEADERS_PAGE_1 = ["Point of Difference", "Individual Insurance"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Fixed Premium Payments:",
    details:
      "Premiums remain unchanged throughout the policy term, offering cost stability regardless of changes in age or health.",
  },
  {
    point: "Fixed Term",
    details:
      "Coverage is provided for a specific period (e.g., 10, 20, or 30 years), with benefits paid if death occurs during this time.",
  },
  {
    point: "Death Benefit Payout:",
    details:
      "If the insured dies within the policy term, the death benefit is paid to beneficiaries, offering financial support.",
  },
  {
    point: "No Cash Value:",
    details:
      "Term insurance doesn't accumulate cash value; it purely provides protection without any investment growth.",
  },
  {
    point: "Renewable/Convertible Options:",
    details:
      "Some policies allow renewal or conversion to permanent life insurance without requiring new medical evaluations.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const TermLifeInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Term Life Insurance ",
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
              Top Term Life Insurance Plans
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
                  A Guide to Term Life Insurance
                </Typography>
                <Typography className="md:px-5">
                  Term Life Insurance provides financial protection for a
                  specified period (term) in exchange for premiums. If the
                  policyholder dies during the term, the insurance company pays
                  a death benefit to beneficiaries.
                 
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
                Advantages of Having Term Life Insurance
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

export default TermLifeInsurance;
