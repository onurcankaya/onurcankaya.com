import React from 'react'
import './index.css'

const Now = ({ content }) => (
  <div className="container">
    <div className="now-content">
      <div className="now-title">{content && content.title}</div>
      <div className="now-description">{content && content.description}</div>
    </div>
  </div>
)

export default Now
