import React from 'react';
import { Link } from 'react-router-dom';
import Blog01Img from "../assets/images/blog/blog01img.jpg";
import Blog02Img from "../assets/images/blog/blog02img.jpg";
import Blog03Img from "../assets/images/blog/blog03img.jpg";
import Blog04Img from "../assets/images/blog/blog04img.jpg";


const HomeBlogs = () => {
    const blogItems =[
        {
            image:Blog01Img,
            date:"4 days ago",
            title:"The 7 Must-Learn JavaScript Frameworks and Libraries for Modern Web Developers in 2024",
            link:"/blog"
        },
        {
            image:Blog02Img,
            date:"4 days ago",
            title:"How to Choose Between React, Angular, and Vue for Your Next Frontend Project",
            link:"/blog"
        },
        {
            image:Blog03Img,
            date:"4 days ago",
            title:"Why Next.js and Node.js Are Dominating Full-Stack Development: A Deep Dive",
            link:"/blog"
        },
        {
            image:Blog04Img,
            date:"4 days ago",
            title:"Progressive Web Apps vs. Native Apps: Which Delivers Better Performance and User Experience in 2024?",
            link:"/blog"
        },
    ]
  return (
    <div className="row pt-3 pt-md-5">
        {blogItems.map((blogItem)=>(
            <div className="col-md-3 pb-4">
                <Link to={blogItem.link} className="blogCard">
                  <figure className="pb-2 m-0">
                     <img src={blogItem.image} alt={blogItem.title} className="img-fluid rounded-3" />
                  </figure>
                  <article>
                    <p class="p-0 m-0"><small className="text-primary-color">{blogItem.date}</small></p>
                    <h5 className="text-secondary-color font-regular">{blogItem.title}</h5>
                  </article>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default HomeBlogs
