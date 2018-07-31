import React, { Component } from 'react';
import { connect } from 'react-redux';

import './draft-section.css';
import UserDraftCard from '../UserDraftCard/UserDraftCard';
import DraftTeamsContainer from '../DraftTeamsContainer/DraftTeamsContainer';
import PropTypes from 'prop-types';

export class DraftSection extends Component {
  constructor(props) {
    super(props);
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
        <button className="submit-league-button">Submit League</button>
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
  draftTeams: state.draftTeams
});

export default connect(mapStateToProps, null)(DraftSection);

DraftSection.propTypes = {
  league: PropTypes.object,
  draftTeams: PropTypes.arrayOf(PropTypes.object)
};