import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubPageHeader from "../../components/SubPageHeader";
import DigitalMarketingImg01 from "../../assets/images/digitalmakrketing01.jpg";
import DigitalMarketingImg02 from "../../assets/images/digitalmakrketing02.jpg";

const DigitalMarketing = () => {
  const resourcesRef = useRef(null);
  const firstSectionRef = useRef(null);
  const subTitle ="Services:Digital & Social Media Marketing";
  const title ="Grow your brand presence with our data-driven marketing solutions";

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // First Section Animation
    gsap.from(firstSectionRef.current.querySelector('img'), {
      y: -100,
      opacity: 0,
      duration: 0.8,
      once: true
    });

    gsap.from(firstSectionRef.current.querySelector('.col-md-6:last-child'), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      once: true
    });

    // Resources Section Animation
    gsap.from(resourcesRef.current.querySelector('img'), {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: resourcesRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(resourcesRef.current.querySelector('h2'), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: resourcesRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(resourcesRef.current.querySelectorAll('.list-items li'), {
      x: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: resourcesRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
    <main className="Subpage">
      <section className="subpageHeader">
        <SubPageHeader
          subtitle={subTitle}
          title={title}
        />
         <div className="container">
          <div className="BreadCrumb pt-4">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/">{subTitle}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
      </section>
      <section className="subpageContent">
        <div className="container">
          <div className="row" ref={firstSectionRef}>
            <div className="col-md-6">
              <img src={DigitalMarketingImg01} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Social Media Management & Advertising</h2>
              <p>
                Elevate your brand with data-driven digital strategies,
                including SEO, PPC ads, and engaging content tailored for
                Google, Facebook, Instagram, and LinkedIn. We optimize campaigns
                to attract high-quality leads, drive conversions, and maximize
                your ROI. Our expertise ensures measurable growth and a
                competitive edge in today's fast-paced digital landscape.
              </p>
              <p>
                Build lasting connections through targeted social media
                campaigns, influencer collaborations, and community management.
                We craft compelling content that sparks engagement, strengthens
                brand loyalty, and converts followers into customers. From
                analytics to creative storytelling, we deliver results that
                align with your business goals and audience preferences.
              </p>
            </div>
          </div>

          <div className="row py-2 py-md-5" ref={resourcesRef}>
            <div className="col-md-6 order-md-last">
              <img src={DigitalMarketingImg02} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 align-self-center">
              <h2> Resources</h2>
              <ul className="list-items">
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-Per-Click (PPC) Campaigns</li>
                <li>Content Strategy & Creation</li>
                <li>Email Marketing</li>
                <li>We craft strategies that connect, engage, and convert.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalMarketing;
