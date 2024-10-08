import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";

const WorkerCompensationInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Worker's Compensation Insurance Insurance ",
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
              Top Worker&apos;s Compensation Insurance Plans
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
                  A Guide to Worker&apos;s Compensation Insurance
                </Typography>
                <Typography className="md:px-5">
                  Worker&apos;s Compensation Insurance provides financial
                  benefits to employees who suffer work-related injuries or
                  illnesses.
                  <br />
                  Worker&apos;s Compensation Insurance delivers crucial financial
                  support to employees who sustain injuries or illnesses as a
                  result of their work. This insurance ensures that affected
                  employees receive necessary medical treatment and compensation
                  for lost wages, allowing them to focus on recovery without the
                  added stress of financial burden.
                </Typography>
              </CardBody>
            </Card>
            <br />
            <br />
            <div className="grid lg:grid-cols-2 gap-3">
            <Card className="mt-6 max-w-[600px] mx-auto px-3 md:px-10 py-3 w-full  ">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 "
            >
             Core Attributes of Worker&apos;s Compensation Insurance
            </Typography>
            <Typography className="font-medium pb-3">
            Understanding the Essential Components of Employee Protection
            </Typography>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Medical Expense Coverage:
                      </span>
                      Covers medical costs for work-related injuries or illnesses.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Lost Wages Coverage: 
                      </span>
                      Provides compensation for employees who cannot work due to their injuries.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Rehabilitation Coverage: 
                      </span>
                      Supports rehabilitation services to help employees recover and return to work.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Death Benefits: 
                      </span>
                      Offers financial compensation to beneficiaries in the event of an employee&apos;s work-related death.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Disability Benefits:
                      </span>
                      Provides income support for employees who become disabled due to work-related incidents.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
             
            </Card>
            <Card className="mt-6 max-w-[600px] mx-auto px-3 md:px-10 py-3 w-full ">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 "
            >
                Advantages of Having Worker&apos;s Compensation Insurance
            </Typography>
            <Typography className="pb-3 font-medium">
            Exploring the Benefits for Employees and Employers
            </Typography>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Financial Support for Injured Employees:
                      </span>
                      Ensures injured workers receive necessary financial assistance during recovery.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Protection for Employers from Lawsuits:  
                      </span>
                      Shields employers from legal actions related to workplace injuries.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Compliance with Regulatory Requirements: 
                      </span>
                      Helps businesses meet legal obligations regarding employee safety and compensation.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Reduced Workplace Injuries and Illnesses: 
                      </span>
                      Encourages a safer work environment, lowering the incidence of injuries.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
              <CardBody className="py-1">
                <ul className="list-disc ">
                  <li>
                    <Typography>
                      <span className="font-bold">
                      Enhanced Employee Morale and Retention:
                      </span>
                      Improves employee satisfaction and loyalty by demonstrating care for their well-being.
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

export default WorkerCompensationInsurance;
