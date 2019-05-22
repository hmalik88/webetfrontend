import React from 'react'
import '../scss/BetModal.scss'
import BetClose from '../assets/bet-modal-close.svg'

export default class BetModal extends React.Component {

  handleClose = () => {
    let modal = document.querySelector('.bet-modal');
    modal.style.display = 'none';
  }

  componentDidMount() {
    this.handleClose();
  }

  render() {
    return(
      <div className="bet-modal">
        <h1 className="bet-title">Make A Bet</h1>
        <img className="bet-close" src={BetClose} alt="" onClick={this.handleClose} />

      </div>
      )
  }

}
