import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubPageHeader from "../components/SubPageHeader";
import About01Img from "../assets/images/about01.jpg";
import About02Img from "../assets/images/about02.jpg";
import Teampic from "../assets/images/teampic.jpg";

const About = () => {
  const whoWeAreRef = useRef(null);
  const whyPartnerRef = useRef(null);
  const teamRef = useRef(null);

  const subTitle ="About Us";
  const title ="Empowering Your Business with Cutting-Edge Digital Solutions";
  const teamMembers = [
    {
      image: Teampic,
      name: "Ravi Kumar B",
      designation: "CEO",
    },
    {
      image: Teampic,
      name: "Team Name",
      designation: "Director - Technologies", 
    },
    {
      image: Teampic,
      name: "Team Name will be here",
      designation: "Director Finance",
    },
    {
      image: Teampic,
      name: "Team Name will be here",
      designation: "Human Resource",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Who We Are Section Animation
    gsap.from(whoWeAreRef.current.querySelector('img'), {
      y: -100,
      opacity: 0,
      duration: 0.8,
      once: true
    });

    gsap.from(whoWeAreRef.current.querySelector('.col-md-6:last-child'), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      once: true
    });

    // Why Partner Section Animation
    gsap.from(whyPartnerRef.current.querySelector('img'), {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: whyPartnerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(whyPartnerRef.current.querySelectorAll('.list-items li'), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: whyPartnerRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Team Section Animation
    gsap.from(teamRef.current.querySelector('h2'), {
      y: -50,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: teamRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(teamRef.current.querySelectorAll('.col-md-3'), {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: teamRef.current,
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
                  <li className="breadcrumb-item active" aria-current="page">
                    {subTitle}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
      </section>
      <section className="subpageContent">
        <div className="container">
          <div className="row" ref={whoWeAreRef}>
            <div className="col-md-6">
              <img src={About01Img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 align-self-center">
              <h2>Who We Are</h2>
              <p>
                PluseQuest Technology is a fast-growing IT services company
                focused on delivering business value through tailored technology
                solutions. Our mission is to empower organizations with powerful
                tools, intelligent automation, and creative strategies that
                drive results.
              </p>
              <p>
                With a team of certified professionals and industry experts, we
                help clients accelerate digital transformation using the
                Microsoft ecosystem, modern marketing techniques, and
                user-centric development.
              </p>

              <p>
                <strong>                  
                    Building Digital Futures, One Solution at a Time:
                </strong>
                At PluseQuest, we don't just adapt to the digital world—we help
                you lead it. Specializing in Microsoft Power Platform, Dynamics
                365, and custom development, we turn complex challenges into
                seamless, scalable solutions.
              </p>
            </div>
          </div>

          <div className="row py-2 py-md-5" ref={whyPartnerRef}>
            <div className="col-md-6 order-lg-last whycol01">
              <img src={About02Img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 align-self-center whycol02">
              <h2>Why Partner With Us?</h2>
              <ul className="list-items">
                <li>
                  <strong>Microsoft Masters:</strong> From automating workflows
                  with Power Apps to revolutionizing CRM with Dynamics 365, we
                  unlock the full potential of your tech stack.
                </li>
                <li>
                  <strong>Marketing That Moves Needles:</strong> Data-driven
                  campaigns that cut through the noise and drive growth.
                </li>
                <li>
                  <strong>Code That Connects:</strong> Bespoke web and mobile
                  apps designed for real users—not just checkboxes.
                </li>
              </ul>
            </div>
          </div>

          <div className="row" ref={teamRef}>
            <div className="col-md-12">
              <h2>Our Team</h2>
            </div>
            {teamMembers.map((member) => (
              <div className="col-md-3 col-6">
                <figure className="teampic">
                  <img
                    src={member.image}
                    alt=""
                    className="img-fluid teamPic rounded-3"
                  />
                </figure>
                <article className="text-center team-desc">
                  <h5 className="font-bold font-secondary">{member.name}</h5>
                  <p>{member.designation}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
