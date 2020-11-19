import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Jokes from './Jokes';
import Info from './Info';
import NavBar from '../components/NavBar';


export default function Pages() {
  return (
    <Router>
      <Switch>
        <Route exact path="/info">
          <NavBar />
          <Info/>
        </Route>
        <Route exact path="/">
          <NavBar />
          <Jokes/>
        </Route>
      </Switch>
    </Router>
  )
}

