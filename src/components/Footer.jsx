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
        <Link className="moveTop" onClick={scrollToTop}><i class="bi bi-arrow-up"></i></Link>
      )}
      <div class="top-header">  
        <div className="container">
            <div className="row">
                <div class="col-md-4">
                  <Link to="/">
                      <img src={Logo} className="pb-3" alt="logo" />
                    </Link>
                    <p className="pe-5">With a team of certified professionals and industry experts, we help clients accelerate digital transformation.</p>
                    <div>
                        <Link to="/" className="social-icon"><i class="bi bi-facebook"></i></Link>
                        <Link to="/" className="social-icon"><i class="bi bi-twitter-x"></i></Link>
                        <Link to="/" className="social-icon"><i class="bi bi-linkedin"></i></Link>
                    </div>
                </div>

                <div className="col-md-4">
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
                <div className="col-md-4">
                    <h4 className="text-white font-bold pb-4">Services</h4>
                    <ul className="footer-nav">                     
                        <li><Link to="">Power Platform & Dynamics 365 </Link></li>
                        <li><Link to="">Digital & Social Media Marketing</Link></li>
                        <li><Link to="">Website & Mobile App Develop</Link></li>
                        <li><Link to="">IT Staffing & Recruting</Link></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>

        <div class="bottom-footer py-4">
            <p className="p-0 m-0 text-center">Copyright © 2024 PluseQuest, All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
