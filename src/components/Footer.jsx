import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/images/logo-footer.png";

const Footer = () => {
  const [isVisible, setIsVisible]=useState(false);
  const scrollToTop=()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  //sShow / hide button based on scroll position
  useEffect(()=>{
    const toggleVisibility=()=>{
      if(window.pageYOffset > 300){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return ()=>{
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <footer>
       {isVisible && (
        <Link className="moveTop" onClick={scrollToTop}><i className="bi bi-arrow-up"></i></Link>
      )}
      <div className="top-header">  
        <div className="container">
            <div className="row">
                <div className="col-md-4 text-center text-md-start">
                  <Link to="/">
                      <img src={Logo} className="pb-3" alt="logo" />
                    </Link>
                    <p className="pe-0 pe-md-5">With a team of certified professionals and industry experts, we help clients accelerate digital transformation.</p>
                    <div>
                        <Link to="/" className="social-icon"><i className="bi bi-facebook"></i></Link>
                        <Link to="/" className="social-icon"><i className="bi bi-twitter-x"></i></Link>
                        <Link to="/" className="social-icon"><i className="bi bi-linkedin"></i></Link>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6 pt-4 pt-md-0 d-none d-md-block">
                    <h4 className="text-white font-bold pb-4">Company</h4>
                    <ul className="footer-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>        
                        <li><Link to="/works">Works</Link></li>               
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-md-4 col-sm-6 pt-4 pt-md-0 d-none d-md-block">
                    <h4 className="text-white font-bold pb-4">Services</h4>
                    <ul className="footer-nav">                     
                        <li><Link to="/Services/PowerPlatform">Power Platform & Dynamics 365 CE Resources</Link></li>
                        <li><Link to="/Services/DigitalMarketing">Digital & Social Media Marketing</Link></li>
                        <li><Link to="/Services/WebMobileDevelopment">Website & Mobile App Development</Link></li>
                        <li><Link to="/Services/Staffing"> Staffing and Recruiting HR</Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

        <div className="bottom-footer py-2 py-md-4">
            <p className="p-0 m-0 text-center">Copyright © 2025 PluseQuest, All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
