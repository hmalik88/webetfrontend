import React from 'react'
import '../scss/ContractCard.scss'
import ContractPic from '../assets/contract.svg'
import { withRouter } from 'react-router-dom'

class ContractCard extends React.Component {

  handleClick = () => {
    this.props.history.push('/contract/0x78f5E3f979530781b5967b55cdE1366F65398C82')
  }

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

export default withRouter(ContractCard);
