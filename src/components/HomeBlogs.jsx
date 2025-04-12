import React from "react";
import { Link } from "react-router-dom";
import MicrosoftPowerPlatform from "../assets/images/blog/blog01img_MicrosoftPowerPlatform.jpg";
import SocialMediaMarketing from "../assets/images/blog/blog02img_SocilmediaMarketing.jpg";
import Reactjsbestchoice from "../assets/images/blog/blog03img_reactjsbestchoice.jpg";
import TechStartups from "../assets/images/blog/blog04img_Techstartups.jpg";
import TransformBusinessProcess from "../assets/images/blog/blog05img_PowerAppsTransformyourBusinessProcess.jpg";
import FluttervsReactNativeforStartupsin2025 from "../assets/images/blog/FluttervsReactNativeforStartupsin2025.jpg";
import Dynamics365CRMCustomization from "../assets/images/blog/Dynamics365CRMCustomization.jpg";
import ContentMarketingSecrets from "../assets/images/blog/ContentMarketingSecrets.jpg";

const HomeBlogs = ({ home = false }) => {
  const blogItems = [
    {
      image: MicrosoftPowerPlatform,
      date: "4 days ago",
      title:
        "Power Platform vs Dynamics 365: Which Microsoft Solution Fits Your Business Needs?",
      link: "MicrosoftPowerPlatform",
    },
    {
      image: SocialMediaMarketing,
      date: "4 days ago",
      title:
        "5 Social Media Marketing Hacks to Skyrocket Your Startup’s Growth in 2025",
      link: "SocialMediaMarketingHacks",
    },
    {
      image: Reactjsbestchoice,
      date: "4 days ago",
      title:
        "Why React.js is the Best Choice for Your Startup’s Website in 2025",
      link: "WhyrjsisthebestChoice",
    },
    {
      image: TechStartups,
      date: "4 days ago",
      title: "The Ultimate Guide to Staffing Solutions for Tech Startups",
      link: "TheUltimateGuideStaffing",
    },
    {
      image: TransformBusinessProcess,
      date: "4 days ago",
      title:
        "Low-Code Revolution: How Power Apps Can Transform Your Business Processes",
      link: "LowcodeRevolution",
    },
    {
      image: FluttervsReactNativeforStartupsin2025,
      date: "4 days ago",
      title:
        "Mobile App Development: Flutter vs React Native for Startups in 2025",
      link: "MobileAppDevelopment",
    },
    {
      image: Dynamics365CRMCustomization,
      date: "4 days ago",
      title:
        "Dynamics 365 CRM Customization: Tailoring Solutions for Your Sales Team",
      link: "DynamicsCRMCustomization",
    },
    {
      image: ContentMarketingSecrets,
      date: "4 days ago",
      title: "Content Marketing Secrets to Dominate Social Media in 2025",
      link: "ContentMarketing",
    },
  ];

  return (
    <div className="row pt-3 pt-md-5">
      {blogItems.map((blogItem, index) => (
        <div className="col-md-3 pb-4" key={index}>
          <Link
            to={home ? `/Blogs/${blogItem.link}` : blogItem.link}
            className="blogCard"
          >
            <figure className="pb-2 m-0">
              <img
                src={blogItem.image}
                alt={blogItem.title}
                className="img-fluid rounded-3"
              />
            </figure>
            <article>
              <p className="p-0 m-0">
                <small className="text-primary-color">{blogItem.date}</small>
              </p>
              <h5 className="text-secondary-color font-regular">
                {blogItem.title}
              </h5>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomeBlogs;
