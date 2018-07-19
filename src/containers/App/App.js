import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import Leagues from '../../components/Leagues/Leagues';
import Login from '../../components/Login/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <Route
          exact path="/login"
          component={Login} 
        />
        <Route
          exact path="/leagues"
          component={Leagues} 
        />
      </div>
    );
  }
}

export default withRouter(App);
