import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubPageHeader from "../../components/SubPageHeader";
import PowerPlatformImg1 from "../../assets/images/powerplatform01.jpg";
import PowerPlatformImg2 from "../../assets/images/powerplatform02.jpg";

const PowerPlatform = () => {
  const resourcesRef = useRef(null);
  const firstSectionRef = useRef(null);
  const subTitle ="Services";
  const title ="Power Platform & Dynamics 365 CRM automation experts";

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
      y: 100,
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
      y: -50,
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
              <img src={PowerPlatformImg1} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Power Platform & Dynamics 365 CE</h2>
              <p>
                Accelerate your business with Microsoft Power Platform and
                Dynamics 365 Customer Engagement (CE)—powerful tools designed to
                streamline workflows, automate processes, and enhance customer
                relationships. Whether you need custom apps built with Power
                Apps, data insights from Power BI, or seamless CRM solutions,
                our certified experts deliver tailored strategies to drive
                efficiency and growth.
              </p>
              <p>
                From sales automation to AI-driven analytics, we help you unlock
                the full potential of Microsoft's ecosystem. Optimize
                operations, reduce manual tasks, and connect teams with
                scalable, cloud-based solutions—all while keeping your data
                secure and accessible. Let's transform the way you work.
              </p>
            </div>
          </div>

          <div className="row py-2 py-md-5" ref={resourcesRef}>
            <div className="col-md-6 order-md-last">
              <img src={PowerPlatformImg2} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2> Resources</h2>
              <p>
                We provide experienced consultants, developers, and architects specialized in:
              </p>
              <ul className="list-items"> 
                <li>Power Apps (Canvas & Model-Driven)</li>
                <li>Power Automate</li>
                <li>Power BI</li>
                <li>Power Virtual Agents</li>
                <li>Dynamics 365 Customer Engagement (Sales, Service, Marketing)</li>
                <li>Whether it's project-based consulting or long-term resourcing, we support your success at every step.</li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PowerPlatform;
