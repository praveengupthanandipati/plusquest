import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/images/logo.png";

const Header = () => {

  const location = useLocation();
  const [scrolled, setScrolled]=useState(false);

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

  //helper function to check if path is active

  const isActive = (path)=>{
    return location.pathname === path ? "active" : "";
  }

  //for Dropdown parent items
  const isDropdownActive = (paths)=>{
    return paths.includes(location.pathname) ? "active" :"";
  }

  return (
    <header className={`fixed-top ${scrolled ? "scrolledHeader" : ""}`}>
    <div className="container">
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        aria-label="Offcanvas navbar large"
      >
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2"
          aria-controls="offcanvasNavbar2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbar2Label">
              Offcanvas
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
                <Link to="/" className={`nav-link ${isActive("/")}`}
                aria-current={isActive("/") ? "page" : undefined}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className={`nav-link ${isActive("/About")}`} >
                  About
                </Link>
              </li>
              <li className={`nav-item dropdown ${isDropdownActive([
                "/services/UIUXDesign",
                "/services/web-dev",
                "/services/mobile-dev",
                "/services/digital-marketing"

              ])}`}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className={`dropdown-item ${isActive("/services/UIUXDesign")}`} to="/services/UIUXDesign">
                      UX/UI Designs
                    </Link>
                  </li>
                  <li>
                  <Link className={`dropdown-item ${isActive("/services/WebDevelopment")}`} to="/services/WebDevelopment">
                      Web Development
                    </Link>
                  </li>
                  <li>
                  <Link className={`dropdown-item ${isActive("/services/MobileDevelopment")}`} to="/services/MobileDevelopment">
                      Mobile Development
                    </Link>
                  </li>
                  <li>
                  <Link className={`dropdown-item ${isActive("/services/DigitalMarketing")}`} to="/services/DigitalMarketing">
                      Digital Marketing
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Works" className={`nav-link ${isActive("/Works")}`} >
                  Works
                </Link>
              </li>                
              <li className="nav-item">
                <Link to="/Careers" className={`nav-link ${isActive("/Careers")}`} >
                  Careers
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li>
                <Link className="btn-green text-white" to="">
                  <span className="text-uppercase"> Contact us</span>
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

export default Header
