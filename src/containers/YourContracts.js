import React from 'react'
import '../scss/YourContracts.scss'
import ContractCard from '../components/ContractCard.js'
import BetModal from '../components/BetModal'

export default class YourContracts extends React.Component {

  constructor(props) {
    super(props)
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('yourcontracts-root');
  }

  handleBetOpen = () => {
    let modal = document.querySelector('.bet-modal');
    modal.style.display = 'grid';
  }

  render() {
    return(
      <>
        <div className="yourcontract-inner-grid">
          <div className="section1-left">
            <div className="my-contract-title">
              My Contracts
            </div>
            <div className="create-a-bet" onClick={this.handleBetOpen} ><div>Create a bet</div></div>
            <BetModal />
          </div>
          <div className="section1-right">
            <div className="stake-contract-title">
              Staked Contracts
            </div>
          </div>
          <div className="section2-left">
            <ContractCard />
          </div>
          <div className="section2-right">
            <ContractCard />
          </div>
        </div>
      </>
      )
  }

}
