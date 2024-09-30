import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import CarInsurance from '../components/AllProducts/GeneralInsurance/CarInsurance'
import Contact from '../components/Contact'
import BikeInsurance from '../components/AllProducts/GeneralInsurance/BikeInsurance'
import About from '../components/aboutUs/About'
import Claim from '../components/Claim/Claim'

const Routing = () => {
  return (
    <div>
       <Routes>
       
        
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/claim" element={<Claim/>} />
    <Route path="/aboutUs" element={<About/>} />
    <Route path="/carInsurance" element={<CarInsurance/>} />
    <Route path="/bikeInsurance" element={<BikeInsurance/>} />
       </Routes>
    </div>
  )
}

export default Routing