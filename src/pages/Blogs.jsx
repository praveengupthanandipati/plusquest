import React from 'react';
import SubPageHeader from '../components/SubPageHeader';
import { Link } from 'react-router-dom';
import HomeBlogs from '../components/HomeBlogs';

const Blogs = () => {
  const subTitle ="Insights, Tips & Industry Trends";
  const title ="Expert perspectives to empower your decisions.";
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

        <section className="subpageContent blogSection">
            <div className="container">
                <HomeBlogs/>
            </div>
        </section>
    </main>
  )
}

export default Blogs
