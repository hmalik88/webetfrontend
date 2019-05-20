import React from 'react'
import '../scss/ContractCard.scss'
import ContractPic from '../assets/contract.svg'

export default class ContractCard extends React.Component {



  render() {
    return(
      <div className="contract-card" onClick={this.handleClick}>
        <div className="image-section">
          <img src={ContractPic} className="contract-pic" alt="" />
          <div className="eth-price">0.15<br/>ETH</div>
        </div>
        <div className="card-info">
          <div className="bet">ETH > $300.00</div>
          <div className="exp-date">EXP: 5/25/19</div>
        </div>
      </div>
      )
  }
}
