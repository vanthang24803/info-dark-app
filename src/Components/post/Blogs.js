import React from 'react'
import "./blogs.css"


const Blogs = () => {
  return (
    <div>
      <h1 className="title-blogs">Blog 📝</h1>

      <span className="blog-desc">I mostly use this space to jot down things I find useful in my daily workflow or solution to a particular issue that I had a hard time figuring out in the hopes of someone might find them helpful.</span>

      <div className="blog-container">
        <a href="" ><h3 className="head-box">Domain Drama: My Hosting Hostage Situation!</h3></a>
        <span className='timeline'>March 24, 2023</span>
        <span className="time-read">2 mins read</span>
      </div>

      <div className="blog-container">
        <a href="" ><h3 className="head-box">How to Factory Reset Gnome Desktop</h3></a>
        <span className='timeline'>September 20, 2022</span>
        <span className="time-read">2 mins read</span>
      </div>

      <div className="blog-container">
        <a href="" ><h3 className="head-box">How to Upgrade Linux Kernel to Latest Version in Ubuntu</h3></a>
        <span className='timeline'>October 15, 2022</span>
        <span className="time-read">2 mins read</span>
      </div>

      <div className="blog-container">
        <a href="" ><h3 className="head-box">How to Uninstall a .Deb Package in Ubuntu?</h3></a>
        <span className='timeline'>May 16, 2022</span>
        <span className="time-read">1 min read</span>
      </div>

      <div className="blog-container">
        <a href="" ><h3 className="head-box">How to Remove Old Kernals from Debian Ubuntu</h3></a>
        <span className='timeline'>Jan 1, 2023</span>
        <span className="time-read">1 min read</span>
      </div>


    </div>
  )
}

export default Blogs
