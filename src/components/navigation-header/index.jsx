import React from 'react'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../mobile-menu'
import './index.css'

const NavigationHeader = ({ content }) => (
  <header className="navigation-container">
    <div className="container navigation-content">
      <NavLink to="/" className="logo">{`Onur.`}</NavLink>
      <div className="navigation-labels">
        {content &&
          content.navigationLabels.map((item, index) => {
            return (
              <NavLink
                key={index}
                exact={true}
                activeClassName="is-active"
                to={item.route}
                className="navigation-label">
                {item.label}
              </NavLink>
            )
          })}
        <a href="mailto:onur.eren.cankaya@gmail.com" className="contact-link">{`Contact`}</a>
      </div>
      <div className="mobile-menu">
        <MobileMenu navigationLabels={content.navigationLabels} />
      </div>
    </div>
  </header>
)

export default NavigationHeader
