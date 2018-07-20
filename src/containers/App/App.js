import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import Navigation from '../../components/Navigation/Navigation';
import Leagues from '../../components/Leagues/Leagues';
import Login from '../../components/Login/Login';
import { fetchEnglandScores } from '../../apiCalls/apiCalls';

class App extends Component {


  getSoccerData = async () => {
    const soccerStats = await fetchEnglandScores();
    console.log(soccerStats);
  }

  componentDidMount = () => {
    this.getSoccerData();
  }

  render() {
    return (
      <div className="App">
        <header>
          <Navigation />
        </header>
        <Switch>
        <Route
          exact path="/login"
          render={() => (
            this.props.user.user_id ?
              <Redirect to="/" /> :
              <Login />
          )}
        />
        <Route
          exact path="/leagues"
          component={Leagues} 
        />
        <Route
          exact path="/"
          component={Leagues}
        />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
})

export default withRouter(connect(mapStateToProps,null)(App));
