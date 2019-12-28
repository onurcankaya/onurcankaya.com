import React from 'react'
import './index.css'

const NavigationHeader = ({ data }) => {
  return (
    <header className="navigation-container">
      <div className="logo">Onur.</div>
      <div className="navigation-labels">
        {data &&
          data.navigationLabels.map((item, index) => {
            return (
              <div key={index} className="navigation-label">
                {item.label}
              </div>
            )
          })}
      </div>
    </header>
  )
}

export default NavigationHeader
