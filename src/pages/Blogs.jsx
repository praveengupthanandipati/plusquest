import React from 'react';
import SubPageHeader from '../components/SubPageHeader';
import { Link } from 'react-router-dom';
import HomeBlogs from '../components/HomeBlogs';

const Blogs = () => {
  return (
    <main className="Subpage">
        <section className="subpageHeader">
            <SubPageHeader
            subtitle={"Insights, Tips & Industry Trends"}
            title={"Expert perspectives to empower your decisions."}
            />  
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
