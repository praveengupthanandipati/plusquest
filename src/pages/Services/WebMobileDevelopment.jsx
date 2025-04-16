import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubPageHeader from "../../components/SubPageHeader";
import WebdevelopmentImage from "../../assets/images/webdevelopment.jpg";
import mobDevelopmentImage from "../../assets/images/mobile-development.jpg";
import webnmobileDevelopment from "../../assets/images/webnmobiledevelopment.jpg";

const WebMobileDevelopment = () => {
  const mobileAppRef = useRef(null);
  const developmentRef = useRef(null);
  const firstSectionRef = useRef(null);
  const subTitle ="Services:Website & Mobile App Development";
  const title ="Expert Web & Mobile App Development: Fast, Scalable, User-Focused Solutions";

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // First Section Animation
    gsap.from(firstSectionRef.current.querySelector('img'), {
      y: -100,
      opacity: 0,
      duration: 0.8,
      once: true
    });

    gsap.from(firstSectionRef.current.querySelector('.col-md-6:first-child'), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      once: true
    });

    // Mobile App Section Animation
    gsap.from(mobileAppRef.current.querySelector('img'), {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: mobileAppRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(mobileAppRef.current.querySelector('h2'), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: mobileAppRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(mobileAppRef.current.querySelectorAll('p'), {
      x: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: mobileAppRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Development Section Animation
    gsap.from(developmentRef.current.querySelector('img'), {
      x: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: developmentRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(developmentRef.current.querySelector('h2'), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: developmentRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(developmentRef.current.querySelectorAll('.list-items li'), {
      x: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: developmentRef.current,
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
              <h2>Custom Web Development for Modern Businesses</h2>
              <p>
                We build fast, secure, and scalable websites tailored to your
                brand's needs. Using cutting-edge technologies like React,
                Node.js, and WordPress, we deliver responsive designs that drive
                engagement and conversions. Our solutions are optimized for SEO,
                performance, and user experience.
              </p>
              <p>
                From e-commerce platforms to corporate sites, we combine clean
                code with intuitive design. Whether you need a simple landing
                page or a complex web app, our team ensures seamless
                functionality across all devices. Let's turn your vision into a
                digital reality.
              </p>
            </div>
            <div className="col-md-6">
              <img src={WebdevelopmentImage} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="row py-2 py-md-5" ref={mobileAppRef}>
            <div className="col-md-6 order-md-last align-self-center">
              <h2>Custom Mobile Apps for Business Growth</h2>
              <p>
                We craft high-performance iOS and Android apps using Flutter,
                React Native, and Swift for seamless functionality. Our
                user-centric designs prioritize intuitive navigation, speed, and
                offline capabilities to enhance engagement and retention. Every
                app is built for scalability and security.
              </p>
              <p>
                From e-commerce to enterprise solutions, we transform ideas into
                polished mobile experiences. Whether you need a startup MVP or a
                complex app, we ensure cross-platform compatibility and smooth
                performance. Let's bring your mobile vision to life.
              </p>
            </div>
            <div className="col-md-6">
              <img src={mobDevelopmentImage} alt="" className="img-fluid" />
            </div>
          </div>

          <div className="row py-2 py-md-5" ref={developmentRef}>
            <div className="col-md-6 align-self-center">
                <h2>Website & Mobile App Development</h2>
                <p>Bring your ideas to life with sleek, scalable, and secure digital products:</p>
               <ul className="list-items">
                  <li>Custom Website Design & Development</li>
                  <li>E-commerce Solutions</li>
                  <li>Cross-platform Mobile App Development (iOS & Android)</li>
                  <li>UI/UX Design</li>
                  <li>API Integration & Backend Development</li>
                  <li>We build digital experiences that users love.</li>
               </ul>
            </div>
            <div className="col-md-6">
              <img src={webnmobileDevelopment} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WebMobileDevelopment;
