import React from 'react';
import HomeBlogs from './HomeBlogs';

const RecentBlogsWrapper = () => {
  return (
    <div className="recent-blogs-container">
        <HomeBlogs
          home={true}
          link="/Blogs/"
        />
        <style>{`
          /* Hide all blog items by default */
          .recent-blogs-container .col-md-3 {
            display: none;
          }
          
          /* Show only the last 4 items */
          .recent-blogs-container .col-md-3:nth-last-child(-n+4) {
            display: block;
          }
      `}</style>
    </div>
  )
}

export default RecentBlogsWrapper
