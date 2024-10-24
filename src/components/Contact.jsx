import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  CardHeader,
  Tooltip,
  Card,
  Checkbox,
  CardFooter,
  CardBody,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export function Contact() {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const insurerName = queryParams.get("subject");

    if (insurerName && insurerName !== formData.subject) {
      setFormData((prevData) => ({
        ...prevData,
        subject: insurerName,
      }));
    }
    navigate("/contact");
  }, [location.search, navigate]);

  // General handleChange function
  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field based on the name
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Data:", formData); // Log the form data or send it to your API

    // Clear the form if needed
    setFormData({
      fullName: "",
      mobileNo: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  return (
    // am
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us - NIB</title>
        <meta
          name="description"
          content="Get in touch with Notion Insurance Broker Pvt. Ltd. (IRDA Licence No. 619). Contact us for expert insurance services, personalized risk management solutions, and support. Licensed by IRDA as a Direct Broker, our license is valid until 02/10/2026."
        />
        <meta
          name="keywords"
          content="NIB contact, Notion Insurance Broker contact, insurance services, IRDA direct broker, insurance solutions, risk management, insurance experts, contact NIB, insurance broker India, IRDA Licence No. 619, valid till 2026"
        />
        <link rel="canonical" href="https://www.notioninsurance.com/contact" />
      </Helmet>

      <section className="w-full  bg-white">
        <div className=" px-0  text-center   rounded-xl">
          <div className="h-full py-3 bg-[url('/assets/images/contact/contactbg.avif')] w-full bg-cover">
            <Typography
              variant="h2"
              color="blue-gray"
              className="mb-4  pt-8 lg:pt-10 !text-3xl lg:!text-5xl"
            >
              We&apos;re Here to Help
            </Typography>

            <Typography className="mb-8 px-2 font-normal text-md lg:mb-12 mx-auto md:max-w-3xl">
              Whether you have questions about our services Requesting technical
              assistance or suggestions for improvement Our team looks forward
              to hearing from you.
            </Typography>
          </div>

          <div className="container px-2 py-5 mt-10">
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center w-full  gap-5">
              <li className="hover:bg-gray-50 w-full hover:shadow-xl md:hover:scale-105 duration-150 border border-gray-400 rounded-md p-2 px-5">
                <h1 className="text-2xl font-semibold py-2 text-gray-800">For Information Support</h1>
                <span>
                  <li className="grid grid-cols-1 items-center justify-items-center gap-2">
                    <span className="text-xl w-fit text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                      <MdEmail />
                    </span>
                    <span className="font-normal text-md text-start text-gray-900">
                      info@notioninsurance.com
                    </span>
                  </li>
                </span>
              </li>

              <li className="hover:bg-gray-50 w-full hover:shadow-xl md:hover:scale-105 duration-150 border border-gray-400 rounded-md p-2 px-5">
                <h1 className="text-xl font-semibold py-2 text-gray-800">Become A POSP Support</h1>
                <span>
                  <li className="grid grid-cols-1 items-center justify-items-center gap-2">
                    <span className="text-2xl w-fit text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                      <MdEmail />
                    </span>
                    <span className="font-normal text-md text-start text-gray-900">
                      pospsupports@notioninsurance.com
                    </span>
                  </li>
                </span>
              </li>

              <li className="hover:bg-gray-50 w-full hover:shadow-xl md:hover:scale-105 duration-150 border border-gray-400 rounded-md p-2 md:px-5">
                <h1 className="text-xl font-semibold py-2 text-gray-800">For Claim Support</h1>
                <span>
                  <li className="grid grid-cols-1 items-center justify-items-center gap-2">
                    <span className="text-2xl w-fit text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                      <MdEmail />
                    </span>
                    <span className="font-normal text-md text-start text-gray-900">
                      claims@notioninsurance.com
                    </span>
                  </li>
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white container bg lg:w-3/2  flex flex-col lg:pt-8 overflow-hidden  items-center justify-center gap-10">
            <div className="lg:flex items-center justify-between md:gap-10 lg:flex-row flex-col md:px-5 w-full ">
              <div className="div py-2 lg:w-[60vw]">
                <Typography variant="h2" color="blue-gray">
                  Contact Information
                </Typography>
                <p  className="mb-7">At Notion Insurance Broker Pvt Ltd, we understand that choosing the right insurance can be overwhelming.</p>
                <div className="flex lg:flex-row flex-col gap-3">
                 
                  <Card className=" lg:w-1/2 w-full h-94 p-0 shadow-none ">
                    <CardBody className="flex flex-col h-full items-center gap-3  border rounded-xl shadow-xl">

                      <div className="">
                        <CardBody className=" p-0">
                          <Typography variant="h5" color="blue-gray" className="py-3 text-start">
                            Bhopal Branch
                          </Typography>
                          <ul className="flex flex-col  items-start p-2  justify-center gap-2 ">
                            <li className="flex items-center gap-4">
                              <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                                <FaPhoneAlt />
                              </span>
                              <Typography className="font-normal text-lg text-gray-900 ">
                                +91 9302182475 <br /> +91 755-4911343
                              </Typography>
                            </li>

                            <li className="flex items-center gap-4">
                              <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                                <MdEmail />
                              </span>
                              <Typography className="font-normal text-lg text-start text-gray-900">
                                info@notioninsurance.com
                              </Typography>
                            </li>

                            <li className="flex items-center gap-4">
                              <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                                <IoLocation />
                              </span>
                              <Typography className="font-normal text-lg text-gray-900 text-start">
                                3 floor lalwani complex, above Axis Bank, Vidya Nagar,
                                Bhopal, Madhya Pradesh 462026
                              </Typography>
                            </li>
                          </ul>

                        </CardBody>


                      </div>

                    </CardBody>
                  </Card>
                  <Card className=" lg:w-1/2 w-full h-94 p-0 shadow-none ">
                    <CardBody className="flex flex-col h-full items-center gap-3  border rounded-xl shadow-xl">

                      <div className="">
                        <CardBody className=" p-0">
                          <Typography variant="h5" color="blue-gray" className="py-3 ml-3 text-start">
                          Jabalpur Branch
                          </Typography>
                          <ul className="flex flex-col items-start p-2  justify-center gap-2 ">
                            <li className="flex items-center gap-4">
                              <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                                <FaPhoneAlt />
                              </span>
                              <Typography className="font-normal text-lg text-gray-900 ">
                              +91 982722035 
                              </Typography>
                            </li>
                            <li className="flex items-center gap-3">
                              <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                                <MdEmail />
                              </span>
                              <Typography className="font-normal w-[50%] text-lg text-start text-gray-900">
                              mkrathod@notioninsurance.com
                              </Typography>
                            </li>

                            <li className="flex items-center gap-4">
                              <span className="text-xl text-blue-800 border p-2 rounded-full shadow-md bg-gray-50">
                                <IoLocation />
                              </span>
                              <Typography className="font-normal text-lg text-gray-900 text-start">
                              33, JK Complex, 2nd Floor, Gorakhpur, Jabalpur
                              </Typography>
                            </li>
                          </ul>

                        </CardBody>


                      </div>

                    </CardBody>
                  </Card>
                  {/* <Card className=" lg:w-1/2 w-full h-94 p-0 shadow-none ">
                    <CardBody className="flex h-full flex-col items-start gap-3  border rounded-xl shadow-xl">

                      <div className="">
                        <CardBody className=" p-0">
                          <Typography variant="h5" color="blue-gray" className="py-3 text-start">
                            Jabalpur Branch
                          </Typography>
                          <ul className="flex flex-col items-start p-2  justify-center gap-2 ">
                            <li className="flex items-center gap-6">
                              <span className="text-xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                                <FaPhoneAlt />
                              </span>
                              <Typography className="font-normal text-lg text-gray-900 ">
                              +91 982722035

                              </Typography>
                            </li>

                            <li className="flex items-center gap-6">
                              <span className="text-2xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                                <MdEmail />
                              </span>
                              <Typography className="font-normal text-lg text-start text-gray-900">
                              mkrathod@notioninsurance.com

                              </Typography>
                            </li>

                            <li className="flex items-center gap-4">
                              <span className="text-2xl text-blue-800 border p-2.5 rounded-full shadow-md bg-gray-50">
                                <IoLocation />
                              </span>
                              <Typography className="font-normal text-lg text-gray-900 text-start">
                              

                              </Typography>
                            </li>
                          </ul>

                        </CardBody>


                      </div>

                    </CardBody>
                  </Card> */}
                </div>
              </div>

              <form
                onSubmit={handleSubmit} // Attach the submit handler
                className="flex flex-col gap-4 w-full lg:w-[40vw]  px-3 py-4"
              >
                <Typography variant="h2" color="blue-gray" className="py-2">
                  Fill Up The Form
                </Typography>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Typography
                      variant="small"
                      className="mb-2 text-left font-medium !text-gray-900"
                    >
                      Full Name
                    </Typography>
                    <input
                      className="border border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
                      type="text"
                      placeholder="Enter Full Name"
                      name="fullName" // Set name attribute for identification
                      value={formData.fullName} // Bind input value to fullName state
                      onChange={handleChange} // Use the general handleChange function
                    />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="mb-2 text-left font-medium !text-gray-900"
                    >
                      Mobile No
                    </Typography>
                    <input
                      className="border border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
                      type="text"
                      placeholder="Enter Mobile Number"
                      name="mobileNo" // Set name attribute for identification
                      value={formData.mobileNo} // Bind input value to mobileNo state
                      onChange={handleChange} // Use the general handleChange function
                    />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="mb-2 text-left font-medium !text-gray-900"
                    >
                      Your Email
                    </Typography>
                    <input
                      className="border border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
                      type="text"
                      placeholder="Enter Your Email"
                      name="email" // Set name attribute for identification
                      value={formData.email} // Bind input value to email state
                      onChange={handleChange} // Use the general handleChange function
                    />
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      className="mb-2 text-left font-medium !text-gray-900"
                    >
                      Your Subject
                    </Typography>
                    <input
                      className="border border-gray-600 rounded w-full py-2.5 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600"
                      type="text"
                      placeholder="Enter Your Subject"
                      name="subject" // Set name attribute for identification
                      value={formData.subject} // Bind input value to subject state
                      onChange={handleChange} // Use the general handleChange function
                    />
                  </div>
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
                    placeholder="Message....."
                    name="message" // Set name attribute for identification
                    value={formData.message} // Bind textarea value to message state
                    onChange={handleChange} // Use the general handleChange function
                    className="border border-gray-600 rounded w-full py-2.7 px-3 text-gray-900 leading-tight focus:!border-t-gray-900 placeholder-gray-600 custom-placeholder"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                    labelProps={{
                      className: "hidden",
                    }}
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-blue-800 border-none p-0 w-[100%] h-[38px] "
                >
                  Send Message
                </Button>
              </form>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.1539426375944!2d77.44726371271773!3d23.196702225323936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c43747f04ada9%3A0x7e9aa8a8f98f0234!2sNOTION%20INSURANCE%20BROKER%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1727776089315!5m2!1sen!2sin"
              width="100%"
              height="250"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
