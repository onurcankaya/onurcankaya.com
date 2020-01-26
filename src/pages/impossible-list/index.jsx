import React from 'react'
import './index.css'

const ImpossibleList = ({ content }) => (
  <div className="container">
    <div className="impossible-content">
      <div className="impossible-title">{content && content.title}</div>
      <div className="impossible-description">{content && content.description}</div>
    </div>
  </div>
)

export default ImpossibleList
