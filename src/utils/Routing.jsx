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
import LifeInsurance from '../components/AllProducts/LifeInsurance/LifeInsurance'
import HealthInsurance from '../components/AllProducts/HealthInsurance/HealthInsurance'
import MarineInsurance from '../components/AllProducts/Non-GeneralInsurance/MarineInsurance'
import TravelInsurance from '../components/AllProducts/GeneralInsurance/TravelInsurance'
import Fire from '../components/AllProducts/Non-GeneralInsurance/Fire'
import FamilyHealthInsurance from '../components/AllProducts/HealthInsurance/FamilyHealthInsurance'
import HomeInsurance from '../components/AllProducts/GeneralInsurance/HomeInsurance'


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
    <Route path="/life-insurance" element={<LifeInsurance/>} />
    <Route path="/health-insurance" element={<HealthInsurance/>} />
    <Route path="/marine-insurance" element={<MarineInsurance/>} />
    <Route path="/travel-insurance" element={<TravelInsurance/>} />
    <Route path="/fire-insurance" element={<Fire/>} />
    <Route path="/family-health-insurance" element={<FamilyHealthInsurance/>} />
    <Route path="/home-insurance" element={<HomeInsurance/>} />
    </Routes>
    </div>
  )
}

export default Routing