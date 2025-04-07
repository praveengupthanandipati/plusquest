import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import PowerPlatform from './pages/Services/PowerPlatform';
import DigitalMarketing from './pages/Services/DigitalMarketing';
import WebMobileDevelopment from './pages/Services/WebMobileDevelopment';
import Works from './pages/Works';


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
            <Route path="Works" element={<Works/>}/>
        </Routes>
        <Footer/>
     </Router>

     
  )
}

export default App
