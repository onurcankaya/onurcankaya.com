import React from 'react'
import './index.css'

const Footer = ({ content }) => (
  <div className="footer-container">
    <div className="container footer-content">
      <div className="copyright-text">{`© ${new Date().getFullYear()} ${content &&
        content.copyrightText}`}</div>
      <div className="social">
        {content &&
          content.social.map((item, index) => (
            <a
              href={item.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="icon">
              <img src={item.logo} alt="social-icon" width={30} height={30} />
            </a>
          ))}
      </div>
    </div>
  </div>
)

export default Footer
