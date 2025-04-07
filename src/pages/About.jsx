import React from "react";
import SubPageHeader from "../components/SubPageHeader";
import About01Img from "../assets/images/about01.jpg";
import About02Img from "../assets/images/about02.jpg";
import Teampic from "../assets/images/teampic.jpg";

const About = () => {
  const teamMembers = [
    {
      image: Teampic,
      name: "Ravi Kumar B",
      designation: "CEO",
    },
    {
      image: Teampic,
      name: "Team Name",
      designation: "Director - Technologies",
    },
    {
      image: Teampic,
      name: "Team Name will be here",
      designation: "Director Finance",
    },
    {
      image: Teampic,
      name: "Team Name will be here",
      designation: "Human Resource",
    },
  ];
  return (
    <main className="Subpage">
      <section className="subpageHeader">
        <SubPageHeader
          subtitle={"About Us"}
          title={"Empowering Your Business with Cutting-Edge Digital Solutions"}
        />
      </section>
      <section className="subpageContent">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={About01Img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 align-self-center">
              <h2>Who We Are</h2>
              <p>
                PluseQuest Technology is a fast-growing IT services company
                focused on delivering business value through tailored technology
                solutions. Our mission is to empower organizations with powerful
                tools, intelligent automation, and creative strategies that
                drive results.
              </p>
              <p>
                With a team of certified professionals and industry experts, we
                help clients accelerate digital transformation using the
                Microsoft ecosystem, modern marketing techniques, and
                user-centric development.
              </p>

              <p>
                <strong>
                  {" "}
                  Building Digital Futures, One Solution at a Time:
                </strong>{" "}
                At PluseQuest, we don’t just adapt to the digital world—we help
                you lead it. Specializing in Microsoft Power Platform, Dynamics
                365, and custom development, we turn complex challenges into
                seamless, scalable solutions.
              </p>
            </div>
          </div>

          <div className="row py-2 py-md-5">
            <div className="col-md-6 order-lg-last">
              <img src={About02Img} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 align-self-center">
              <h2>Why Partner With Us?</h2>
              <ul className="list-items">
                <li>
                  <strong>Microsoft Masters:</strong> From automating workflows
                  with Power Apps to revolutionizing CRM with Dynamics 365, we
                  unlock the full potential of your tech stack.
                </li>
                <li>
                  <strong>Marketing That Moves Needles:</strong> Data-driven
                  campaigns that cut through the noise and drive growth.
                </li>
                <li>
                  <strong>Code That Connects:</strong> Bespoke web and mobile
                  apps designed for real users—not just checkboxes.
                </li>
              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2>Our Team</h2>
            </div>
            {teamMembers.map((member) => (
              <div className="col-md-3">
                <figure className="teampic">
                  <img
                    src={member.image}
                    alt=""
                    className="img-fluid teamPic rounded-3"
                  />
                </figure>
                <article className="text-center team-desc">
                  <h5 className="font-bold font-secondary">{member.name}</h5>
                  <p>{member.designation}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
