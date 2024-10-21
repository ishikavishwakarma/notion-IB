import React from 'react'
import Information from './Information'
import Mission from './Mission'
import Founder from './Founder'
import Example from '../Example'
import OurExperts from './OurExperts'
import { Helmet } from "react-helmet-async";



const About = () => {
  return (
    <div>
       <Helmet>
        <title>About Us - NIB</title>
        <meta name="description" content="Learn more about Notion Insurance Broker Pvt. Ltd., your trusted partner in providing comprehensive insurance solutions for individuals and businesses." />
        <meta name="keywords" content="Insurance Broker, Notion Insurance, Comprehensive Insurance Solutions, Life Insurance, Health Insurance, Business Insurance" />
        <link rel="canonical" href="https://www.notioninsurance.com/about-us" />
      </Helmet>

        <Information />
        <Mission />

        <OurExperts/>
    </div>

  )
}

export default About