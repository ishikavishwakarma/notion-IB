import React from "react";
import TableComponent from "../GeneralInsurance/RelativeComponents/TableComponent";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";
import { Helmet } from "react-helmet";

const ChildInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Child Insurance",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      //   link:'https://www.ilgi.co/D2DBB68FAE'
    },
  ];
  return (
    <>
     <Helmet>
  <meta charSet="utf-8" />
  <title>Child Insurance - NIB</title>
  <meta
    name="description"
    content="Get affordable term insurance from Notion Insurance Broker Pvt. Ltd. Our policies offer financial protection for your loved ones in case of unforeseen events, ensuring peace of mind at an economical price."
  />
  <meta
    name="keywords"
    content="term insurance, NIB term insurance, Notion Insurance Broker term insurance, life coverage, financial protection, affordable insurance, insurance plans, temporary life insurance, risk management, family security"
  />
</Helmet>
      <div>
        <Card className="mt-6 shadow-none md:px-10 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Child Insurance Plans
            </Typography>

            <div className="mt-4 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
              {insuranceOptions.map((option, index) => (
                <InsuranceCard key={index} {...option} />
              ))}
            </div>
            <br />
            <Card className="mt-6 w-full text-center md:hover:scale-105 duration-300 border">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  A Guide to Child Insurance
                </Typography>
                <Typography className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md md:px-2">
                  Child Education Insurance Plans are insurance plans that take
                  care of your Protection and Saving needs for securing the
                  future of your children. In case of death of policyholder in a
                  stipulated period of time, the insurance company also waives
                  the future premium payments* for the remaining policy term to
                  ensure that your children&apos;s future is always secure.
                  There are several Insurance Companies offering various plans
                  to secure the need of Child Education and Future Life. It can
                  also be used as collateral for an education loan.
                  <br />
                  Child plan is a mixture of investment and insurance that
                  usually aids in financial planning for Childs’ future needs
                  and requirements.
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ChildInsurance;
