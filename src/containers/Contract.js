import React from 'react'
import '../scss/Contract.scss'
import largeContract from '../assets/largecontract.svg'

export default class Contract extends React.Component {

  constructor(props) {
    super(props)
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('contract-root');
  }

  render() {
    return(
      <>
        <div className="contract-section1">
          <div className="contract-title">Contract Address:<span className="contract-address">0x78f5E3f979530781b5967b55cdE1366F65398C82</span></div>
        </div>
        <div className="contract-section2">
          <img src={largeContract} alt="" className="large-contract" />
          <div className="contract-info-container">
            <div className="contract-position"><label className="position-label">Price: </label> $300.00</div>
            <div className="contract-stake"><label className="stake-label">Stake: </label> 0.15 ETH</div>
            <div className="contract-expiration"><label className="exp-label">Contract Expires: </label>5/25/19</div>
            <div className="bet-button"><div className="bet-btn-txt">Stake opposing position</div></div>
          </div>
        </div>
      </>
      )
  }

}
