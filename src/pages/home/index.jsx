import React from 'react'
import PageIntro from './page-intro'

const Home = ({ content }) => (
  <div className="container home-page-container">
    <PageIntro pageIntro={content && content.pageIntro} />
  </div>
)

export default Home
