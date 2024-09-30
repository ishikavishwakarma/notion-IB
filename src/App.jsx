import React from 'react'
import Home from './components/Home'
import './App.css'
import Routing from './utils/Routing'
import Header from './components/Header'
import Footer from './components/footer'


const App = () => {
  return (
    <div>
    
    <Header />
    <Routing/>
    <Footer />
    </div>
  )
}

export default App
