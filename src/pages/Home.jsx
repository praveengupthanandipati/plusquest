import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HomeBanner from "../components/HomeBanner";
import HomeServices from "../components/HomeServices";
import RecentBlogsWrapper from "../components/RecentBlogsWrapper";
import About01Image from "../assets/images/aboutimg01.jpg";
import About02Image from "../assets/images/aboutimg02.jpg";
import WhyImageHome from "../assets/images/whyimg.png";



const Home = () => {
  const aboutWelcome = "Welcome";
  const aboutTitle = "Pluse Quest";
  const headingtitle = "Transforming businesses through digital innovation";
  const aboutDesc =
    "Whether you need skilled resources for Microsoft Power Platform and Dynamics 365 Customer Engagement, impactful digital marketing strategies, or stunning web and mobile app development, we're your trusted technology partner.";
  const serviceWelcome = "Services We Offer";
  const serviceMainTitle = "Certified Excellence";
  const serviceSectiontitledesc =
    "Our certified experts drive digital transformation through Microsoft solutions, smart marketing, and intuitive development";

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    // About section animations
    gsap.from(".aboutImage1", {
      x: -100,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".AboutIntro",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".aboutImage2", {
      x: 100,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".AboutIntro",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".aboutContent", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".AboutIntro",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Service section animations
    gsap.from(".serviceTitle", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".serviceSection",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".serviceDesc", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".serviceSection",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Why Choose section animations
    gsap.from(".why-image", {
      y: -100,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".whyChooseSection",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".whyrow", {
      x: 100,
      opacity: 0,
      duration: 0.6,
      stagger: {
        amount: 0.4,
        ease: "power2.out"
      },
      scrollTrigger: {
        trigger: ".whyChooseSection",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    // Contact section animations
    gsap.from(".contact-heading", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".contact-desc", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.from(".contact-btn", {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".contactSection",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });
  });

  const whyChooseCards = [
    {
      id:1,
      icon: "person-check",
      title: "Certified Experts in Microsoft Power Platform and Dynamics 365",
      desc: "Our skilled developers use the latest technologies to build fast, secure, and scalable websites tailored to your business needs for maximum growth.",
    },
    {
      id:2,
      icon: "window-split",
      title:
        "Flexible Engagement Models – from project-based to staff augmentation",
      desc: "We create unique, responsive websites and apps that align with your brand identity, ensuring an engaging user experience and higher conversions.",
    },
    {
      id:3,
      icon: "palette2",
      title: "Client-Centric Approach – We listen, understand, and deliver",
      desc: "Trusted by leading brands, we deliver high-performing digital solutions backed by data-driven strategies and measurable success.",
    },
    {
      id:4,
      icon: "briefcase",
      title: "Scalable Solutions tailored to your business needs",
      desc: "Trusted by leading brands, we deliver high-performing digital solutions backed by data-driven strategies and measurable success.",
    },
  ];

  return (
    <>
      <main>
        <section className="homeBanner">
          <HomeBanner />
        </section>

        {/* About Intro */}
        <section className="AboutIntro homeSection">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-6">
                    <img
                      src={About01Image}
                      className="shadow rounded-4 homeAboutImage img-fluid aboutImage1"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6 position-relative">
                    <img
                      src={About02Image}
                      className="shadow rounded-4 homeAboutImage image2 img-fluid aboutImage2"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 align-self-center">
                <div className="aboutIntro pt-4 pt-md-0 aboutContent">
                  <h5 className="font-bold">{aboutWelcome}</h5>
                  <h2 className="text-uppercase text-primary-color font-bold">
                    {aboutTitle}
                  </h2>
                  <h5 className="font-bold">{headingtitle}</h5>
                  <p className="py-2">{aboutDesc}</p>
                  <Link className="btn-blue text-white" to="About">
                    <span className="text-uppercase"> Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="serviceSection homeSection">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h5 className="font-bold text-primary-color serviceTitle">
                  {serviceWelcome}
                </h5>
                <h2 className="font-bold text-secondary-color serviceTitle">
                  {serviceMainTitle}
                </h2>
              </div>
              <div className="col-md-6">
                <p className="serviceDesc">{serviceSectiontitledesc}</p>
              </div>
            </div>
            <div className="serviceCards">
              <HomeServices />
            </div>
          </div>
        </section>

        <section className="whyChooseSection homeSection">
          <div className="container">
            <h2 className="sectiontitle font-bold position-relative text-secondary-color">
              Why Choose Pluse Quest
            </h2>
            <div className="row pt-2 pt-md-5">
              <div className="col-md-6">
                <img src={WhyImageHome} className="img-fluid why-image" alt="Why Choose Us" />
              </div>
              <div className="col-md-6 align-self-center">
                {whyChooseCards.map((whycard) => (
                  <div className="pb-2 whyrow row" key={whycard.id}>
                    <div className="col-md-2">
                      <span className="icon d-flex justify-content-center align-items-center mx-auto">
                        <i className={`bi bi-${whycard.icon}`}></i>
                      </span>
                    </div>
                    <div className="col-md-10">
                      <article>
                        <h6 className="font-semibold pb-2 text-secondary-color">
                          {whycard.title}
                        </h6>
                        <p>{whycard.desc}</p>
                      </article>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="homeSection blogSection">
          <div className="container">
            <div className="row pb-3 pb-md-0">
              <div className="col-md-6">
                <h2 className="sectiontitle font-bold position-relative text-secondary-color pb-4 pb-md-0">
                  White Papers, Blog, News
                </h2>
              </div>
              <div className="col-md-6 text-lg-end">
                <Link className="btn-green text-white" to="Blogs">
                  <span className="text-uppercase"> View All</span>
                </Link>
              </div>
            </div>
            <RecentBlogsWrapper />
          </div>
        </section>

        <section className="homeSection contactSection">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <article className="text-center">
                  <h5 className="font-bold text-secondary-color contact-heading">
                  Have a web project in mind or need expert tech talent? Plus Quest is here to turn your vision into reality. 
                  </h5>
                  <p className="py-2 contact-desc">
                  Whether you need a custom website built, a complex web app developed, AI-powered solutions integrated, or data-driven insights for your business, reach out to us. We're passionate about answering your questions, supporting your digital goals, and delivering cutting-edge web development and AI services. Let's collaborate to create something extraordinary — get in touch today!
                  </p>
                  <Link className="btn-green text-white contact-btn" to="Contact">
                    <span className="text-uppercase"> Contact us</span>
                  </Link>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
