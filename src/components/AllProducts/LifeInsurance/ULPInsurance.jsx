import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";
import { Helmet } from "react-helmet";

const ULPInsurance = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Unit Linked Insurance",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      //   link:'https://www.ilgi.co/D2DBB68FAE'
    },
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ULIP Insurance - NIB</title>
        <meta
          name="description"
          content="Explore flexible ULIP insurance plans from Notion Insurance Broker Pvt. Ltd. Our policies combine life coverage with investment options, providing financial security for your loved ones while helping you grow your wealth."
        />
        <meta
          name="keywords"
          content="ULIP insurance, NIB ULIP insurance, Notion Insurance Broker ULIP, unit linked insurance plans, investment insurance, life coverage, financial protection, wealth creation, dual benefit insurance, secure future"
        />
      </Helmet>
      <div>
        <Card className="mt-6 shadow-none md:px-10 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Unit Linked Insurance Plans
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
                  A Guide to Unit Linked Insurance
                </Typography>
                <Typography className="text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md md:px-2">
                  A ULIP (Unit Linked Insurance Plan) is a type of insurance
                  policy that provides both life insurance coverage and
                  investment opportunities. With a ULIP, part of the premium you
                  pay goes towards life insurance, while the other part is
                  invested in various funds, such as bond, debt, or equity
                  funds. It&apos;s important to note that the investment
                  component is subject to market risks, meaning the value of
                  your investment can fluctuate based on market conditions.
                  <br />
                </Typography>
              </CardBody>
            </Card>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default ULPInsurance;
