import React from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import HomeServices from '../components/HomeServices';
import HomeBlogs from "../components/HomeBlogs";
import About01Image from "../assets/images/aboutimg01.jpg";
import About02Image from "../assets/images/aboutimg02.jpg";
import WhyImageHome from "../assets/images/whyimg.png";


const Home = () => {
  const aboutWelcome="Welcome";
  const aboutTitle="Pluse Quest";
  const headingtitle="Transforming businesses through digital innovation";
  const aboutDesc="Whether you need skilled resources for Microsoft Power Platform and Dynamics 365 Customer Engagement, impactful digital marketing strategies, or stunning web and mobile app development, we’re your trusted technology partner."
  const serviceWelcome="Services We Offer";
  const serviceMainTitle ="Certified Excellence";
  const serviceSectiontitledesc="Our certified experts drive digital transformation through Microsoft solutions, smart marketing, and intuitive development";

  const whyChooseCards=[
    {
      icon:"person-check",
      title:"Certified Experts in Microsoft Power Platform and Dynamics 365",
      desc:"Our skilled developers use the latest technologies to build fast, secure, and scalable websites tailored to your business needs for maximum growth."
    },
    {
      icon:"window-split",
      title:"Flexible Engagement Models – from project-based to staff augmentation",
      desc:"We create unique, responsive websites and apps that align with your brand identity, ensuring an engaging user experience and higher conversions."
    },
    {
      icon:"palette2",
      title:"Client-Centric Approach – We listen, understand, and deliver",
      desc:"Trusted by leading brands, we deliver high-performing digital solutions backed by data-driven strategies and measurable success."
    },
    {
      icon:"briefcase",
      title:"Scalable Solutions tailored to your business needs",
      desc:"Trusted by leading brands, we deliver high-performing digital solutions backed by data-driven strategies and measurable success."
    },
  ]

  return (
    <>
        <main>
            <section className='homeBanner'>
              <HomeBanner/>
            </section>

            {/* About Intro */}
            <section className="AboutIntro homeSection">
                <div className="container">
                   <div className="row">
                      <div className="col-md-6">
                          <div class="row">
                            <div class="col-md-6">
                                <img src={About01Image} className='shadow rounded-4 homeAboutImage img-fluid' alt="" />
                            </div>
                            <div class="col-md-6 position-relative">
                                <img src={About02Image} className='shadow rounded-4 homeAboutImage image2 position-absolute img-fluid' alt="" />
                            </div>                               
                          </div>
                      </div>
                      <div className="col-md-6 align-self-center">
                        <div className='aboutIntro'>
                            <h5 className='font-bold'>{aboutWelcome}</h5>
                            <h2 className="text-uppercase text-primary-color font-bold">{aboutTitle}</h2>
                            <h5 className="font-bold">{headingtitle}</h5>
                            <p class="py-2">{aboutDesc}</p>
                            <Link className="btn-blue text-white" to="">
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
                              <h5 className='font-bold text-primary-color'>{serviceWelcome}</h5>
                              <h2 className="font-bold text-secondary-color">{serviceMainTitle}</h2>
                         </div>
                         <div className="col-md-6">
                            <p>{serviceSectiontitledesc}</p>
                         </div>
                    </div>
                    <HomeServices/>
                </div>
            </section>

            <section className="whyChooseSection homeSection">
              <div className="container">
                  <h2 class="sectiontitle font-bold position-relative text-secondary-color">Why Choose Pluse Quest</h2>
                  <div className="row pt-2 pt-md-5">
                      <div className="col-md-6">
                          <img src={WhyImageHome} className="img-fluid"/>
                      </div>
                      <div className="col-md-6 align-self-center">
                        
                          {whyChooseCards.map((whycard)=>(
                           <div className="pb-2 whyrow row">
                              <div class="col-md-2">
                                  <span className="icon d-flex justify-content-center align-items-center mx-auto">
                                      <i class={`bi bi-${whycard.icon}`}></i>
                                  </span>
                              </div>
                              <div class="col-md-10">
                                  <article >
                                    <h6 className='font-semibold pb-2 text-secondary-color'>{whycard.title}</h6>
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
                    <div class="row">
                        <div class="col-md-6">
                            <h2 class="sectiontitle font-bold position-relative text-secondary-color">White Papers, Blog, News</h2>
                        </div>
                        <div className="col-md-6 text-end">
                            <Link className="btn-green text-white" to="">
                                <span className="text-uppercase"> View All</span>
                            </Link>
                        </div>
                    </div>
                    <HomeBlogs/>                    
                </div>
            </section>

            <section className="homeSection contactSection">
                <div className="container">
                    <div className="row  justify-content-center">
                        <div className="col-md-7">
                            <article className="text-center">
                                <h5 className="font-bold text-secondary-color">Have a project in mind or need tech talent? <br/>We're here to help.</h5>
                                <p className="py-2">Whether you have a question to ask, data to analyze, or an AI solution to build, please get in touch with us. We are always ready to answer your questions, support your data science-related activities and provide our AI services</p>
                                <Link className="btn-green text-white" to="">
                                  <span className="text-uppercase"> Contact us</span>
                                </Link>
                            </article>
                        </div>
                    </div>
                </div>      
            </section>            

        </main>
    </>
  )
}

export default Home
