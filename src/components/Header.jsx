import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/images/logo.png";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Helper function to check if path is active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  }

  // For Dropdown parent items
  const isDropdownActive = (paths) => {
    return paths.includes(location.pathname) ? "active" : "";
  }

  // Custom click handler for all navigation links
  const handleNavLinkClick = () => {
    // Close the mobile menu if open
    const offcanvas = document.getElementById('offcanvasNavbar2');
    if (offcanvas && offcanvas.classList.contains('show')) {
      const closeBtn = offcanvas.querySelector('[data-bs-dismiss="offcanvas"]');
      if (closeBtn) closeBtn.click();
    }

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`fixed-top ${scrolled ? "scrolledHeader" : ""}`}>
      <div className="container">
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          aria-label="Offcanvas navbar large"
        >
          <Link className="navbar-brand" to="/" onClick={handleNavLinkClick}>
            <img src={Logo} alt="Plus Quest Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"><i className="bi bi-list"></i></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"  
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link 
                    to="/" 
                    className={`nav-link ${isActive("/")}`}
                    aria-current={isActive("/") ? "page" : undefined}
                    onClick={handleNavLinkClick}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/About" 
                    className={`nav-link ${isActive("/About")}`}
                    onClick={handleNavLinkClick}
                  >
                    About
                  </Link>
                </li>
                <li className={`nav-item dropdown ${isDropdownActive([
                  "/Services/PowerPlatform",
                  "/Services/DigitalMarketing",
                  "/Services/WebMobileDevelopment", 
                  "/Services/Staffing", 
                ])}`}>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"  
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link 
                        className={`dropdown-item ${isActive("/Services/PowerPlatform")}`} 
                        to="/Services/PowerPlatform"
                        onClick={handleNavLinkClick}
                      >
                        Power Platform & Dynamics 365 CE Resources
                      </Link>
                    </li>
                    <li>
                      <Link 
                        className={`dropdown-item ${isActive("/Services/DigitalMarketing")}`} 
                        to="/Services/DigitalMarketing"
                        onClick={handleNavLinkClick}
                      >
                        Digital & Social Media Marketing
                      </Link>
                    </li>
                    <li>
                      <Link 
                        className={`dropdown-item ${isActive("/Services/WebMobileDevelopment")}`} 
                        to="/Services/WebMobileDevelopment"
                        onClick={handleNavLinkClick}
                      >
                        Website & Mobile App Development
                      </Link>
                    </li>   
                    <li>
                      <Link 
                        className={`dropdown-item ${isActive("/Services/Staffing")}`} 
                        to="/Services/Staffing"
                        onClick={handleNavLinkClick}
                      >
                        Staffing and Recruiting HR
                      </Link>
                    </li>              
                  </ul>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/Works" 
                    className={`nav-link ${isActive("/Works")}`}
                    onClick={handleNavLinkClick}
                  >
                    Works
                  </Link>
                </li>                
                <li className="nav-item">
                  <Link 
                    to="/Careers" 
                    className={`nav-link ${isActive("/Careers")}`}
                    onClick={handleNavLinkClick}
                  >
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link 
                    to="/Blogs" 
                    className={`nav-link ${isActive("/Blogs")}`}
                    onClick={handleNavLinkClick}
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-end flex-grow-1 align-self-center">
                <li className="pt-4 pt-md-0">
                  <Link 
                    className="btn-green text-white headerbtn" 
                    to="/Contact"
                    onClick={handleNavLinkClick}
                  >
                    <span className="text-uppercase">Contact us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;