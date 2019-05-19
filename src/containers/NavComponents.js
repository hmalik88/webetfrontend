import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MarketPlace from './Marketplace'

export default class NavComponents extends React.Component {

  render() {
    return(
      <>
        <Switch>
          <Route exact path="/marketplace" render={() => <MarketPlace />} />
        </Switch>
      </>
      )
  }

}
