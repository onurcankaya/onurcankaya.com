import React from 'react'
import ReactGA from 'react-ga'
import Experience from './experience'
import Skills from './skills'
import './index.css'
import './nes.min.css'

ReactGA.initialize('UA-149400511-2')
ReactGA.pageview('/about')

const About = ({ content, experience, skills }) => (
  <div className="container">
    <div className="about-content">
      <img src={content.profilePicture} alt={content.alt} className="profile-picture" />
      <div className="about-me-text">{content.aboutText}</div>
      <Experience experience={experience} />
      <Skills skills={skills} />
      <div className="octocat-container">
        <a href="https://github.com/onurcankaya" target="_blank" rel="noopener noreferrer">
          <i className="nes-octocat animate"></i>
        </a>
      </div>
    </div>
  </div>
)

export default About
