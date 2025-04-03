import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";


function App() {  

  return (   
     
     <Router>
        <Header/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="About" element={<About/>}/>
        </Routes>
        <Footer/>
     </Router>

     
  )
}

export default App
