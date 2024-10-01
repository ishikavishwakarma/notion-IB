import React, { Fragment, useEffect, useState } from "react";
import { MdEmail, MdLocationPin } from "react-icons/md";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { useMediaQuery } from "react-responsive";
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
import { Bars4Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

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
      { name: "Travel Insurance", link: "/UnderProcess" },

      { name: "Commercial Vehicle", link: "/UnderProcess" },
      { name: "Taxi Insurance", link: "/UnderProcess" },
    ],
  },
  {
    title: "Non-General Insurance",

    sublink: [
      { name: "Marine Insurance", link: "/UnderProcess" },
      { name: "Fire & Burglary", link: "/UnderProcess" },
      { name: "Shop Owner Insurance", link: "/UnderProcess" },
      { name: "Workmen Compensation", link: "/UnderProcess" },
      { name: "General Liability", link: "/UnderProcess" },
      { name: "Cyber Insurance", link: "/UnderProcess" },
    ],
  },
  {
    title: "Life Insurance",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    sublink: [
      { name: "Life Insurance Plans", link: "/UnderProcess" },
      { name: "Postal Life Insurance", link: "/UnderProcess" },
    ],
  },
  {
    title: "Health Insurance",

    sublink: [
      { name: "Heart ", link: "/UnderProcess" },
      { name: "1 Cr Health Cover", link: "/UnderProcess" },
      { name: "Cancer Insurance", link: "/UnderProcess" },
      { name: "Family Health Insurance", link: "/UnderProcess" },
      { name: "Employee Group Health Insurance", link: "/UnderProcess" },
    ],
  },
];
function NavListMenu({closeMenu }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ title, sublink }, key) => (
    <Link to="#" className="flex lg:justify-center" key={key}>
      <div className="">
        <MenuItem
          variant="h4"
          color="blue-gray"
         
          className="flex items-center text-black bg-transparent hover:bg-transparent text-lg cursor-pointer font-bold"
        >
          {title}
        </MenuItem>

        {sublink.map((sublinkItem, sublinkKey) => (
          <Link
            to={sublinkItem.link}
            key={sublinkKey}
            className="text-sm text-blue-gray-500"
            onClick={() => {
              setIsMobileMenuOpen(false); // Close menu when sublink is clicked
              closeMenu(); // Close mobile menu
            }}
          
          >
            <MenuItem className="flex items-center cursor-pointer gap-3 rounded-lg">
              {sublinkItem.name}
            </MenuItem>
          </Link>
        ))}
      </div>
    </Link>
  ));

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
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
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
      <Collapse open={isMobileMenuOpen}>
          {renderItems}
          
        </Collapse>
      </div>
    </Fragment>
  );
}
function NavListMenuDesktop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const renderItems = navListMenuItems.map(({ title, sublink }, key) => (
    <Link to="#" className="flex lg:justify-center" key={key}>
      <div className="">
        <MenuItem
          variant="h4"
          color="blue-gray"
         
          className="flex items-center text-black bg-transparent hover:bg-transparent text-lg cursor-pointer font-bold"
        >
          {title}
        </MenuItem>

        {sublink.map((sublinkItem, sublinkKey) => (
          <Link
            to={sublinkItem.link}
            key={sublinkKey}
            className="text-sm text-blue-gray-500"
           
          
          >
            <MenuItem className="flex items-center cursor-pointer gap-3 rounded-lg">
              {sublinkItem.name}
            </MenuItem>
          </Link>
        ))}
      </div>
    </Link>
  ));

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
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
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
      <Collapse open={isMobileMenuOpen}>
          {renderItems}
          <div className="flex w-full flex-nowrap items-center gap-2">
            <Button variant="outlined" size="sm" color="blue-gray" fullWidth className="size">
              Log In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Become a POSP
            </Button>
          </div>
        </Collapse>
      </div>
    </Fragment>
  );
}
function NavList({ closeMenu }) {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 767 });
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/" onClick={closeMenu}>
          <ListItem className="flex items-center text-base gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Link>
      </Typography>
      {isMobileOrTablet ? (
        <NavListMenu closeMenu={closeMenu} />
      ) : (
        <NavListMenuDesktop />
      )}
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/aboutUs" onClick={closeMenu}>
          <ListItem className="flex items-center text-base gap-2 py-2 pr-4">
            About Us
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/ourPartner" onClick={closeMenu}>
          <ListItem className="flex items-center text-base gap-2 py-2 pr-4">
            Our Partner
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/UnderProcess" onClick={closeMenu}>
          <ListItem className="flex items-center text-base gap-2 py-2 pr-4">
            Claim
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/contact" onClick={closeMenu}>
          <ListItem className="flex items-center text-base gap-2 py-2 pr-4">
            Contact Us
          </ListItem>
        </Link>
      </Typography>
    </List>
  );
}
const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  return (
    <>
      <section className="backdrop-saturate-100 border-b-gray-300 border-b min-h-[40px] hidden px-4 py-2 sm:px-10 md:flex items-center max-sm:hidden">
        <button type="button" className="text-gray-800 text-xs">
          <p className="flex items-center gap-2  ">
            <span className="text-blue-700">
              <MdLocationPin />
            </span>
            3 floor lalwani complex, above Axis Bank, Vidya Nagar, Bhopal,
            Madhya Pradesh 462026
          </p>
        </button>
        <span className="border-l h-3 mx-6 max-sm:hidden"></span>
        <button type="button" className="text-gray-800 text-xs max-sm:my-2">
          <a
            className="flex items-center gap-2 "
            href="mailto:noreplay@notion.com"
          >
            <span className="text-blue-700">
              <MdEmail />
            </span>
            noreplay@notion.com
          </a>
        </button>
        <div className="sm:ml-auto text-gray-800">
          <div>
            <span className="flex items-center gap-3 text-xl text-gray-800">
              <TiSocialFacebook />
              <TiSocialTwitter />
              <TiSocialPinterest />
              <TiSocialYoutube />
            </span>
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
            <Button
              className="text-base py-2"
              variant="outlined"
              color="blue-gray"
            >
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
          <NavList closeMenu={() => setOpenNav(false)} />
          <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
            <Button
              variant="outlined"
              size="sm"
              color="blue-gray"
              fullWidth
              className="size"
            >
              Log In
            </Button>
            <Button variant="gradient" size="sm" fullWidth>
              Become a POSP
            </Button>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
