import React from 'react'
import Information from './Information'
import Mission from './Mission'
import Founder from './Founder'
import Example from '../Example'
import OurExperts from './OurExperts'
import {Helmet} from "react-helmet";

const About = () => {
  return (
    <div>
         <Helmet>
        <meta charSet="utf-8" />
        <title>About Us - NIB</title>
        <meta name="description" content="Learn more about our notion insurance broker, our mission, and our team of experts." />
        <meta
  name="keywords"
  content="Notion Insurance Broker, insurance broker India, IRDAI licensed, insurance professionals, risk management solutions, corporate insurance, retail insurance, insurance coverage, tailor-made insurance policies, risk indemnification, insurance expertise, insurance regulatory India, direct insurance broking, India insurance firm, professional insurance services"
/>

      </Helmet>
        <Information />
        <Mission />

        <OurExperts/>
    </div>

  )
}

export default About