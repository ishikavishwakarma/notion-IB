import React, { useEffect, useState } from "react";

import Hero from "./HomeSubComponents/Hero";
import Products from "./HomeSubComponents/Products";
import Partners from "./HomeSubComponents/Partners";
import Exam from "./HomeSubComponents/Exam";

import Contact2 from "./HomeSubComponents/Contact2";
// import { Helmet } from "react-helmet";
import { Helmet } from "react-helmet-async";
import Work from "./HomeSubComponents/Work";

const Home = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  // Function to detect screen width
  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 768); // Sets mobile view for screens <= 768px
  };
  useEffect(() => {
    handleResize(); // Check size on initial render
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>

      <Helmet>
        <title>Home - NIB</title>
        <meta name="description" content="Welcome to Notion Insurance Broker. We provide the best insurance services in India." />
        <meta name="keywords" content="Insurance, Broker, Notion Insurance, Health Insurance, Life Insurance" />
        <link rel="canonical" href="https://www.notioninsurance.com/" />
      </Helmet>


      {isMobileView ? (
        <>
          <Products />
          <Hero />
        </>
      ) : (
        <>
          <Hero />
          <Products />
        </>
      )}
      <Partners />
      <Exam />
      <Work/>

      <Contact2 />
    </div>
  );
};

export default Home;
