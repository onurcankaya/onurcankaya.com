import React from 'react'
import './index.css'
import Experience from './experience'

const About = ({ content, experience, skills }) => (
  <div className="container">
    <div className="content">
      <img src={content.profilePicture} alt={content.alt} className="profile-picture" />
      <div className="about-me-text">{content.aboutText}</div>
      <Experience experience={experience} />
    </div>
  </div>
)

export default About
