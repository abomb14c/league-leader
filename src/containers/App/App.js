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
import { fetchEnglandScores, fetchNbaTeams, fetchLeagues } from '../../apiCalls/apiCalls';
import {updateEnglishSoccer} from '../../actions/handleSoccer/handleSoccer';
import {addNBA} from '../../actions/handleNba/handleNba';
import PropTypes from 'prop-types';

export class App extends Component {

  getSoccerData = async () => {
    const soccerStats = await fetchEnglandScores();
    await this.props.handleEnglishSoccer(soccerStats);
 
  }

  getNbaData = async () => {
    const nbaStats = await fetchNbaTeams();
    await this.props.handleNba(nbaStats);
  }

  componentDidMount = async () => {
    await this.getSoccerData();
    await this.getNbaData();  
    // console.log(this.props.user)
    // await fetchLeagues(this.props.user);
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
            render={() => (
              !this.props.user.user_id ?
                <Redirect to="/login" /> :
                <Home/>
            )}
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
            render={ () => (
              this.props.leagueID ?
                <Redirect to='/leagues' /> :
                < DraftSection />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  league: state.league,
  leagueID: state.leagueID
});

export const mapDispatchToProps = dispatch => ({
  handleEnglishSoccer: (englishSoccerStats) => 
    dispatch(updateEnglishSoccer(englishSoccerStats)),
  handleNba: nbaStats => dispatch(addNBA(nbaStats))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

App.propTypes = {
  user: PropTypes.object,
  league: PropTypes.object,
  handleEnglishSoccer: PropTypes.func,
  handleNba: PropTypes.func,
  leagueID: PropTypes.object
};