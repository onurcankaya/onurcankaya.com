import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const NavigationHeader = ({ content }) => (
  <header className="navigation-container">
    <Link to="/" className="logo">{`Onur.`}</Link>
    <div className="navigation-labels">
      {content &&
        content.navigationLabels.map((item, index) => {
          return (
            <Link key={index} to={item.route} className="navigation-label">
              {item.label}
            </Link>
          )
        })}
      <a href="mailto:onur.eren.cankaya@gmail.com" className="contact-link">{`Contact`}</a>
    </div>
  </header>
)

export default NavigationHeader
