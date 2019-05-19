import React from 'react'
import { withRouter } from 'react-router-dom'
import '../scss/Marketplace.scss'
import ContractCard from '../components/ContractCard.js'


class MarketPlace extends React.Component {

   constructor(props) {
    super(props)
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('market-root');
  }


  render() {
    return(
      <>
        <div className="market-section1">
          <div className="marketplace-title">Marketplace</div>
        </div>
        <div className="market-section2">
          <div className="card-container">
            <ContractCard />
          </div>
        </div>
      </>
      )
  }

}

export default withRouter(MarketPlace);
