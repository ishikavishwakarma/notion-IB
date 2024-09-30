import React from "react";
import { Button, Input, Card, CardHeader, Tooltip, CardFooter, CardBody, Textarea, Typography } from "@material-tailwind/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";


export function Contact() {
  return (

    <>


      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 !text-base lg:!text-2xl"
          >
            Customer Care
          </Typography>

          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-5xl"
          >
            We&apos;re Here to Help
          </Typography>

          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>

          <div className="w-3/2 border flex flex-col pt-10 overflow-hidden rounded-xl shadow-xl items-center justify-center gap-10">

            <div className="flex items-center justify-between gap-20 px-5">
              <Card className="w-1/2 shadow-none location">

                <CardBody className="flex flex-col items-center gap-2 ">
                  <Typography variant="h2" color="blue-gray" className="mb-2">
                    Contact Information
                  </Typography>
                  <Typography color="blue-gray" className="font-medium" textGradient>
                    Fill up the form and our Team will get back to you within 24 hours.
                  </Typography>

                  <CardBody className="py-10">
                    <ul className="flex flex-col items-center px-2 justify-center gap-4 ">
                      <li className="flex flex-col items-center gap-2">
                        <span className="text-xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                          <FaPhoneAlt />
                        </span>
                        <Typography className="font-normal text-xl ">+91 11005540121</Typography>
                      </li>

                      <li className="flex flex-col items-center gap-2">
                        <span className="text-2xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                          <MdEmail />
                        </span>
                        <Typography className="font-normal text-xl ">nib@notion.ac.in</Typography>
                      </li>

                      <li className="flex flex-col items-center gap-2">
                        <span className="text-2xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                        <IoLocation />
                        </span>
                        <Typography className="font-normal text-xl">3 floor lalwani complex, above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026</Typography>
                      </li>

                    </ul>
                  </CardBody>

                </CardBody>

              </Card>

              <form
                action="#"
                className="flex flex-col gap-5 w-3/4 "
              >

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
                <Button className="w-full bg-blue-800 border-none">
                  Send message
                </Button>
              </form>
            </div>

              <iframe
                src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=England, UK&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%" height="250" allowfullscreen="" loading="lazy"></iframe>
            </div>
          

        </div>
      </section>
    </>
  );
}

export default Contact;
