import React from "react";

import Hero from "./HomeSubComponents/Hero";
import Products from "./HomeSubComponents/Products";
import Partners from "./HomeSubComponents/Partners";
import Exam from "./HomeSubComponents/Exam";

import Workflow from "./HomeSubComponents/Workflow";
import Contact2 from "./HomeSubComponents/Contact2";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
  <meta charSet="utf-8" />
  <title>Home - NIB</title>
  <meta
    name="description"
    content="Explore NIB Notion Insurance Broker, providing expert insurance services, tailored plans, and dedicated support."
  />
  <meta
    name="keywords"
    content="NIB, Notion Insurance Broker, insurance services, insurance plans, expert insurance brokers, home insurance, life insurance, health insurance"
  />
</Helmet>

      <Hero />
      <Products />
      <Partners />
      <Exam />
      <Workflow />

      <Contact2 />
    </div>
  );
};

export default Home;
