import React from "react";
import { Link } from "react-router-dom";
import SubPageHeader from "../../components/SubPageHeader";
import Staffing01Img from "../../assets/images/staffing01.jpg";
import Staffing02Img from "../../assets/images/staffing02.jpg";

const Staffing = () => {
  const subTitle ="Services:Staffing Services";
  const title ="Expert IT staffing solutions for startups and enterprises worldwide.";
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
                    <li className="breadcrumb-item">
                      <Link to="/">{subTitle}</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {title}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
      </section>

      <section className="subpageContent">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Staffing01Img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Strategic Staffing Solutions for Agile Businesses</h2>
              <p>
                PlusQuest bridges the gap between top-tier talent and
                forward-thinking organizations. Our staffing services deliver
                vetted, high-performance professionals—from IT specialists to
                executive leadership—tailored to your project needs and company
                culture.
              </p>
              <ul className="list-items">
                <li>
                  <strong>Temporary Staffing</strong> – Short-term experts for
                  project-based needs.
                </li>
                <li>
                  <strong>Permanent Placement</strong> – Long-term hires aligned
                  with your goals.
                </li>
                <li>
                  <strong>Contract-to-Hire</strong> – Flexible trial periods to
                  ensure fit.
                </li>
                <li>
                  <strong>Executive Search</strong> – C-level and niche industry
                  leadership.
                </li>
                <li>
                  <strong>Offshore Staffing</strong> – Cost-effective global
                  talent solutions.
                </li>
              </ul>
            </div>
          </div>

          <div className="row  py-2 py-md-5">
            <div className="col-md-6 order-lg-last">
              <img src={Staffing02Img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2>Advantages of PlusQuest Staffing</h2>
              <p>
                Why Partner with PlusQuest?
              </p>
              <ul className="list-items">
                <li>
                  <strong>Industry-Specific Expertise</strong> – Deep knowledge of tech, healthcare, finance, and more.
                </li>
                <li>
                  <strong> Rigorous Vetting</strong> – 5-step screening for skills, culture fit, and reliability.
                </li>
                <li>
                  <strong>Fast Turnaround</strong> – 48-hour shortlisting for urgent roles.
                </li>
                <li>
                  <strong>Cost Transparency </strong> – No hidden fees, competitive pricing.
                </li>
                <li>
                  <strong>Scalable Solutions</strong> –  From startups to enterprise teams.
                </li>
                <li>
                  <strong>Dedicated Support </strong> –  Single-point contact for seamless coordination.
                </li>
              </ul>
            </div>
          </div>          
        </div>
      </section>
    </main>
  );
};

export default Staffing;
