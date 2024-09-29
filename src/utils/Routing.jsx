import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import CarInsurance from '../components/AllProducts/CarInsurance'
import Contact from '../components/Contact'

const Routing = () => {
  return (
    <div>
       <Routes>
        
    <Route path="/" element={<Home/>} />
    <Route path="/carInsurance" element={<CarInsurance/>} />
    <Route path="/contact" element={<Contact/>} />
       </Routes>
    </div>
  )
}

export default Routing