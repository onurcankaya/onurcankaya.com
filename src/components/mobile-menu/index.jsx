import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.css'

class Menu extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMenuOpen: false,
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    })
  }

  onNavigatePage = () => {
    this.setState({
      isMenuOpen: false,
    })
  }

  render() {
    const { navigationLabels } = this.props
    const { isMenuOpen } = this.state

    return (
      <div className="mobile-menu-container">
        <div className={`icon ${isMenuOpen ? 'active' : ''}`} onClick={this.toggleMenu}>
          <div className="hamburger"></div>
        </div>

        {navigationLabels && (
          <nav className={`nav ${isMenuOpen ? 'show' : ''}`}>
            <ul className="menu-items">
              {navigationLabels.map((item, index) => (
                <li key={index} className="menu-item">
                  <NavLink to={item.route} className="menu-link" onClick={this.onNavigatePage}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    )
  }
}

export default Menu
