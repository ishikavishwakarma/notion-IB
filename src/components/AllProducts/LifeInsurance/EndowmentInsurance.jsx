import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";

const TABLE_HEADERS_PAGE_1 = ["Point of Difference", "Individual Insurance"];

const TABLE_ROWS_PAGE_1 = [
  {
    point: "Savings Component:",
    details:
      "Accumulates cash value over time, offering a savings option alongside insurance, which can be withdrawn or borrowed against.",
  },
  {
    point: "Insurance Component: ",
    details:
      "Provides financial protection to beneficiaries through a death benefit if the insured passes away during the policy term.",
  },
  {
    point: "Fixed Term:",
    details:
      " Policies come with a set duration (e.g., 10, 15, 20 years), after which the maturity benefit is paid out.",
  },
  {
    point: "Guaranteed Maturity Benefit:",
    details:
      "Ensures a payout at the end of the term, regardless of market conditions, making it a safe investment..",
  },
  {
    point: "Optional Riders: ",
    details:
      "Additional coverage options like accidental death benefit riders offer extra protection based on specific needs.",
  },
];
const COLUMN_WIDTHS = [
  "w-[15vw]", // 40% width for Comprehensive Insurance
  "w-[60vw]", // 40% width for Third-party Insurance
];
const EndowmentInsurance = () => {
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
              Top Endowment Plans
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
                  A Guide to Endowment Plan
                </Typography>
                <Typography className="md:px-5">
                  An Endowment Plan provides dual benefits by combining life
                  insurance coverage with a savings component. It ensures a lump
                  sum payout at maturity or upon the policyholder’s death,
                  offering both financial protection and long-term savings. This
                  makes it an ideal option for securing future financial goals
                  and security.
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
                Advantages of Having Endowment Plan
              </Typography>
              <Card className="mt-6 md:px-10 w-full ">
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Property Damage Coverage (Building, Contents, Equipment)
                      </span>
                      This coverage protects the physical assets of your retail
                      business, including the building, inventory, fixtures, and
                      equipment. It provides financial assistance to repair or
                      replace property damaged by unforeseen events like fire,
                      storms, or vandalism, minimizing potential losses.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Savings Component: 
                      </span>
                      Accumulates cash value over time, offering a savings option alongside insurance, which can be withdrawn or borrowed against.

</Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Theft and Burglary Coverage
                      </span>
                      This coverage provides financial protection in case of theft or burglary of your business assets. It compensates for stolen inventory, damaged property, and any resulting business disruptions, ensuring that you can recover without significant financial setbacks.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Liability Coverage (Customer Injuries, Property Damage)
                      </span>
                      Liability coverage safeguards your business from third-party claims related to customer injuries or property damage occurring on your premises. This feature covers legal fees, medical expenses, and potential compensation, protecting your business from costly lawsuits.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Employee Dishonesty Coverage
                      </span>
                      Employee dishonesty coverage protects your business from losses due to fraudulent activities by employees, such as theft of money, inventory, or misuse of business funds. It helps safeguard your business from internal threats and maintain financial stability.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Cyber Insurance (Data Breach, Online Threats)
                      </span>
                      With increasing digital operations, cyber insurance covers the financial impact of data breaches and online threats. It provides support for legal fees, data restoration, and customer notification in the event of a cyberattack, helping maintain business reputation and data security.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody>
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Workers&apos; Compensation Insurance (Employee Injuries)
                      </span>
                      Workers&apos; compensation insurance covers medical expenses and lost wages for employees injured while working. It ensures your employees receive adequate care and compensation, reducing the risk of legal claims and demonstrating your commitment to employee safety.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default EndowmentInsurance;
