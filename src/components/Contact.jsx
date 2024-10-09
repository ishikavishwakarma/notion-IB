import React from "react";
import { Button, Input, Card, CardHeader, Tooltip, CardFooter, CardBody, Textarea, Typography } from "@material-tailwind/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";


export function Contact() {
  return (

    <>

      <section className="md:px-8 py-8 lg:py-16 w-screen">
        <div className="container px-0 mx-auto text-center  rounded-xl">

          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-5xl"
          >
            We&apos;re Here to Help
          </Typography>

          <Typography className="mb-10 font-normal text-md lg:mb-20 mx-auto md:max-w-3xl">
          Whether you have questions about our services Requesting technical assistance or suggestions for improvement Our team looks forward to hearing from you.
          </Typography>

          <div className="bg-white md:w-3/2 border flex flex-col md:pt-10 overflow-hidden rounded-xl shadow-xl items-center justify-center gap-10">

            <div className="md:flex items-center justify-between md:gap-10 md:px-5 w-full ">

              <Card className=" md:w-[600px] p-0 shadow-none ">

                <CardBody className="flex flex-col items-center gap-3  py-10  border rounded-xl shadow-xl">
                  <Typography variant="h2" color="blue-gray" className="mb-2">
                    Contact Information
                  </Typography>
                  <Typography color="blue-gray" className="font-medium text-sm" textGradient>
                    Fill up the form and our Team will get back to you within 24 hours.
                  </Typography>

                  <CardBody className="md:py-10 p-0">
                    <ul className="flex flex-col items-start p-2  justify-center gap-4 ">
                      <li className="flex items-center gap-4">
                        <span className="text-xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                          <FaPhoneAlt />
                        </span>
                        <Typography className="font-normal text-lg text-gray-900 ">+91 9302182475 <br /> +91 755-4911343</Typography>
                      </li>

                      <li className="flex items-center gap-4">
                        <span className="text-2xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                          <MdEmail />
                        </span>
                        <Typography className="font-normal text-lg text-start text-gray-900">info@notioninsurance.com <br /> pospsupports@notioninsurance.com </Typography>
                      </li>

                      <li className="flex items-center gap-4">
                        <span className="text-2xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                        <IoLocation />
                        </span>
                        <Typography className="font-normal text-md text-gray-900 text-start">3 floor lalwani complex, above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026</Typography>
                      </li>

                    </ul>
                  </CardBody>

                </CardBody>

              </Card>

              <form
                action="#"
                className="flex flex-col gap-4 md:w-3/4  px-2 py-4"
              >
                
                <Typography variant="h2" color="blue-gray" className="py-2 ">
                    Fill  Up The Form 

                  </Typography>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Typography
                      variant="small"
                      className="mb-2 text-left font-medium !text-gray-900"
                    >
                      First Name
                    </Typography>
                    <Input
                      color="gray"
                      size="lg"
                      placeholder="First Name"
                      name="first-name"
                      className="focus:border-t-gray-900"
                      containerProps={{
                        className: "min-w-full",
                      }}
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="mb-2 text-left font-medium !text-gray-900"
                    >
                      Last Name
                    </Typography>
                    <Input
                      color="gray"
                      size="lg"
                      placeholder="Last Name"
                      name="last-name"
                      className="focus:border-t-gray-900"
                      containerProps={{
                        className: "!min-w-full",
                      }}
                      labelProps={{
                        className: "hidden",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Your Email
                  </Typography>
                  <Input
                    color="gray"
                    size="lg"
                    placeholder="name@email.com"
                    name="email"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <div>
                  <Typography
                    variant="small"
                    className="mb-2 text-left font-medium !text-gray-900"
                  >
                    Your Message
                  </Typography>
                  <Textarea
                    rows={6}
                    color="blue"
                    placeholder="Message"
                    name="message"
                    className="focus:border-t-gray-900"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <Button className="bg-blue-800 border-none p-0 w-[150px] h-[38px] ">
                  Send message
                </Button>
              </form>
            </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.1539426375944!2d77.44726371271773!3d23.196702225323936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43747f04ada9%3A0x7e9aa8a8f98f0234!2sNOTION%20INSURANCE%20BROKER%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1727776089315!5m2!1sen!2sin"
                width="100%" height="250" allowfullscreen="" loading="lazy"></iframe>
            </div>
          

        </div>
      </section>
    </>
  );
}

export default Contact;
