import React from 'react'
import PageIntro from './page-intro'
import Projects from './projects'

const Home = ({ content, projects }) => (
  <div className="container home-page-container">
    <PageIntro pageIntro={content && content.pageIntro} />
    <Projects projects={projects} />
  </div>
)

export default Home
