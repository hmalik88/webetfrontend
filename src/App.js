import React from 'react';
import Welcome from './containers/Welcome'
import NavComponents from './containers/NavComponents'
import { withRouter, Switch, Route } from 'react-router-dom'
import './scss/App.scss'

function App() {
  return (
   <>
   <Switch>
    <Route exact path="/" component={Welcome} />
      <NavComponents />
    </Switch>
   </>
  );
}

export default withRouter(App);
