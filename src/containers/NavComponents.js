import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MarketPlace from './Marketplace'
import NavBar from '../components/NavBar'
import Contract from './Contract'

export default class NavComponents extends React.Component {

  render() {
    return(
      <>
        <NavBar />
        <Switch>
          <Route exact path="/contract/:number" component={Contract} />
          <Route exact path="/marketplace" render={() => <MarketPlace />} />
        </Switch>
      </>
      )
  }

}
