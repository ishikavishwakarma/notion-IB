
import React, { Fragment, useEffect, useState } from "react";
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { TiSocialFacebook, TiSocialPinterest, TiSocialTwitter, TiSocialYoutube } from 'react-icons/ti'

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  Bars4Icon,

} from "@heroicons/react/24/solid";

const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];
const navListMenuItems = [
  {
    title: "General Insurance",

    sublink: [
      { name: "Car Insurance", link: "/carInsurance" },
      { name: "Two Wheeler Insurance", link: "/bikeInsurance" },
      { name: "Brand Car Insurance", link: "/bikeInsurance" },
      { name: "Travel Insurance", link: "/hh" },
     
      { name: "Commercial Vehicle", link: "/kk" },
      { name: "Taxi Insurance", link: "/kk" },

    ],
  },
  {
    title: "Non-General Insurance",

    sublink: [
      { name: "Marine Insurance", link: "/web" },
      { name: "Fire & Burglary", link: "/tru" },
      { name: "Shop Owner Insurance", link: "/hh" },
      { name: "Workmen Compensation", link: "/kk" },
      { name: "General Liability", link: "/kk" },
      { name: "Cyber Insurance", link: "/kk" },

    ],
  },
  {
    title: "Life Insurance",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    sublink: [
      { name: "Life Insurance Plans", link: "/" },
      { name: "Postal Life Insurance", link: "/" },


    ],
  },
  {
    title: "Health Insurance",

    sublink: [
      { name: "Heart ", link: "/" },
      { name: "1 Cr Health Cover", link: "/" },
      { name: "Cancer Insurance", link: "/" },
      { name: "Family Health Insurance", link: "/" },
      { name: "Employee Group Health Insurance", link: "/" },

    ],
  },


];
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(
    ({ title, sublink }, key) => (
      <a href="#" className="flex lg:justify-center" key={key}>
        <div className="">
          <MenuItem
            variant="h4"
            color="blue-gray"
            className="flex items-center text-black bg-transparent hover:bg-transparent text-lg cursor-pointer font-bold"
          >
            {title}
          </MenuItem>

          {sublink.map((sublinkItem, sublinkKey) => (
              <a href={sublinkItem.link} key={sublinkKey} className="text-sm text-blue-gray-500">
            <MenuItem  className="flex items-center cursor-pointer gap-3 rounded-lg">
                {sublinkItem.name}
            </MenuItem>
              </a>
          ))}

        </div>
      </a>
    ),
  );

  return (

    <Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center text-base gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Insurances
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="hidden  w-full bg-transparent border-0 lg:justify-center shadow-none outline-none outline-0  lg:flex">
          <div className="w-[70vw] rounded-xl bg-white outline-none lg:block outline-0 border-0 hover:border-0">

            <ul className="grid grid-cols-4  justify-center gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
          </div>
        </MenuList>

      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  );
}
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center text-base gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center text-base gap-2 py-2 pr-4">About Us</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center text-base gap-2 py-2 pr-4">Our Partner</ListItem>
      </Typography>
      <Typography
        as="a"
        href="/contact"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center text-base gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}
