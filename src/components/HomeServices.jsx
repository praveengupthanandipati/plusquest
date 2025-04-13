import React from 'react';
import { Link as Likk } from 'react-router-dom';
import Powerplatformimg from "../assets/images/powerplatform-home-img.jpg";
import SocialMediaHomeImg from "../assets/images/social-media-home-img.jpg";
import WebnMobileHomeImg from "../assets/images/webnmob-img-home.jpg";
import hrHomeImg from "../assets/images/recruting-hr-home-img.jpg";


const HomeServices = () => {
    const serviceCards=[
        {
            id:1,
            image:Powerplatformimg,
            title:"Power Platform & Dynamics 365 CE Resources",
            link:"Services/PowerPlatform"
        },
        {
            id:2,
            image:SocialMediaHomeImg,
            title:"Digital & Social Media Marketing",
            link:"Services/DigitalMarketing"
        },
        {
            id:3,
            image:WebnMobileHomeImg,
            title:"Website & Mobile App Development",
            link:"Services/WebMobileDevelopment"
        },
        {
            id:4,
            image:hrHomeImg,
            title:"Staffing and Recruiting HR Services",
            link:"Services/Staffing"
        },
    ]
  return (
    <div>
       <div className="row cardsRow">
        {serviceCards.map((card, index)=>(
            <div className="col-md-3" key={card.id || index}>
                <div className="serviceCard position-relative">
                     <Likk to={card.link}>
                        <figure>
                            <img src={card.image} className='img-fluid' alt={card.title}/>
                        </figure>
                        <article className="position-absolute p-4">
                            <h3 className="font-bold text-white">{card.title}</h3>
                        </article>
                        <span className="position-absolute rounded-circle"><i className="bi bi-arrow-up-right"></i></span>
                     </Likk>
                </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default HomeServices
