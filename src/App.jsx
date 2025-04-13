import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PowerPlatform from './pages/Services/PowerPlatform';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import WebMobileDevelopment from './pages/Services/WebMobileDevelopment';
import Staffing from './pages/Services/Staffing';
import Works from './pages/Works';
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import MicrosoftPowerPlatform from './pages/Blogs/MicrosoftPowerPlatform';
import SocialMediaMarketingHacks from './pages/Blogs/SocialMediaMarketingHacks';
import WhyrjsisthebestChoice from './pages/Blogs/WhyrjsisthebestChoice';
import TheUltimateGuideStaffing from './pages/Blogs/TheUltimateGuideStaffing';
import LowcodeRevolution from './pages/Blogs/LowcodeRevolution';
import MobileAppDevelopment from './pages/Blogs/MobileAppDevelopment';
import DynamicsCRMCustomization from './pages/Blogs/DynamicsCRMCustomization';
import ContentMarketing from './pages/Blogs/ContentMarketing';

import Contact from './pages/Contact';



function App() {  

  return (   
     
     <Router>
        <Header/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="About" element={<About/>}/>
            <Route path="Services/PowerPlatform" element={<PowerPlatform/>}/>
            <Route path="Services/DigitalMarketing" element={<DigitalMarketing/>}/>
            <Route path="Services/WebMobileDevelopment" element={<WebMobileDevelopment/>}/>
            <Route path="Services/Staffing" element={<Staffing/>}/>
            <Route path="Works" element={<Works/>}/>
            <Route path="Careers" element={<Careers/>}/>       
            <Route path="Blogs" element={<Blogs/>}/>
            <Route path="Blogs/MicrosoftPowerPlatform" element={<MicrosoftPowerPlatform/>}/>
            <Route path="Blogs/SocialMediaMarketingHacks" element={<SocialMediaMarketingHacks/>}/>      
            <Route path="Blogs/WhyrjsisthebestChoice" element={<WhyrjsisthebestChoice/>}/>    
            <Route path="Blogs/TheUltimateGuideStaffing" element={<TheUltimateGuideStaffing/>}/>    
            <Route path="Blogs/LowcodeRevolution" element={<LowcodeRevolution/>}/>  
            <Route path="Blogs/MobileAppDevelopment" element={<MobileAppDevelopment/>}/>
            <Route path="Blogs/DynamicsCRMCustomization" element={<DynamicsCRMCustomization/>}/>
            <Route path="Blogs/ContentMarketing" element={<ContentMarketing/>}/>
            
            
            <Route path="Contact" element={<Contact/>}/>
        </Routes>
        <Footer/>
     </Router>

     
  )
}

export default App
