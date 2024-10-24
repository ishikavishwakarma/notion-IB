import { Fragment, useEffect, useState } from "react";
import { MdAddCall, MdEmail, MdLocationPin } from "react-icons/md";
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


const navListMenuItems = [
  {
    title: "General Insurance",

    sublink: [
      { name: "Car Insurance", link: "/car-insurance" },
      { name: "Two Wheeler Insurance", link: "/two-wheeler-insurance" },
      { name: "Home Insurance", link: "/home-insurance" },
      { name: "Brand Car Insurance", link: "/car-insurance" },
      { name: "Travel Insurance", link: "/travel-insurance" },
      { name: "Commercial Vehicle", link: "/commercial-vehicle" },
      { name: "Taxi Insurance", link: "/taxi-insurance" },
    ],
  },
  {
    title: "Non-General Insurance",

    sublink: [
      { name: "Marine Insurance", link: "/marine-insurance" },
      { name: "Fire & Burglary", link: "/fire-insurance" },
      { name: "Shop Owner Insurance", link: "/shop-insurance" },
      { name: "Workers' Compensation", link: "/workers-insurance" },
      { name: "General Liability", link: "/general-liability-insurance" },
      { name: "Cyber Insurance", link: "/cyber-insurance" },
      { name: "Contractor's Plant & Machinery", link: "/contractor-plant-machinery-insurance" },
      { name: "Professional Indemnity for Doctors", link: "/professional-indemnity-doctors-insurance" },
      { name: "Professional Indemnity for Companies", link: "/professional-indemnity-companies-insurance" },
      { name: "Contractor All Risk Insurance", link: "/contractor-risk-insurance" },
      { name: "Directors and Officers (D&O) Insurance", link: "/director-officers-insurance" },
    ],
  },
  {
    title: "Life Insurance",
    description: "Find the perfect solution for your needs.",
    icon: Bars4Icon,
    sublink: [
      { name: "Pension Plans", link: "/pension-plan" },
      { name: "Term Plans", link: "/term-insurance" },
      { name: "Child Saving Plan", link: "/child-insurance" },
      { name: "Endowment Plan", link: "/endowment-insurance" },
      { name: "ULIP Plan", link: "/ulip-insurance" },
      { name: "Money Back Plan", link: "/money-back-policy" },

    ],
  },
  {
    title: "Health Insurance",

    sublink: [
      { name: "Individual Health Insurance ", link: "/individual-health-insurance" },
      { name: "Family Health Insurance", link: "/family-health-insurance" },
      { name: "Critical Care Plan", link: "/critical-care-plan" },
      { name: "Maternity Cover Plan", link: "/maternity-cover" },
      { name: "Senior Citizen Plan", link: "/senior-citizen-plan" },
      { name: "1 Cr Health Cover", link: "/one-cr-health-cover" },
      { name: "Cancer Insurance", link: "/cancer-insurance" },
      { name: "Employee Group Health Insurance", link: "/employee-group-health-insurance" },
    ],
  },
];

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
        // offset={{ mainAxis: 30 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center text-base py-2 xl:px-4 gap-2 lg:px-1 font-medium text-gray-900"
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

        <MenuList className="hidden ml-[12%] w-fit bg-transparent border-0 lg:justify-center shadow-none outline-none outline-0  lg:flex">
          <div className="w-[70vw] rounded-xl bg-white outline-none lg:block outline-0 border-0 hover:border-0">
            <ul className="grid grid-cols-4  justify-center gap-y-2 outline-none outline-0">
              {renderItems}
            </ul>
          </div>
        </MenuList>
      </Menu>
      
    </Fragment>
  );
}
function NavList({ closeMenu }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  function NavListMenu({ closeMenu }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
                closeMenu();
                setIsMobileMenuOpen(false);
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
                className="flex items-center text-base gap-2 py-2 xl:px-4 lg:px-1 font-medium text-gray-900"
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
        <Collapse open={isMobileMenuOpen}>
            {renderItems}
         
          </Collapse>
        </div>
      </Fragment>
    );
  }
  const isMobileOrTablet = useMediaQuery({ maxWidth: 958 });
  const handleHomeClick = () => {
    closeMenu(); // Close the menu
    // setIsMobileMenuOpen(false); // Reset mobile menu state
  };
  const handleHomeClickNew = () => {
    closeMenu(); // Close the menu
    setIsMobileMenuOpen(false); // Reset mobile menu state
  };
  return (
    <List className=" mb-6  p-0 lg:mt-0 lg:mb-0 lg:flex-row ">
      {isMobileOrTablet ? (
        <>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/" onClick={handleHomeClickNew}>
          <ListItem className="flex items-center text-base py-2 xl:px-4 lg:px-1 ">
            Home
          </ListItem>
        </Link>
      </Typography>
        <NavListMenu closeMenu={handleHomeClick} />
        <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/about-us" onClick={handleHomeClickNew}>
          <ListItem className="flex items-center text-base gap-2 xl:px-4 py-2 lg:px-1 ">
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
        <Link to="/our-partners" onClick={handleHomeClickNew}>
          <ListItem className="flex items-center text-base gap-2 xl:px-4 py-2 lg:px-1 ">
            Our Partners
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/under-process" onClick={handleHomeClickNew}>
          <ListItem className="flex items-center text-base gap-2 xl:px-4 py-2 lg:px-1 ">
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
        <Link to="/contact" onClick={handleHomeClickNew}>
          <ListItem className="flex items-center text-base gap-2 xl:px-4 py-2 lg:px-1 ">
            Contact Us
          </ListItem>
        </Link>
      </Typography>
        </>
      ) : (
        <>
        <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/" >
          <ListItem className="flex items-center text-base py-2 xl:px-4 lg:px-1 ">
            Home
          </ListItem>
        </Link>
      </Typography>
      <NavListMenuDesktop />
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/about-us" >
          <ListItem className="flex items-center text-base gap-2 xl:px-4 py-2 lg:px-1 ">
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
        <Link to="/our-partners" >
          <ListItem className="flex items-center text-base gap-2 xl:px-4 py-2 lg:px-1 ">
            Our Partners
          </ListItem>
        </Link>
      </Typography>
      <Typography
        as="a"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <Link to="/under-process" >
          <ListItem className="flex items-center text-base gap-2 xl:px-4 py-2 lg:px-1 ">
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
        <Link to="/contact" >
          <ListItem className="flex items-center text-base gap-2 xl:px-4 py-2 lg:px-1 ">
            Contact Us
          </ListItem>
        </Link>
      </Typography>
        </>
      )}
      
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
      <section className="backdrop-saturate-100 min-h-[40px] border-b justify-center flex-wrap bg-white hidden px-4 py-2 sm:px-10 md:flex items-center max-sm:hidden">
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
          <Link
            className="flex items-center gap-2 "
            to="mailto:info@notioninsurance.com"
          >
            <span className="text-blue-700">
              <MdEmail />
            </span>
          
              info@notioninsurance.com
            </Link>
        
        </button>
        <span className="border-l h-3 mx-6 max-sm:hidden"></span>
        <button type="button" className="text-gray-800 text-xs max-sm:my-2">
          <Link
            className="flex items-center gap-2 "
            to="tel:91-9302182475"
          >
            <span className="text-blue-700">
            <MdAddCall />
            </span>
          
              91-9302182475
            </Link>
        
        </button>
        <span className="border-l h-3 mx-6 max-sm:hidden"></span>
        <button type="button" className="text-gray-800 text-xs max-sm:my-2">
          <Link
            className="flex items-center gap-2 "
            to="tel:0755-4911343"
          >
            <span className="text-blue-700">
            <MdAddCall />
            </span>
          
              0755-4911343
            </Link>
        
        </button>
      
      </section>

      <Navbar className="max-w-full md:sticky top-0 z-50 border-none rounded-none px-4 py-0  bg-[url('/assets/images/header/footer.webp')] bg-cover bg-center bg-no-repeat">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to='/' className="h-16 w-32 md:w-44">
            <img
              src="assets/images/header/logo.webp"
              alt="Notion insurance "
              loading='lazy'
              className="mr-4 py-0 cursor-pointer object-cover  h-full w-full  lg:ml-2"
            />
          </Link>
          <div className="hidden lg:block">
            <NavList />
          </div>
          <div className="hidden  xl:h-10 lg:gap-2  xl:gap-5 lg:flex">
          <Link to="https://www.notioninsurance.com/../newportal/index/signin" target="_blank" rel="noopener noreferrer">
           
            <Button
              className="text-sm w-20 lg:px-0 xl:px-2  py-2  "
              variant="outlined"
              color="blue"
            >
              Log In
            </Button>

          </Link>
          <Link to="https://www.notioninsurance.com/../newportal/index/signup" target="_blank" rel="noopener noreferrer">
            <Button variant="gradient" color="blue" className="py-2 xl:w-40 lg:w-32 lg:px-0 xl:px-2 text-sm">
              Become a POSP
            </Button>
          </Link>
           
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
          <div className="flex  w-full pb-3 flex-nowrap items-center gap-2 lg:hidden">
          <Link to="https://www.notioninsurance.com/../newportal/index/signin" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outlined"
              size="sm"
              color="blue-gray"
              fullWidth
            >
              Log In
            </Button>
          </Link>
          <Link to="https://www.notioninsurance.com/../newportal/index/signup" target="_blank" rel="noopener noreferrer">
            <Button  variant="gradient" size="sm" fullWidth>
              Become a POSP
            </Button>
          </Link>
          </div>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Header;
