import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import CarInsurance from '../components/AllProducts/CarInsurance'
import Contact from '../components/Contact'
import BikeInsurance from '../components/AllProducts/BikeInsurance'
import About from '../components/aboutUs/About'
import OurPartner from '../components/OurPartner'

const Routing = () => {
  return (
    <div>
       <Routes>
       
        
    <Route path="/" element={<Home/>} />
    <Route path="/carInsurance" element={<CarInsurance/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/ourPartner" element={<OurPartner/>} />
    <Route path="/aboutUs" element={<About/>} />
    <Route path="/bikeInsurance" element={<BikeInsurance/>} />
       </Routes>
    </div>
  )
}

export default Routing