import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import ModalBox from "../../insuranceModel/ModalBox";
import { Link } from "react-router-dom";
const AllProduct = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-items-center container">
      <Card className="lg:mt-6  mt-2 border">
        <CardBody className="py-2 md:py-6 px-1 ">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-center"
          >
            Motor Insurance
          </Typography>
          <div className="grid grid-cols-3 pt-2 max-sm:gap-1 items-start gap-2 justify-center ">
            <ModalBox
              className="border-r-4"
              text="Car Insurance"
              imgSrc="/assets/images/Products/jeep2.avif"
              link="/car-insurance"
            />

            <ModalBox
              text="2 Wheeler Insurance"
              imgSrc="assets/images/Products/bike.avif"
              link="/two-wheeler-insurance"
            />

            <Link to="/commercial-vehicle" className="no-underline">
              <Card className="lg:w-24 transition-transform duration-300 ease-in-out transform hover:-translate-y-3 xl:w-28 px-1 h-24 rounded-none  shadow-none  flex flex-col justify-center">
                {/* <CardHeader floated={false} className="h-20"> */}
                <div className="w-full flex justify-center align-middle">
                  <img
                    src="assets/images/Products/general/ads.webp"
                    className="h-10 w-10 justify-center"
                    alt="Commercial Vehicle"
                  />
                </div>
                {/* </CardHeader> */}
                <CardBody className="text-center py-1 p-0">
                  <Typography
                    variant="p"
                    className="font-normal text-sm"
                    color="blue-gray"
                  >
                    Commercial Vehicle
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          </div>
        </CardBody>
      </Card>
      <Card className="mt-6 border w-full md:w-fit">
        <CardBody className="py-2 md:py-6 ">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-center"
          >
            Life Insurance
          </Typography>
          <div className="grid grid-cols-2 pt-2 max-sm:gap-1 items-start gap-2  justify-between lg:gap-3">
            <ModalBox
              text="Term Insurance"
              imgSrc="/assets/images/hero/termlife.avif"
              link="/term-insurance"
            />
              <Link to="/endowment-insurance" className="no-underline">
              <Card className="lg:w-24 transition-transform duration-300 ease-in-out transform hover:-translate-y-3 xl:w-28 px-1 h-24 rounded-none  shadow-none  flex flex-col justify-center">
                {/* <CardHeader floated={false} className="h-20"> */}
                <div className="w-full flex justify-center align-middle">
                  <img
                    src="/assets/images/hero/endowment.avif"
                    className="h-10 w-10 justify-center"
                    alt="Endowment Plan"
                  />
                </div>
                {/* </CardHeader> */}
                <CardBody className="text-center py-1 p-0">
                  <Typography
                    variant="p"
                    className="font-normal text-sm"
                    color="blue-gray"
                  >
                    Endowment Plan
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          </div>
        </CardBody>
      </Card>
      <Card className="mt-6 border ">
        <CardBody className="py-2 md:py-6 px-1">
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 text-center"
          >
            Health Insurance
          </Typography>
          <div className="grid grid-cols-3 lg:pt-2 max-sm:gap-1 items-start  justify-between gap-2 lg:gap-10 xl:gap-5">
            <ModalBox
              text="Individual Health Insurance"
              imgSrc="/assets/images/hero/wholelife.avif"
              link="/individual-health-insurance"
            />

            <ModalBox
              text="Family Health Insurance"
              imgSrc="/assets/images/Products/family2.avif"
              link="/family-health-insurance"
            />
             <Link to="/senior-citizen-plan" className="no-underline">
              <Card className="lg:w-24 transition-transform duration-300 ease-in-out transform hover:-translate-y-3 xl:w-28 px-1 h-24 rounded-none  shadow-none  flex flex-col justify-center">
                {/* <CardHeader floated={false} className="h-20"> */}
                <div className="w-full flex justify-center align-middle">
                  <img
                    src="/assets/images/hero/seniorcitizen.avif"
                    className="h-10 w-10 justify-center"
                    alt="Senior Citizen Plan"
                  />
                </div>
                {/* </CardHeader> */}
                <CardBody className="text-center py-1 p-0">
                  <Typography
                    variant="p"
                    className="font-normal text-sm"
                    color="blue-gray"
                  >
                    Senior Citizen Plan
                  </Typography>
                </CardBody>
              </Card>
            </Link>
          </div>
        </CardBody>
      </Card>
      <hr />
    </div>
  );
};

export default AllProduct;
