import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import CarInsurance from '../components/AllProducts/GeneralInsurance/CarInsurance'
import Contact from '../components/Contact'
import BikeInsurance from '../components/AllProducts/GeneralInsurance/BikeInsurance'
import About from '../components/aboutUs/About'

import OurPartner from '../components/OurPartner'

import Claim from '../components/Claim/Claim'
import ScrollTop from '../components/ScrollTop'


const Routing = () => {
  return (
    <div>
       <ScrollTop/>
       <Routes>
        
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />

    <Route path="/our-partner" element={<OurPartner/>} />

    <Route path="/under-process" element={<Claim/>} />

    <Route path="/about-us" element={<About/>} />
    <Route path="/car-insurance" element={<CarInsurance/>} />
    <Route path="/bike-insurance" element={<BikeInsurance/>} />
       </Routes>
    </div>
  )
}

export default Routing