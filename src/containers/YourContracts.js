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


      </>
      )
  }

}
