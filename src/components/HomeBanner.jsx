import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner01 from "../assets/images/banner01img.jpg";
import banner02 from "../assets/images/banner02img.jpg"
import banner03 from "../assets/images/banner03img.jpg"
import banner04 from "../assets/images/banner04img.jpg"
import banner05 from "../assets/images/banner05img.jpg"

const HomeBanner = () => {
    const homeBanners = [
        {
            id: 1,
            titletext:"Cloud",
            title: "Unlock business potential with tailored Microsoft cloud solutions today ",
            subTitle:"Power Platform & Dynamics 365",
            image:banner01            
        },
        {
            id: 2,
            titletext:"Digital",
            title: "Elevate your brand through strategic digital engagement campaigns",
            subTitle:"Digital & Social Marketing",
            image:banner02            
        },
        {
            id: 3,
            titletext:"Web Dev",
            title: "Build scalable web and mobile solutions that drive growth",
            subTitle:"Web & Mobile App Development",
            image:banner03            
        },
        {
            id: 4,
            titletext:"Staffing",
            title: "Connect with top-tier professionals for your organizational needs",
            subTitle:"Staffing & HR Services",
            image:banner04            
        },
        {
            id: 5,
            titletext:"Technical",
            title: "Future-proof your business with our end-to-end tech expertise",
            subTitle:"Comprehensive Tech Services",
            image:banner05         
        },
    ]
  return (
    <>
       <Swiper 
        pagination={{
            clickable: true,
        }}
       modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
        delay: 8000,
        disableOnInteraction: false,}}
        loop={true}
        delay={4000}
       className="mySwiper"
       >
        {homeBanners.map((banner)=>(  
            <SwiperSlide>
                <div className='container position-relative'>
                 <div className='bannerTag text-uppercase'>{banner.titletext}</div>
                    <div className="row justify-content-between">                        
                        <div className="col-md-6 align-self-center">
                             <article>
                                <h5 className='text-uppercase font-semibold text-primary-color'>{banner.subTitle}</h5>
                                <h1 className="bannerTitle font-bold text-secondary-color">
                                   {banner.title}
                                </h1>
                             </article>
                        </div>
                        <div className="col-md-6 text-end">
                            <figure className='img-banner position-relative'>
                                <img src={banner.image} alt="" className='img-fluid '/>
                            </figure>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            ))}     
      </Swiper>
    </>
  )
}

export default HomeBanner
