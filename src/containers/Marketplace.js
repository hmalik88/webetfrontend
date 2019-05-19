import React from 'react'
import { withRouter } from 'react-router-dom'
import '../scss/Marketplace.scss'

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

      </>
      )
  }

}

export default withRouter(MarketPlace);
