import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import banner01 from "../assets/images/banner01img.jpg";
import banner02 from "../assets/images/banner02img.jpg"
import banner03 from "../assets/images/banner03img.jpg"
import banner04 from "../assets/images/banner04img.jpg"
import banner05 from "../assets/images/banner05img.jpg"

const HomeBanner = () => {
    const homeBanners = [
        {
            id: 1,
            title: "Empowering Your Business with Cutting-Edge Digital Solutions",
            subTitle:"PluseQuest Technology",
            image:banner01            
        },
        {
            id: 2,
            title: "Empowering Your Business with Cutting-Edge Digital Solutions",
            subTitle:"PluseQuest Technology",
            image:banner02            
        },
        {
            id: 3,
            title: "Empowering Your Business with Cutting-Edge Digital Solutions",
            subTitle:"PluseQuest Technology",
            image:banner03            
        },
        {
            id: 4,
            title: "Empowering Your Business with Cutting-Edge Digital Solutions",
            subTitle:"PluseQuest Technology",
            image:banner04            
        },
        {
            id: 5,
            title: "Empowering Your Business with Cutting-Edge Digital Solutions",
            subTitle:"PluseQuest Technology",
            image:banner05         
        },
    ]
  return (
    <>
       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {homeBanners.map((banner)=>(  
            <SwiperSlide>
                <div className='container-fluid'>
                    <div className="row justify-content-between">
                        <div className="col-md-6 align-self-center">
                             <article>
                                <h5>{banner.subTitle}</h5>
                                <h1 className="bannerTitle font-bold">
                                   {banner.title}
                                </h1>
                             </article>
                        </div>
                        <div className="col-md-5">
                            <img src={banner.image} alt="" className='img-fluid img-banner w-100'/>
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
