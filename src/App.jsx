import React from 'react'
import Home from './components/Home/Home'
import './App.css'
import Routing from './utils/Routing'
import Header from './components/Header'
import Footer from './components/footer'


const App = () => {
  return (
    <div className='bg-[#e0f1fb60]'>
    
    <Header />
    <Routing/>
    <Footer />
    </div>
  )
}

export default App
