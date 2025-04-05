import React from 'react';
import { Link } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';
import About01Image from "../assets/images/aboutimg01.jpg";
import About02Image from "../assets/images/aboutimg02.jpg";


const Home = () => {
  const aboutWelcome="Welcome";
  const aboutTitle="Pluse Quest";
  const headingtitle="At Pluse Quest, we bring innovation, expertise, and passion to help businesses thrive in the digital age.";
  const aboutDesc="Whether you need skilled resources for Microsoft Power Platform and Dynamics 365 Customer Engagement, impactful digital marketing strategies, or stunning web and mobile app development, we’re your trusted technology partner."
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

        </main>
    </>
  )
}

export default Home
