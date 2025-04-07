import React from "react";
import SubPageHeader from "../../components/SubPageHeader";
import DigitalMarketingImg01 from "../../assets/images/digitalmakrketing01.jpg";
import DigitalMarketingImg02 from "../../assets/images/digitalmakrketing02.jpg";

const DigitalMarketing = () => {
  return (
    <main className="Subpage">
      <section className="subpageHeader">
        <SubPageHeader
          subtitle={"Digital & Social Media Marketing"}
          title={
            "Grow your brand presence with our data-driven marketing solutions:"
          }
        />
      </section>
      <section className="subpageContent">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={DigitalMarketingImg01} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Social Media Management & Advertising</h2>
              <p>
                Elevate your brand with data-driven digital strategies,
                including SEO, PPC ads, and engaging content tailored for
                Google, Facebook, Instagram, and LinkedIn. We optimize campaigns
                to attract high-quality leads, drive conversions, and maximize
                your ROI. Our expertise ensures measurable growth and a
                competitive edge in today’s fast-paced digital landscape.
              </p>
              <p>
                Build lasting connections through targeted social media
                campaigns, influencer collaborations, and community management.
                We craft compelling content that sparks engagement, strengthens
                brand loyalty, and converts followers into customers. From
                analytics to creative storytelling, we deliver results that
                align with your business goals and audience preferences.
              </p>
            </div>
          </div>

          <div className="row py-2 py-md-5">
            <div className="col-md-6 order-lg-last">
              <img src={DigitalMarketingImg02} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 align-self-center">
              <h2> Resources</h2>
              <ul className="list-items">
                <li>Search Engine Optimization (SEO)</li>
                <li>Pay-Per-Click (PPC) Campaigns</li>
                <li>Content Strategy & Creation</li>
                <li>Email Marketing</li>
                <li>We craft strategies that connect, engage, and convert.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DigitalMarketing;
