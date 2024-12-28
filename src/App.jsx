import Routing from './utils/Routing'
import Header from './components/Header'
import Footer from './components/Footer'

import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  // Define routes where Header and Footer should not be displayed
  const noHeaderFooterRoutes = ["/mandate","/irda-license"];

  // Check if the current path matches any of the noHeaderFooterRoutes
  const shouldHideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);
  return (

    <div  className=' font-roboto'>
    
    {!shouldHideHeaderFooter && <Header />}
    <Routing/>
    {!shouldHideHeaderFooter && <Footer />}
    </div>
  )
}

export default App
