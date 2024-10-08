
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

import TaxiInsurance from '../components/AllProducts/GeneralInsurance/TaxiInsurance'
import CommercialVehicle from '../components/AllProducts/GeneralInsurance/CommercialVehicle'
import Investmentplans from '../components/AllProducts/GeneralInsurance/Investmentplans'

import TravelInsurance from '../components/AllProducts/GeneralInsurance/TravelInsurance'
import Fire from '../components/AllProducts/Non-GeneralInsurance/Fire'
import FamilyHealthInsurance from '../components/AllProducts/HealthInsurance/FamilyHealthInsurance'
import HomeInsurance from '../components/AllProducts/GeneralInsurance/HomeInsurance'
import ShopOwnerInsurance from '../components/AllProducts/Non-GeneralInsurance/ShopOwnerInsurance'
import WorkerCompensationInsurance from '../components/AllProducts/Non-GeneralInsurance/WorkerCompensationInsurance'
import GeneralLiability from '../components/AllProducts/Non-GeneralInsurance/GeneralLiability'
import CyberInsurance from '../components/AllProducts/Non-GeneralInsurance/CyberInsurance'
import TermLifeInsurance from '../components/AllProducts/LifeInsurance/TermLifeInsurance'
import EndowmentInsurance from '../components/AllProducts/LifeInsurance/EndowmentInsurance'



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
    <Route path="/taxi-insurance" element={<TaxiInsurance/>} />
    <Route path="/commercial-vehicle" element={<CommercialVehicle />} />
    <Route path="/life-insurance" element={<LifeInsurance/>} />
    <Route path="/health-insurance" element={<HealthInsurance/>} />
    <Route path="/marine-insurance" element={<MarineInsurance/>} />

    <Route path="/investment-plans" element={<Investmentplans />} />
    
    <Route path="/travel-insurance" element={<TravelInsurance/>} />
    <Route path="/fire-insurance" element={<Fire/>} />
    <Route path="/family-health-insurance" element={<FamilyHealthInsurance/>} />
    <Route path="/home-insurance" element={<HomeInsurance/>} />
    <Route path="/shop-insurance" element={<ShopOwnerInsurance/>} />
    <Route path="/workers-insurance" element={<WorkerCompensationInsurance/>} />
    <Route path="/general-liability-insurance" element={<GeneralLiability/>} />
    <Route path="/cyber-insurance" element={<CyberInsurance/>} />
    <Route path="/term-insurance" element={<TermLifeInsurance/>} />
    <Route path="/endowment-insurance" element={<EndowmentInsurance/>} />
    </Routes>

    </div>
  )
}

export default Routing