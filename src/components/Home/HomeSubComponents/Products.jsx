import { useEffect, useState } from "react";

import LinkButtons from "../../insuranceModel/LinkButtons";
import {  Typography } from "@material-tailwind/react";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required Swiper modules
import { Autoplay, Pagination } from 'swiper/modules';
const items = [
  {
    text: "Life",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/life-balance2.jpg",
    link: "/term-insurance",
  },
  {
    text: "Health",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/heartbeat 2.jpg",
    link: "/individual-health-insurance",
  },
  {
    text: "Investment Plans",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/advance.jpg",
    link: "/investment-plans",
  },
  {
    text: "Child",
    subtext: "Savings Plans",
    imgSrc: "/assets/images/Products/piggy-bank.jpg",
    link: "/child-insurance",
  },
  {
    text: "Money Back Plan",
    subtext: "life Plan",
    imgSrc: "/assets/images/Products/freeterm.svg",
    link: "/money-back-policy",
  },
  {
    text: "Employee Health",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/employee.avif",
    link: "/employee-group-health-insurance",
  },
  {
    text: "Travel",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/airplane.jpg",
    link: "/travel-insurance",
  },
  {
    text: "Fire & Burglary",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/burning-building.avif",
    link: "/fire-insurance",
  },
  {
    text: "Home",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/home.jpg",
    link: "/home-insurance",
  },

  {
    text: "Marine",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/marine.jpg",
    link: "/marine-insurance",
  },
  {
    text: "Taxi",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/general/taxi.webp",
    link: "/taxi-insurance",
  },
  {
    text: "Shop Owner",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/seller.avif",
    link: "/shop-insurance",
  },
  {
    text: "Worker",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/worker.avif",
    link: "/workers-insurance",
  },
  {
    text: "General Liability",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/general-liability.jpg",
    link: "/general-liability-insurance",
  },
  {
    text: "Cyber",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/computer.avif",
    link: "/cyber-insurance",
  },
  {
    text: "Contractor and Machinery",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/contractor.jpg",
    link: "/contractor-plant-machinery-insurance",
  },
  {
    text: "Professional Indemnity",
    subtext: "For Doctors",
    imgSrc: "/assets/images/Products/non-general/medical.avif",
    link: "/professional-indemnity-doctors-insurance",
  },
  {
    text: "Professional Indemnity",
    subtext: "For Companies",
    imgSrc: "/assets/images/Products/non-general/company.avif",
    link: "//professional-indemnity-companies-insurance",
  },
  {
    text: "Contractor All Risk",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/risk.avif",
    link: "/contractor-risk-insurance",
  },
  {
    text: "Directors & Officers",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/boss.avif",
    link: "/director-officers-insurance",
  },
  {
    text: "Pension",
    subtext: "Life Plan",
    imgSrc: "/assets/images/Products/health/pension.jpg",
    link: "/pension-plan",
  },
  {
    text: "ULIP",
    subtext: "Life Plan",
    imgSrc: "/assets/images/Products/health/ULIP.jpg",
    link: "/ulip-insurance",
  },
  {
    text: "Critical Care",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/critical.jpg",
    link: "/critical-care-plan",
  },
  {
    text: "1CR Health Cover",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/onecr.jpg",
    link: "/one-cr-health-cover",
  },
  {
    text: "Cancer",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/cancer-ribbon.avif",
    link: "/cancer-insurance",
  },
];
const Products = () => {
  const [columns, setColumns] = useState(3); // Default columns
  const [rows, setRows] = useState(2); // Default rows
  const [slides, setSlides] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  // Function to calculate rows and columns based on screen size
  const calculateGrid = () => {
    const width = window.innerWidth;

    if (width >= 1200) {
      // lg: 8 columns, 2 rows
      setColumns(8);
      setRows(2);
    } else if (width >= 1024) {
      // md: 4 columns, 2 rows
      setColumns(7);
      setRows(2);
    } else if (width >= 640) {
      // md: 4 columns, 2 rows
      setColumns(5);
      setRows(2);
    } else {
      // mobile: 3 columns, 2 rows
      setColumns(3);
      setRows(2);
    }
  };

  // Create slides dynamically
  const updateSlides = () => {
    calculateGrid();

    const itemsPerSlide = columns * rows;
    const newSlides = [];
    for (let i = 0; i < items.length; i += itemsPerSlide) {
      newSlides.push(items.slice(i, i + itemsPerSlide));
    }
    setSlides(newSlides);
  };

  useEffect(() => {
    updateSlides();

    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, [columns, rows]);

  return (
    <>
      <Typography
        variant="h3"
        color="blue-gray"
        className="mb-2 pt-5 md:pt-10 md:pb-5 text-center"
      >
        OTHER INSURANCE
      </Typography>
      <hr />
      <div className="flex justify-center items-center xl:px-28 xl:pe-28 lg:px-10 lg:pe-10 w-full pt-2  md:pt-10 pr-[10px] md:pr-0">
      
        <Swiper
         autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        centeredSlides={true}
        slidesPerView={1}
      loop={true} // enable looping
      speed={1600} // transition duration in ms
      pagination={{
        clickable: true,  
      }}
      modules={[Pagination,Autoplay]}
      className="rounded-xl pb-5"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="grid gap-4 p-3"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {slide.map((item, idx) => (
              <LinkButtons
                key={idx}
                text={item.text}
                subtext={item.subtext}
                imgSrc={item.imgSrc}
                link={item.link}
              />
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      </div>
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
  <div className="container mx-auto p-4">
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Account Setup Wizard</h1>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200" id="step1">
                        Personal Info
                    </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 opacity-50" id="step2">
                        Account Details
                    </span>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 opacity-50" id="step3">
                        Preferences
                    </span>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
          <div id="progress-bar"
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 w-1/3 transition-all duration-500 ease-in-out">
          </div>
        </div>
      </div>

      
      <form id="multi-step-form">
    
        <div id="step-1" className="step">
          <div className="mb-6">
            <label for="fullName" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
            <input type="text" id="fullName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required/>
          </div>
          <div className="mb-6">
            <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required/>
          </div>
          <div className="mb-6">
            <label for="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone Number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required/>
          </div>
        </div>

        <div id="step-2" className="step hidden">
          <div className="mb-6">
            <label for="username" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
            <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required/>
          </div>
          <div className="mb-6">
            <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required/>
          </div>
          <div className="mb-6">
            <label for="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
            <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required/>
          </div>
        </div>

        <div id="step-3" className="step hidden">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900">Preferred Contact Method</label>
            <div className="flex items-center mb-4">
              <input id="contact-email" type="radio" name="contact" value="email" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"/>
              <label for="contact-email" className="ml-2 text-sm font-medium text-gray-900">Email</label>
            </div>
            <div className="flex items-center">
              <input id="contact-phone" type="radio" name="contact" value="phone" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 focus:ring-2"/>
              <label for="contact-phone" className="ml-2 text-sm font-medium text-gray-900">Phone</label>
            </div>
          </div>
          <div className="mb-6">
            <label for="interests" className="block mb-2 text-sm font-medium text-gray-900">Interests (select all that apply)</label>
            <select id="interests" multiple className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5">
                            <option value="technology">Technology</option>
                            <option value="finance">Finance</option>
                            <option value="health">Health & Wellness</option>
                            <option value="travel">Travel</option>
                            <option value="food">Food & Cooking</option>
                        </select>
          </div>
          <div className="flex items-center mb-6">
            <input id="newsletter" type="checkbox" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500"/>
            <label for="newsletter" className="ml-2 text-sm font-medium text-gray-900">Subscribe to newsletter</label>
          </div>
        </div>

   
        <div className="flex justify-between mt-8">
          <button type="button" id="prevBtn" className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 focus:outline-none focus:shadow-outline hidden">Previous</button>
          <button type="button" id="nextBtn" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline">Next</button>
          <button type="submit" id="submitBtn" className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none focus:shadow-outline hidden">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  );
};

export default Products;
