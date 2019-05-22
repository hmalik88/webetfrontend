import React from 'react'
import '../scss/BetModal.scss'
import BetClose from '../assets/bet-modal-close.svg'
import greaterThan from '../assets/greaterThan.svg'
import lessThan from '../assets/lessThan.svg'

export default class BetModal extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      position: 'greater'
    };
  }

  handleClose = () => {
    let modal = document.querySelector('.bet-modal');
    modal.style.display = 'none';
  }

  handleBetPosition = e => {
    if (this.state.position === 'greater') {
      e.target.src = lessThan
      this.setState({position: 'less'})
    } else {
      e.target.src = greaterThan
      this.setState({position: 'greater'})
    }
  }

  componentDidMount() {
    this.handleClose();
  }

  render() {
    return(
      <div className="bet-modal">
        <div className="first-modal">
          <h1 className="bet-title">Make A Bet</h1>
          <img className="bet-close" src={BetClose} alt="" onClick={this.handleClose} /><br/>
        </div>
        <div className="second-modal">
            <h2 className="ETH">ETH</h2>
            <img className="bet-position" onClick={this.handleBetPosition} src={greaterThan} alt="" />
            <h2 className="dollar-sign">$</h2>
            <input type="text" className="bet-input" required/>
        </div>
        <div className="third-modal">
          <h2 className="modal-exp-date">EXP:</h2>
          <input type="date" className="date-input" required/>
        </div>
        <div className="last-modal">
          <div className="create-bet-btn" onClick={this.handleClose}><div>CREATE</div></div>
        </div>
      </div>
      )
  }

}
