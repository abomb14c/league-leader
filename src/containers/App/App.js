import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from '../../components/Navigation/Navigation';
import Leagues from '../../components/Leagues/Leagues';
import Login from '../../components/Login/Login';
import Home from '../Home/Home';
import SetupLeague from '../SetupLeague/SetupLeague';
import DraftSection from '../DraftSection/DraftSection';
import { fetchEnglandScores, fetchNbaTeams } from '../../apiCalls/apiCalls';
import {updateEnglishSoccer} from '../../actions/handleSoccer/handleSoccer';

class App extends Component {

  getSoccerData = async () => {
    const soccerStats = await fetchEnglandScores();
    await this.props.handleEnglishSoccer(soccerStats);
    const nba = await fetchNbaTeams();
    console.log(nba);
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
            exact path= "/login"
            render={() => (
              this.props.user.user_id ?
                <Redirect to="/" /> :
                <Login />
            )}
          />
          <Route
            exact path= "/leagues"
            component={Leagues} 
          />
          <Route
            exact path= "/"
            component={Home}
          />
          <Route 
            exact path= "/setupleague"
            render={() => (
              this.props.league.name ?
                <Redirect to="/draft" /> :
                <SetupLeague />
            )}
          />
          <Route
            exact path="/draft"
            component={DraftSection}
          />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  league: state.league
});

export const mapDispatchToProps = dispatch => ({
  handleEnglishSoccer: (englishSoccerStats) => 
    dispatch(updateEnglishSoccer(englishSoccerStats))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
