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
        </Routes>
        <Footer/>
     </Router>

     
  )
}

export default App
