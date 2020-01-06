import React from 'react'
import './index.css'

const About = ({ content }) => (
  <div className="container">
    <div className="content">
      <img src={content.profilePicture} alt={content.alt} className="profile-picture" />
      <div>{content.aboutText}</div>
    </div>
  </div>
)

export default About
