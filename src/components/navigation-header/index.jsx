import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const NavigationHeader = ({ content }) => (
  <header className="navigation-container">
    <Link to="/" className="logo">{`Onur.`}</Link>
    <div className="navigation-labels">
      {content &&
        content.navigationLabels.map((item, index) => {
          console.log(item)
          return (
            <Link key={index} to={item.route} className="navigation-label">
              {item.label}
            </Link>
          )
        })}
    </div>
  </header>
)

export default NavigationHeader
