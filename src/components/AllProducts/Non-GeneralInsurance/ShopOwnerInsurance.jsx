import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";

const ShopOwnerInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Shop Owner Insurance ",
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
              Top Shop Owner Insurance Plans
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
                  A Guide to Shop Owner Insurance
                </Typography>
                <Typography className="md:px-5">
                  Shop Owner Insurance provides financial protection to retail
                  businesses against various risks, ensuring business continuity
                  and minimizing financial losses.
                  <br />
                  Shop Owner Insurance offers comprehensive financial protection
                  to retail businesses by covering various risks that could
                  disrupt operations. It ensures that property damage to the
                  building, contents, and equipment is covered, allowing
                  businesses to repair or replace assets swiftly. In case of
                  unexpected closures, business interruption coverage safeguards
                  against loss of income, helping the business stay afloat.
                  Liability coverage protects against legal claims arising from
                  customer injuries or property damage.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-center"
            >
              Core Benefits of Shop Owner Insurance
            </Typography>
            <Typography className="md:px-20 font-medium text-center">
              Key Features That Protect Retail Businesses from Common Risks and
              Financial Losses
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
                      Business Interruption Coverage (Loss of Income)
                      </span>
                      Business interruption coverage compensates for lost income if your business is temporarily unable to operate due to a covered peril, such as a fire or natural disaster. It helps cover ongoing expenses like rent and employee salaries, ensuring business continuity during the downtime.
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
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ShopOwnerInsurance;
