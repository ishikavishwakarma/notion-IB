import React from 'react'
import Home from './components/Home'
import './App.css'
import AnimatedCursor from 'react-animated-cursor';

const App = () => {
  return (
    <div>
      
      <AnimatedCursor
      className="cursor-custom" 
        innerSize={10}
        outerSize={35}
        color='97, 149, 151'
        outerAlpha={0.2}
        innerScale={1}
        outerScale={3}
      />
      <Home />

    </div>
  )
}

export default App
