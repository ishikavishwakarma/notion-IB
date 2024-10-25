import React from "react";
import { Input, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGlobe, FaInstagram, FaTwitter } from "react-icons/fa";

const LINKS = [
  {
    title: "Licence",
    items: [
      { text: "Licence No. 619", url: "/" },
      { text: "IRDA Direct Broker Code: IRDA/ DB 693/17", url: "/" },
      { text: "Valid till: 02/10/2026", url: "/" },
      { text: "CIN: U66010MP2016PTC041677", url: "/" },
    ],
  },
  
  {
    title: "Our Links",
    items: [
      { text: "Home", url: "/" },
      // { text: "Insurance", url: "/" },
      { text: "About Us", url: "/about-us" },
      { text: "Our Partners", url: "/our-partners" },
      { text: "Contact Us", url: "/contact" },
    ],
  }, 
  
  {
    title: "Legal and Admin Policies",
    items: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms & Conditions", url: "/terms-conditions" },
      { text: "FAQ's", url: "/frequently-ask-question" },
      
      { text: "Career", url: "/" },
    ],
  },
 
 
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="mt-1 relative footer-img w-full  bg-cover bg-center pt-3">
      <div className="w-full ">
        <div className="flex justify-center flex-col lg:flex-row gap-6 items-center px-2 lg:px-4">
          <Typography className="md:w-60 my-6 px-3 justify-center items-center flex flex-col ">
            <img loading="lazy" src="assets/images/header/logo.webp" className="h-full w-full" alt="NIB" />
            <p className="text-black font-medium text-xs  mb-2">
            Notion Insurance Broker Pvt. Ltd. delivers customized insurance solutions designed to meet the diverse needs of businesses and individuals. 
            </p>
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full  lg:w-[80%] md:justify-center lg:grid-cols-4 gap-4 px-4  lg:justify-center ">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  className="mb-3  max-w-max text-black opacity-90"
                >
                  {title}
                </Typography>
                {items.map(({ text, url }) => (
                  
                  <li key={text}>
                    {/* <div className="div flex justify-center items-center"> */}
                    <Typography
                      as="a"
                      // href={url}
                      className="py-1.5 text-xs  transition-colors font-medium text-gray-900 hover:text-blue-gray-900"
                    >
                      <Link to={url}> {text} </Link>
                    </Typography>
                    {/* </div> */}
                  </li>
                ))}
              </ul>
            ))}
            <div className=" text-left ">
              <Typography
                variant="h6"
                className="mb-3 max-w-max text-black opacity-90"
              >
                Get In Touch
              </Typography>
              {/* <p className="text-black text-xs leading-6 mb-2">
            If you have any questions, feel free to reach out to us at any time.
            </p> */}
              {/* <div>
                <p className="mb-2 text-sm text-gray-800 flex items-center justify-start">
                  <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </span>
                  <h5 className="font-bold">Emails</h5>
                  
                </p>
                <ul className="list-none mb-3 mt-2">
                  <li>
                    <a
                      href="mailto:contactus@notioninsurance.com"
                      className="text-gray-900 text-sm hover:gray-800"
                    >
                      contactus@notioninsurance.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:pospsupport@notioninsurance.com"
                      className="text-gray-900 text-sm hover:gray-800"
                    >
                      pospsupport@notioninsurance.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:info@notioninsurance.com"
                      className="text-gray-900 text-sm hover:gray-800"
                    >
                      info@notioninsurance.com
                    </a>
                  </li>
                </ul>
                <p className="mb-2 mt-2 text-sm text-gray-800 flex items-center justify-start">
                  <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <h5 className="font-bold">Mobile No</h5>
                </p>
                <ul className="list-none mt-1">
                  <li>
                    <a
                      href="tel:0755-4911343"
                      className="text-gray-900 text-sm hover:gray-800"
                    >
                      0755-4911343
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:9302182475"
                      className="text-gray-900 text-sm hover:gray-800"
                    >
                      91-9302182475
                    </a>
                  </li>
                </ul>
              </div> */}
             <div className="flex py-2 gap-3 text-blue-gray-900 ">
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <FaFacebook className="text-xl" />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
               <FaInstagram className="text-xl" />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
              <FaTwitter className="text-xl" />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
               <FaGithub  className="text-xl" />
              </Typography>
              <Typography
                as="a"
                href="#"
                className="opacity-80 transition-opacity hover:opacity-100"
              >
               <FaGlobe  className="text-xl" />
              </Typography>
            </div>
            </div>
          </div>
        </div>

        <div className=" flex items-center justify-center w-full border-t bg-gray-700 py-2 ">
          <Typography
            variant="small"
            className=" text-center font-normal text-blue-gray-100 md:mb-0"
          >
            &copy; {currentYear} <a href="/"> Notion Insurance Broker</a>. All
            Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
