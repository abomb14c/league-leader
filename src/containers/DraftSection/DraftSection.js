import React, { Component } from 'react';
import { connect } from 'react-redux';
import './draft-section.css';
import UserDraftCard from '../UserDraftCard/UserDraftCard';
import DraftTeamsContainer from '../DraftTeamsContainer/DraftTeamsContainer';
import { addLeagueFetch } from '../../apiCalls/apiCalls';
import PropTypes from 'prop-types';

export class DraftSection extends Component {
  constructor(props) {
    super(props);
  }
  
  handleSubmit = async (event) => {
    const leagueInfo = {
      admin: this.props.user.user_id,
      league_type: this.props.league.league,
      name: this.props.league.leagueName,
      bet: this.props.league.leagueBet,
      teams: this.props.draftPicks
    };
    event.preventDefault();
    await addLeagueFetch(leagueInfo);
  }

  render() {
    return (
      <div className="draft-container">
        <div className="league-info-container">
          <h1 className="league-title">{this.props.league.name}</h1>
          <div className="league-bet-container">
            <h3 className="league-bet-desc">Wager:</h3>
            <h3 className="league-bet">{this.props.league.bet}</h3>
          </div>
        </div>
        <button  onClick={this.handleSubmit} 
          className="submit-league-button">
          Submit League
        </button>
        <div className="draft-section">
          <div className="draft-teams">
            <div className="draft-teams-title">
              <h3 className="title-desc">Available Teams</h3>
            </div>
            <DraftTeamsContainer /> 
          </div>
          <UserDraftCard />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  league: state.league,
  draftPicks: state.draftPicks,
  user: state.user
});

export default connect(mapStateToProps, null)(DraftSection);

DraftSection.propTypes = {
  league: PropTypes.object,
  draftPicks: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};