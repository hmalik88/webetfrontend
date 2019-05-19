import React from 'react'
import '../scss/ContractCard.scss'
import ContractPic from '../assets/contract.svg'

export default class ContractCard extends React.Component {

  render() {
    return(
      <div className="contract-card">
        <div className="image-section">
          <img src={ContractPic} className="contract-pic" alt="" />
        </div>
        <div className="eth-price">0.15<br/>ETH</div>
        <div className="card-info">
          <div className="bet"></div>
          <div className="exp-date"></div>
        </div>
      </div>
      )
  }
}