const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  return (
    // <div>
    //     <header className='font-[sans-serif] min-h-[60px] tracking-wide relative z-50 '>

    //         <section className="bg-[#ffffff] min-h-[40px] px-4 py-4 border border-gray-500 sm:px-10 flex items-center max-sm:hidden">
    //             <button type="button" className="text-gray-800 text-sm">
    //                 <p className='flex items-center gap-2 text-sm '><span className='text-blue-700'><MdLocationPin /></span>3 floor lalwani complex, above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026</p>
    //             </button>
    //             <span className="border-l h-3 mx-6 max-sm:hidden"></span>
    //             <button type="button" className="text-gray-800 text-sm max-sm:my-2">
    //                 <a className='flex items-center gap-2 text-sm ' href="mailto:noreplay@notion.com"><span className='text-blue-700'><MdEmail /></span>noreplay@notion.com</a>
    //             </button>
    //             <div className="sm:ml-auto text-gray-800">
    //                 <div>
    //                     <span className='flex items-center gap-3 text-xl text-gray-800'><TiSocialFacebook /><TiSocialTwitter /><TiSocialPinterest /><TiSocialYoutube /></span>
    //                 </div>
    //             </div>
    //         </section>

    //         <div className='flex items-center justify-between pr-2 h-24 bg-[#7166F5] lg:gap-y-4 gap-y-6 gap-x-4'>
    //             <div className='logowrap w-72 max-sm:bg-none'>
    //                 <div className='bg-white logobg'>
    //                     <a className='px-5' href="/"><img src="assets/images/header/logo.png" alt="logo" className='w-40' />
    //                     </a>
    //                 </div>
    //             </div>

    //             <div className='hidden max-sm:block'>
    //                 <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
    //                     <path fill="#000000" fillRule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm-4 4a1 1 0 100-2H6a1 1 0 100 2h8zm5 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-5 5a1 1 0 100-2H6a1 1 0 100 2h8z" />
    //                 </svg>
    //             </div>
    //             <div id="collapseMenu"
    //                 className="max-lg:hidden lg:!flex lg:items-center max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
    //                 <ul
    //                     className='lg:!flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#151d20] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:px-10 max-lg:py-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
    //                     <li className='mb-6 hidden max-lg:block'>
    //                         <a href="/"><img src="assets/images/header/logo.png" alt="logo"
    //                             className='w-36' />
    //                         </a>
    //                     </li>
    //                     <li
    //                         className='max-lg:border-b max-lg:py-3 relative lg:after:absolute lg:after:bg-white lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
    //                         <a href='/' className='text-white block text-[15px] font-medium'>Home</a>
    //                     </li>
    //                     <li
    //                         className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
    //                         <a href='/' className='text-white block text-[15px] font-medium'>About Us</a>
    //                     </li>
    //                     <li
    //                         className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
    //                         <a href='/' className='text-white block text-[15px] font-medium'>Our Partner </a>
    //                     </li>
    //                     <li
    //                         className='max-lg:border-b max-lg:py-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:-bottom-4 lg:after:transition-all lg:after:duration-300'>
    //                         <a href='/' className='text-white block text-[15px] font-medium'>Contact Us</a>
    //                     </li>
    //                 </ul>
    //             </div>
    //             <div className='flex items-center justify-end gap-5 px-5 w-[25vw] h-full max-sm:bg-none max-sm:hidden buttonbg'>
    //                 <button className="rounded-md relative flex px-3 py-1.5 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
    //                     <span className="relative z-10">Become A POSP</span>
    //                 </button>
    //                 <button className="rounded-md relative flex px-3 py-1.5 items-center justify-center overflow-hidden bg-[#7166F5] hover:text-black text-white shadow-2xl transition-all before:absolute before:-bottom-10 before:h-10 before:w-10 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56 hover:before:w-56">
    //                     <span className="relative z-10">Login</span>
    //                 </button>
    //             </div>
    //         </div>
    //     </header>
    // </div>
    <>
      <section className="backdrop-saturate-100 border-b-gray-300 border-b min-h-[40px] hidden px-4 py-2 sm:px-10 md:flex items-center max-sm:hidden">
        <button type="button" className="text-gray-800 text-xs">
          <p className='flex items-center gap-2  '><span className='text-blue-700'><MdLocationPin /></span>3 floor lalwani complex, above Axis Bank, Vidya Nagar, Bhopal, Madhya Pradesh 462026</p>
        </button>
        <span className="border-l h-3 mx-6 max-sm:hidden"></span>
        <button type="button" className="text-gray-800 text-xs max-sm:my-2">
          <a className='flex items-center gap-2 ' href="mailto:noreplay@notion.com"><span className='text-blue-700'><MdEmail /></span>noreplay@notion.com</a>
        </button>
        <div className="sm:ml-auto text-gray-800">
          <div>
            <span className='flex items-center gap-3 text-xl text-gray-800'><TiSocialFacebook /><TiSocialTwitter /><TiSocialPinterest /><TiSocialYoutube /></span>
          </div>
        </div>
      </section>
      
      <Navbar className="max-w-full bg-transparent backdrop-saturate-100 border-none rounded-none px-4 py-1">
        <div className="flex items-center justify-between text-blue-gray-900">
          <img
            src="../../assets/images/header/logoNew.png"
            alt="Material Tailwind"
            className="mr-4 py-0 bg- cursor-pointer h-10 sm:h-16  lg:ml-2"
          />
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden gap-2 lg:flex">
            <Button className="text-base py-2" variant="outlined" color="blue-gray">
              Log In
            </Button>
            <Button variant="gradient" className="text-base">
              Become a POSP
            </Button>
          </div>
          <IconButton
            variant="text"
            color="blue-gray"
            className="lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth className="size">
              Log In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Become a POSP
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </>
  )
}

export default Header
