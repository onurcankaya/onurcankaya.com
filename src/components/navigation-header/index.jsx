import React from 'react'
import './index.css'

const NavigationHeader = ({ content }) => (
  <header className="navigation-container">
    <a href="/" className="logo">{`Onur.`}</a>
    <div className="navigation-labels">
      {content &&
        content.navigationLabels.map((item, index) => {
          return (
            <div key={index} className="navigation-label">
              {item.label}
            </div>
          )
        })}
    </div>
  </header>
)

export default NavigationHeader
