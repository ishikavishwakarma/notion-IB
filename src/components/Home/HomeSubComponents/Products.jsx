import React, { useEffect, useState } from "react";
import { MdVerifiedUser } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import DialogButton from "../../insuranceModel/DialogButton";
import InsuranceModel from "../../insuranceModel/InsuranceModel";
import LinkButtons from "../../insuranceModel/LinkButtons";
import { Carousel, IconButton, Typography } from "@material-tailwind/react";
const items = [
  {
    text: "Life",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/life-balance2.avif",
    link: "/term-insurance",
  },
  {
    text: "Health",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/heartbeat 2.avif",
    link: "/individual-health-insurance",
  },
  {
    text: "Investment Plans",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/advance.avif",
    link: "/investment-plans",
  },
  {
    text:"Child",
            subtext:"Savings Plans",
            imgSrc:"/assets/images/Products/piggy-bank.avif",
            link:"/",
  },
  {
    text:"Money Back Plan",
    subtext:"life Plan",
    imgSrc:"/assets/images/Products/freeterm.svg",
    link:"/"
  },
  {
    text: "Employee Health",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/employee.webp",
    link: "/family-health-insurance",
  },
  {
    text: "Travel",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/airplane.avif",
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
    imgSrc: "/assets/images/Products/home.avif",
    link: "/home-insurance",
  },
 
  {
    text: "Marine",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/marine.gif",
    link: "/marine-insurance",
  },
  {
    text: "Taxi",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/general/taxi.webp",
    link: "/marine-insurance",
  },
  {
    text: "Shop Owner",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/seller.png",
    link: "/home-insurance",
  },
  {
    text: "Worker",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/worker.png",
    link: "/home-insurance",
  },
  {
    text: "General Liability",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/general-liability.gif",
    link: "/home-insurance",
  },
  {
    text: "Cyber",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/computer.png",
    link: "/home-insurance",
  },
  {
    text: "Contractor and Machinery",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/contractor.gif",
    link: "/home-insurance",
  },
  {
    text: "Professional Indemnity",
    subtext: "For Doctors",
    imgSrc: "/assets/images/Products/non-general/medical.png",
    link: "/home-insurance",
  },
  {
    text: "Professional Indemnity",
    subtext: "For Companies",
    imgSrc: "/assets/images/Products/non-general/company.png",
    link: "/home-insurance",
  },
  {
    text: "Contractor All Risk",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/risk.png",
    link: "/home-insurance",
  },
  {
    text: "Directors & Officers",
    subtext: "Insurance",
    imgSrc: "/assets/images/Products/non-general/boss.png",
    link: "/home-insurance",
  },
  {
    text: "Pension",
    subtext: "Life Plan",
    imgSrc: "/assets/images/Products/health/pension.gif",
    link: "/home-insurance",
  },
  {
    text: "ULIP",
    subtext: "Life Plan",
    imgSrc: "/assets/images/Products/health/ULIP.gif",
    link: "/home-insurance",
  },
  {
    text: "Critical Care",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/critical.gif",
    link: "/home-insurance",
  },
  {
    text: "1CR Health Cover",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/onecr.gif",
    link: "/home-insurance",
  },
  {
    text: "Cancer",
    subtext: "Health Plan",
    imgSrc: "/assets/images/Products/health/cancer-ribbon.png",
    link: "/home-insurance",
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
      }
      else if (width >= 1024) {
        // md: 4 columns, 2 rows
        setColumns(7);
        setRows(2);
      } 
      else if (width >= 640) {
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
        
        <Typography variant="h3" color="blue-gray" className="mb-2 pt-10 pb-5 text-center">
          OTHER INSURANCE
        </Typography>
<hr />
<div className="flex justify-center items-center lg:px-28 lg:pe-28 w-full  pt-10 pr-[10px] md:pr-0">

     <Carousel
      className="rounded-xl pb-5"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-blue-500" : "bg-gray-400"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={ () => {
        return (
          <button   
         className="hidden  "
          >   
          </button>
        );
      }}
      nextArrow={ () => (
        <button
          className="hidden "
        >
        </button>
      )}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
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
      ))}
    </Carousel>
    
</div>
    </>
  );
};

export default Products;
