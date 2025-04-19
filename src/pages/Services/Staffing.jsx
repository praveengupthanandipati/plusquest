import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubPageHeader from "../../components/SubPageHeader";
import Staffing01Img from "../../assets/images/staffing01.jpg";
import Staffing02Img from "../../assets/images/staffing02.jpg";

const Staffing = () => {
  const advantagesRef = useRef(null);
  const firstSectionRef = useRef(null);
  const subTitle ="Services:Staffing Services";
  const title ="Expert IT staffing solutions for startups and enterprises worldwide.";

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // First Section Animation
    gsap.from(firstSectionRef.current.querySelector('img'), {
      y: -100,
      opacity: 0,
      duration: 0.5,
      repeat: 0,
    });

    gsap.from(firstSectionRef.current.querySelector('h2'), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      repeat: 0,
    });

    gsap.from(firstSectionRef.current.querySelectorAll('.list-items li'), {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      repeat: 0,
    });

    // Advantages Section Animation
    gsap.from(advantagesRef.current.querySelector('img'), {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: advantagesRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(advantagesRef.current.querySelector('h2'), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: advantagesRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(advantagesRef.current.querySelectorAll('.list-items li'), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: advantagesRef.current,
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
              <img src={Staffing01Img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Strategic Staffing Solutions for Agile Businesses</h2>
              <p>
                PlusQuest bridges the gap between top-tier talent and
                forward-thinking organizations. Our staffing services deliver
                vetted, high-performance professionals—from IT specialists to
                executive leadership—tailored to your project needs and company
                culture.
              </p>
              <ul className="list-items">
                <li>
                  <strong>Temporary Staffing</strong> – Short-term experts for
                  project-based needs.
                </li>
                <li>
                  <strong>Permanent Placement</strong> – Long-term hires aligned
                  with your goals.
                </li>
                <li>
                  <strong>Contract-to-Hire</strong> – Flexible trial periods to
                  ensure fit.
                </li>
                <li>
                  <strong>Executive Search</strong> – C-level and niche industry
                  leadership.
                </li>
                <li>
                  <strong>Offshore Staffing</strong> – Cost-effective global
                  talent solutions.
                </li>
              </ul>
            </div>
          </div>

          <div className="row py-2 py-md-5" ref={advantagesRef}>
            <div className="col-md-6 order-md-last">
              <img src={Staffing02Img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Advantages of PlusQuest Staffing</h2>
              <p>
                Why Partner with PlusQuest?
              </p>
              <ul className="list-items">
                <li>
                  <strong>Industry-Specific Expertise</strong> – Deep knowledge of tech, healthcare, finance, and more.
                </li>
                <li>
                  <strong> Rigorous Vetting</strong> – 5-step screening for skills, culture fit, and reliability.
                </li>
                <li>
                  <strong>Fast Turnaround</strong> – 48-hour shortlisting for urgent roles.
                </li>
                <li>
                  <strong>Cost Transparency </strong> – No hidden fees, competitive pricing.
                </li>
                <li>
                  <strong>Scalable Solutions</strong> –  From startups to enterprise teams.
                </li>
                <li>
                  <strong>Dedicated Support </strong> –  Single-point contact for seamless coordination.
                </li>
              </ul>
            </div>
          </div>          
        </div>
      </section>
    </main>
  );
};

export default Staffing;
