import React from 'react'
import {Element} from "react-scroll"
import "./ExperienceContainer.css"
import Experience from './Experience'

const ExperienceContainer = () => {
  return (
    <Element className='experienceContainer' id="experience">
      <h1>Experience</h1>
      <div className='experience_info'>
        <Experience number="2+" title="Interns" />
        <Experience number="10+" title="projects" />
        <Experience number="5+" title="workshops" />
        <Experience number="2 years" title="experience" />
      </div>
    </Element>
  )
}

export default ExperienceContainer
