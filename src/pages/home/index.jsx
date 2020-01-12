import React from 'react'
import ReactGA from 'react-ga'
import PageIntro from './page-intro'
import Projects from './projects'

ReactGA.initialize('UA-149400511-2')
ReactGA.pageview('/')

const Home = ({ content, projects }) => (
  <div className="container home-page-container">
    <PageIntro pageIntro={content && content.pageIntro} />
    <Projects projects={projects} />
  </div>
)

export default Home
