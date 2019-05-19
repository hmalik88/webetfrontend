import React from 'react';
import '../scss/Welcome.scss'
import weBetLogo from '../assets/webetsplashlogo.svg'
import sponsorsLogo from '../assets/sponsors.svg'
import { withRouter } from 'react-router-dom'

class Welcome extends React.Component {

  constructor(props) {
    super(props)
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('welcome-root');
  }

  handleClick = () => {
    this.props.history.push('/marketplace')
  }

  render() {
    return(
      <>
        <div className="welcome-top">
          <img src={weBetLogo} className="splash-logo" alt="" />
        </div>
        <div className="welcome-bottom">
        <div className="login-button" onClick={this.handleClick}>
          <div className="login-button-text">The future of betting.</div>
        </div>
          <div className="splash-text">
            We are a peer-to-peer betting platform enabling users to enter into 1 to 1 bets.
Utilizing a decentralized oracle system via <span className="chainlink-splash-text">Chainlink</span>, we are able to confirm the
outcome of events via an external API and disperse funds accordingly.
          </div>
          <img className="sponsor-logo" src={sponsorsLogo} alt="" />
        </div>
      </>
      )
  }


}

export default withRouter(Welcome);
