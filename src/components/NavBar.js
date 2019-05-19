import React from 'react'
import '../scss/NavBar.scss'
import NavLogo from '../assets/webetnavlogo.svg'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

  render() {
    return(
      <div className="webet-navbar">
        <div className="logo-section">
          <img className="nav-logo" src={NavLogo} alt="" />
        </div>
        <div className="link-section">
          <Link to="/marketplace" className="marketplace-link">
            <div>Marketplace</div>
          </Link>
          <Link to="/yourcontracts" className="yourcontract-link">
            <div >Your Contracts</div>
          </Link>
          <Link to="/" className="logout-link">
            <div >Log Out</div>
          </Link>
        </div>
      </div>
      )
  }
}
