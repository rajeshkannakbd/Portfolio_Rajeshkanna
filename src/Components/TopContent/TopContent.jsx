import React from 'react'
import { Button, Link } from 'react-scroll'
import "../TopContent/TopContent.css"

const TopContent = () => {
  return (
    <div className="topcontent">
      <div className="topcontent-container">
        <h1>Rajesh Kanna N</h1>
        <p>Professional Web Developer </p>
        <a href="#"><Button className='download_button'>Download CV</Button></a>
        <Link to="projects" smooth={true} duration={500}><Button className='work_button'>My Work</Button></Link>

      </div>
    </div>
  )
}

export default TopContent
