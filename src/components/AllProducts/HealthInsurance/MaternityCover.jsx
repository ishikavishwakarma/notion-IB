import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import InsuranceCard from "../GeneralInsurance/RelativeComponents/InsuranceCard";
import { Helmet } from "react-helmet";
const MaternityCover = () => {
  const insuranceOptions = [
    {
      logo: "/assets/images/company/icicibank.jpg", // Replace with actual image URLs
      insurerName: "Maternity Cover Plan",
      price: "-",
      keyFeatures: ["No Inspection Needed", "Immediate Policy Issurance"],
      link: "/",
    },
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Maternity Cover Plan - NIB</title>
        <meta
          name="description"
          content="Protect your marine assets with comprehensive marine insurance from Notion Insurance Broker Pvt. Ltd. Our policies cover cargo, hull, and liability, ensuring your shipping and logistics operations are secure against risks at sea."
        />
        <meta
          name="keywords"
          content="marine insurance, NIB marine insurance, Notion Insurance Broker marine insurance, cargo insurance, hull insurance, marine liability insurance, shipping insurance, logistics insurance, maritime coverage, marine risk management"
        />
      </Helmet>

      <div>
        <Card className="mt-6 shadow-none md:px-10 bg-white container w-full lg:w-[90%] xl:w-[90%] flex flex-col justify-center">
          <CardBody className="px-1">
            <Typography variant="h4" color="blue-gray" className="mb-2 ">
              Top Maternity Cover Plans
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
                  A Guide to Maternity Cover Plan
                </Typography>
                <Typography className="md:px-5 text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  The Maternity Cover Plan is designed to provide comprehensive
                  financial support to expectant parents, covering the costs
                  related to pregnancy, childbirth, and newborn care. This plan
                  is essential for couples planning to start or expand their
                  families, as it alleviates the financial burden of medical
                  expenses during this critical period.
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
              Key Features of Maternity Cover Plan
            </Typography>
            <Typography className="md:px-20 text-center">
              Maternity Cover includes both pre and post-natal care, child
              delivery (normal or caesarean), which sometimes includes
              vaccination of newborn babies. This insurance covers the newborn
              baby up to the validity of this policy. It also covers
              transportation fee for ferrying the mom-to-be to the nearest
              network hospital of choice.
            </Typography>
            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        All-Inclusive Coverage :{" "}
                      </span>
                      Covers a wide range of expenses, including prenatal
                      consultations, delivery charges, and postnatal check-ups,
                      ensuring comprehensive support throughout the maternity
                      journey.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Cashless Hospitalization :{" "}
                      </span>
                      The plan offers access to a network of hospitals where
                      policyholders can receive cashless treatment, making the
                      process smoother and less stressful.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">Newborn Coverage : </span>
                      Automatically includes coverage for the newborn from day
                      one, addressing their healthcare needs immediately after
                      birth.
                    </Typography>
                  </li>
                </ul>
              </CardBody>
            </Card>

            <Card className="mt-6 md:px-10 w-full md:hover:scale-105 duration-300 border">
              <CardBody>
                <ul className="list-disc text-justify hyphens-auto  leading-relaxed adjusted-spacing text-md">
                  <li>
                    <Typography>
                      <span className="font-bold">
                        Preventive Care Benefits :{" "}
                      </span>
                      Encourages routine check-ups and screenings during
                      pregnancy, promoting the health of both mother and baby.
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

export default MaternityCover;
