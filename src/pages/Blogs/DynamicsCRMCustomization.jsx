import React from "react";
import { Link } from "react-router-dom";
import SubPageHeader from "../../components/SubPageHeader";
import RecentBlogsWrapper from "../../components/RecentBlogsWrapper";
import Dynamics365CRMCustomization from "../../assets/images/blog/Dynamics365CRMCustomization.jpg";

const DynamicsCRMCustomization = () => {
  const subTitle = "Blogs";
  const title =
    "Dynamics 365 CRM Customization: Tailoring Solutions for Your Sales Team";
  return (
    <main className="Subpage">
      <section className="subpageHeader">
        <SubPageHeader subtitle={subTitle} title={title} />
        <div className="container">
          <div className="BreadCrumb pt-4">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/Blogs">{subTitle}</Link>
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
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="BlogArticle pb-2 pb-md-5">
                <figure className="pb-3">
                  <img
                    src={Dynamics365CRMCustomization}
                    alt={title}
                    className="img-fluid"
                  />
                </figure>
                <h4>Tailoring Dynamics 365 CRM for Sales Success</h4>
                <p>
                  A generic CRM often creates more work than it saves. Dynamics
                  365 CRM changes this by letting you customize the platform to
                  match how your sales team actually works, not the other way
                  around.
                </p>
                <h4>Making the CRM Work for You</h4>
                <p>
                  Sales teams waste countless hours on manual data entry and
                  chasing dead-end leads. Dynamics 365 fixes this by adapting to
                  your sales process. Automate routine follow-ups so reps spend
                  time selling, not typing. Build dashboards that show exactly
                  which deals need attention right now. Connect seamlessly with
                  tools like Outlook and LinkedIn so everything works in one
                  place.
                </p>
                <h4>Smart Customizations That Deliver Results</h4>
                <p>
                  Forget overhauling everything at once. Start by fixing what
                  hurts most:
                </p>
                <ul className="list-items">
                  <li>
                    Tweak lead scoring to surface hot prospects automatically
                  </li>
                  <li>
                    Reshape the sales pipeline to mirror your actual deal stages
                  </li>
                  <li>
                    Deploy AI tools that flag risky deals before they stall
                  </li>
                </ul>
                <p>
                  The real power comes when field teams get the same insights on
                  their phones as in the office, ensuring no opportunity slips
                  through the cracks.
                </p>
                <h4>Why It Works</h4>
                <p>
                  When your CRM stops being a data graveyard and starts guiding
                  decisions, everything changes. Deals move faster. Forecasts
                  get accurate. Teams sell more. The best part? You don’t need
                  IT to make it happen—sales leaders can shape the system
                  themselves.
                </p>
              </div>
            </div>
            <div className="blogSection">
              <h4 className="font-semibold text-secondary-color">
                Recent Posts
              </h4>
              <RecentBlogsWrapper />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DynamicsCRMCustomization;
