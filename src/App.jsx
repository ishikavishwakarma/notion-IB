import React from 'react'
import Home from './components/Home/Home'
import Routing from './utils/Routing'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (

    <div className='bg-[#F1F8FF] font-roboto'>
    
    <Header/>
    <Routing/>
    <Footer />
    </div>
  )
}

export default App
