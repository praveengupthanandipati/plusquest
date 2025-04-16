import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MicrosoftPowerPlatform from "../assets/images/blog/blog01img_MicrosoftPowerPlatform.jpg";
import SocialMediaMarketing from "../assets/images/blog/blog02img_SocilmediaMarketing.jpg";
import Reactjsbestchoice from "../assets/images/blog/blog03img_reactjsbestchoice.jpg";
import TechStartups from "../assets/images/blog/blog04img_Techstartups.jpg";
import TransformBusinessProcess from "../assets/images/blog/blog05img_PowerAppsTransformyourBusinessProcess.jpg";
import FluttervsReactNativeforStartupsin2025 from "../assets/images/blog/FluttervsReactNativeforStartupsin2025.jpg";
import Dynamics365CRMCustomization from "../assets/images/blog/Dynamics365CRMCustomization.jpg";
import ContentMarketingSecrets from "../assets/images/blog/ContentMarketingSecrets.jpg";

const HomeBlogs = ({ home = false }) => {
  const blogCardsRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const cards = blogCardsRef.current.children;
    gsap.from(cards, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: {
        amount: 0.5,
        from: "start",
        ease: "power3.out"
      },
      scrollTrigger: {
        trigger: blogCardsRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });
  }, [currentPage]);

  const blogItems = [
    {
      image: MicrosoftPowerPlatform,
      date: "4 days ago",
      title:
        "Power Platform vs Dynamics 365: Which Microsoft Solution Fits Your Business Needs?",
      link: "MicrosoftPowerPlatform",
    },
    {
      image: SocialMediaMarketing,
      date: "4 days ago", 
      title:
        "5 Social Media Marketing Hacks to Skyrocket Your Startup's Growth in 2025",
      link: "SocialMediaMarketingHacks",
    },
    {
      image: Reactjsbestchoice,
      date: "4 days ago",
      title:
        "Why React.js is the Best Choice for Your Startup's Website in 2025",
      link: "WhyrjsisthebestChoice",
    },
    {
      image: TechStartups,
      date: "4 days ago",
      title: "The Ultimate Guide to Staffing Solutions for Tech Startups",
      link: "TheUltimateGuideStaffing",
    },
    {
      image: TransformBusinessProcess,
      date: "4 days ago",
      title:
        "Low-Code Revolution: How Power Apps Can Transform Your Business Processes",
      link: "LowcodeRevolution",
    },
    {
      image: FluttervsReactNativeforStartupsin2025,
      date: "4 days ago",
      title:
        "Mobile App Development: Flutter vs React Native for Startups in 2025",
      link: "MobileAppDevelopment",
    },
    {
      image: Dynamics365CRMCustomization,
      date: "4 days ago",
      title:
        "Dynamics 365 CRM Customization: Tailoring Solutions for Your Sales Team",
      link: "DynamicsCRMCustomization",
    },
    {
      image: ContentMarketingSecrets,
      date: "4 days ago",
      title: "Content Marketing Secrets to Dominate Social Media in 2025",
      link: "ContentMarketing",
    },
    {
      image: TransformBusinessProcess,
      date: "4 days ago",
      title:
        "Low-Code Revolution: How Power Apps Can Transform Your Business Processes",
      link: "LowcodeRevolution",
    },
    {
      image: FluttervsReactNativeforStartupsin2025,
      date: "4 days ago",
      title:
        "Mobile App Development: Flutter vs React Native for Startups in 2025",
      link: "MobileAppDevelopment",
    },
    {
      image: Dynamics365CRMCustomization,
      date: "4 days ago",
      title:
        "Dynamics 365 CRM Customization: Tailoring Solutions for Your Sales Team",
      link: "DynamicsCRMCustomization",
    },
    {
      image: ContentMarketingSecrets,
      date: "4 days ago",
      title: "Content Marketing Secrets to Dominate Social Media in 2025",
      link: "ContentMarketing",
    },
    {
      image: TransformBusinessProcess,
      date: "4 days ago",
      title:
        "Low-Code Revolution: How Power Apps Can Transform Your Business Processes",
      link: "LowcodeRevolution",
    },
    {
      image: FluttervsReactNativeforStartupsin2025,
      date: "4 days ago",
      title:
        "Mobile App Development: Flutter vs React Native for Startups in 2025",
      link: "MobileAppDevelopment",
    },
    {
      image: Dynamics365CRMCustomization,
      date: "4 days ago",
      title:
        "Dynamics 365 CRM Customization: Tailoring Solutions for Your Sales Team",
      link: "DynamicsCRMCustomization",
    },
    {
      image: ContentMarketingSecrets,
      date: "4 days ago",
      title: "Content Marketing Secrets to Dominate Social Media in 2025",
      link: "ContentMarketing",
    },
    {
      image: TransformBusinessProcess,
      date: "4 days ago",
      title:
        "Low-Code Revolution: How Power Apps Can Transform Your Business Processes",
      link: "LowcodeRevolution",
    },
    {
      image: FluttervsReactNativeforStartupsin2025,
      date: "4 days ago",
      title:
        "Mobile App Development: Flutter vs React Native for Startups in 2025",
      link: "MobileAppDevelopment",
    },
    {
      image: Dynamics365CRMCustomization,
      date: "4 days ago",
      title:
        "Dynamics 365 CRM Customization: Tailoring Solutions for Your Sales Team",
      link: "DynamicsCRMCustomization",
    },
    {
      image: ContentMarketingSecrets,
      date: "4 days ago",
      title: "Content Marketing Secrets to Dominate Social Media in 2025",
      link: "ContentMarketing",
    },
  ];

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = blogItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(blogItems.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="row pt-3 pt-md-5" ref={blogCardsRef}>
        {currentItems.map((blogItem, index) => (
          <div className="col-md-3 pb-4 col-sm-6" key={index}>
            <Link
              to={home ? `/Blogs/${blogItem.link}` : blogItem.link}
              className="blogCard"
            >
              <figure className="pb-2 m-0">
                <img
                  src={blogItem.image}
                  alt={blogItem.title}
                  className="img-fluid rounded-3"
                />
              </figure>
              <article>
                <p className="p-0 m-0">
                  <small className="text-primary-color">{blogItem.date}</small>
                </p>
                <h5 className="text-secondary-color font-regular">
                  {blogItem.title}
                </h5>
              </article>
            </Link>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="row">
          <div className="col-12">
            <nav aria-label="Blog pagination">
              <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                </li>
                {[...Array(totalPages)].map((_, index) => (
                  <li 
                    key={index} 
                    className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}
                  >
                    <button
                      className="page-link"
                      onClick={() => paginate(index + 1)}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button 
                    className="page-link" 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeBlogs;
