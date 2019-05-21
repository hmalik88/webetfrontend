import React from 'react'
import '../scss/YourContracts.scss'

export default class YourContracts extends React.Component {

  constructor(props) {
    super(props)
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('yourcontracts-root');
  }

  render() {
    return(
      <>
        <div className="yourcontract-inner-grid">
          <div className="section1-left">
            <div className="my-contract-title">
              My Contracts
            </div>
          </div>
          <div className="section1-right">
            <div className="stake-contract-title">
              Staked Contracts
            </div>
          </div>
        </div>
      </>
      )
  }

}
