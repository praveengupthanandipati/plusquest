import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubPageHeader from "../components/SubPageHeader";
import Project01Image from "../assets/images/project01.jpg";
import Project02Image from "../assets/images/project02.jpg";
import Project03Image from "../assets/images/project03.jpg";


  const video1 =(
    <iframe 
    width="100%" 
    height="315" 
    src="https://www.youtube.com/embed/2cfptolQ3iI?si=vJJehqrHM4s6PyCZ" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullScreen
  ></iframe>
  )



const Works = () => {
  const subTitle ="Our Work";
  const title ="Innovative Solutions, Measurable Results – See How We Deliver Excellence";
  const projectRefs = useRef([]);
  
  
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
      image:video1,
      title:"Project Title will be here",
      description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi corrupti placeat dolorum ipsum voluptatibus reprehenderit.",
      services:"Mobile App Development, UI/UX Design", 
      solution:"Key actions (e.g., \"Built a Flutter app with 1-click checkout\").",
      link:"www.mysite.com"
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Skip first project, animate rest
    projectRefs.current.slice(1).forEach((projectRef) => {
      gsap.from(projectRef.querySelector('img'), {
        y: 100,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: projectRef,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(projectRef.querySelector('article'), {
        y: -50,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: projectRef,
          start: "top center", 
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      gsap.from(projectRef.querySelector('.btn-border'), {
        y: 30,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: projectRef,
          start: "top center",
          end: "bottom center", 
          toggleActions: "play none none reverse"
        }
      });
    });
  });

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
                  <ol className="breadcrumb">
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
            {Projects.map((project, index)=>(            
                <div className="row workRow" key={project.id} ref={el => projectRefs.current[index] = el}>
                  <div className="col-md-7">
                      {typeof project.image === 'string' ? (
                        <img src={project.image} alt={project.title} className="img-fluid" />
                      ) : (
                        project.image // Render the iframe component directly
                      )}
                  </div>
                <div className="col-md-5 align-self-center">
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
