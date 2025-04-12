import React from "react";
import { Link } from "react-router-dom";
import SubPageHeader from "../components/SubPageHeader";
import Project01Image from "../assets/images/project01.jpg";
import Project02Image from "../assets/images/project02.jpg";
import Project03Image from "../assets/images/project03.jpg";

const Works = () => {
  const subTitle ="Our Work";
  const title ="Innovative Solutions, Measurable Results – See How We Deliver Excellence";
    const Projects =[
        {
            id:1,
            image:Project01Image,
            title:"Project Title will be here",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti placeat dolorum ipsum voluptatibus reprehenderit.",
            services:"Mobile App Development, UI/UX Design",
            solution:"Key actions (e.g., \"Built a Flutter app with 1-click checkout\").",
            link:"www.mysite.com"
        },
        {
            id:2,
            image:Project02Image,
            title:"Project Title will be here",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti placeat dolorum ipsum voluptatibus reprehenderit.",
            services:"Mobile App Development, UI/UX Design",
            solution:"Key actions (e.g., \"Built a Flutter app with 1-click checkout\").",
            link:"www.mysite.com"
        },
        {
            id:3,
            image:Project03Image,
            title:"Project Title will be here",
            description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti placeat dolorum ipsum voluptatibus reprehenderit.",
            services:"Mobile App Development, UI/UX Design",
            solution:"Key actions (e.g., \"Built a Flutter app with 1-click checkout\").",
            link:"www.mysite.com"
        },
    ];
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
      </section>
      <section className="subpageContent">
        <div className="container">
            {Projects.map((project)=>(            
                <div className="row workRow" key={project.id}>
                <div className="col-md-8">
                <img src={project.image} alt={project.title} className="img-fluid" />
                </div>
                <div className="col-md-4 align-self-center">
                <article className="pb-3">
                    <p>
                    <strong>Project Title:</strong> {project.title}
                    </p>
                    <p>
                    <strong>Project Description:</strong> {project.description}
                    </p>
                    <p>
                    <strong>Services Used:</strong> {project.services}
                    </p>
                    <p>
                    <strong>Solution:</strong>{project.solution}
                    </p>
                </article>
                <Link className="btn-border" to={project.link} target="_blank">              
                    <span> View Project</span>
                </Link>
                </div>
            </div>
          ))}

       
        </div>
      </section>
    </main>
  );
};

export default Works;
