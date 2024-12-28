import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './tailwind.css'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import { DataProvider } from './Context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <DataProvider>

  <StrictMode>
  <HelmetProvider> 
    <BrowserRouter>
      <App />
  </BrowserRouter>
  </HelmetProvider>
  </StrictMode>
  </DataProvider>
)
