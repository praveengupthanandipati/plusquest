import React from "react";
import { Link } from "react-router-dom";
import SubPageHeader from "../components/SubPageHeader";
import CareerImg01 from "../assets/images/careers01.jpg";
import CareerImg02 from "../assets/images/careers02.jpg";

const Careers = () => {
  const subTitle ="Careers";
  const title ="Join PlusQuest: Innovate, Grow & Thrive in Your Dream Career";
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
        <div className="container">
            <p>Join with us and Send your updated Resume to <Link to="mailto:careers@plusquest.com">careers@plusquest.com</Link></p>     
        </div>
      </section>
      <section className="subpageContent">
        <div className="container">      
            
          <div className="row">
            <div className="col-md-6">
              <img src={CareerImg01} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Grow With Purpose</h2>
              <p>
                Join PlusQuest to accelerate your career in a collaborative,
                innovative environment. We invest in your growth through
                mentorship, cutting-edge projects, and flexible work
                arrangements that balance ambition with wellbeing.
              </p>
              
              <p>
                Impactful work, skill development programs, competitive
                benefits, and inclusive teams define our culture. Build
                meaningful solutions while advancing your professional journey
                with structured career paths.
              </p>

              <ul className="list-items">
                <li>
                  <strong>Impactful Work</strong> – Solve real-world challenges
                  for global clients.
                </li>
                <li>
                  <strong>Learning Culture</strong> – Mentorship,
                  certifications, and skill development.
                </li>
                <li>
                  <strong>Flexible Pathways</strong> – Hybrid/remote roles,
                  cross-departmental projects.
                </li>
                <li>
                  <strong>Competitive Benefits</strong> – Health coverage,
                  bonuses, and wellness programs.
                </li>
                <li>
                  <strong>Inclusive Growth</strong> – Diversity-driven teams
                  with equal advancement.
                </li>
              </ul>
            </div>
          </div>

          <div className="row py-2 py-lg-5">
            <div className="col-md-6 order-lg-last">
              <img src={CareerImg02} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Advantages of PlusQuest Staffing</h2>              

              <ul className="list-items">
                <li>
                  <strong>Industry-Specific Expertise</strong> – Deep knowledge of tech, healthcare, finance, and more.
                </li>
                <li>
                  <strong>Rigorous Vetting</strong> – 5-step screening for skills, culture fit, and reliability.
                </li>
                <li>
                  <strong>Fast Turnaround</strong> – 48-hour shortlisting for urgent roles.
                </li>
                <li>
                  <strong>Cost Transparency</strong> – No hidden fees, competitive pricing.
                </li>
                <li>
                  <strong>Scalable Solutions</strong> –  From startups to enterprise teams.
                </li>
                <li>
                  <strong> Dedicated Support </strong> –  Single-point contact for seamless coordination.
                </li>
              </ul>
            </div>
          </div>


        </div>
      </section>
    </main>
  );
};

export default Careers;
