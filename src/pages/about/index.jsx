import React from 'react'
import './index.css'
import Experience from './experience'
import Skills from './skills'

const About = ({ content, experience, skills }) => (
  <div className="container">
    <div className="content">
      <img src={content.profilePicture} alt={content.alt} className="profile-picture" />
      <div className="about-me-text">{content.aboutText}</div>
      <Experience experience={experience} />
      <Skills skills={skills} />
    </div>
  </div>
)

export default About
