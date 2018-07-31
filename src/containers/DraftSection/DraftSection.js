import React from 'react';
import { connect } from 'react-redux';
import DraftCard from '../../components/DraftCard/DraftCard';
import './draft-section.css';
import UserDraftCard from '../UserDraftCard/UserDraftCard';
import { Draggable } from 'react-drag-and-drop';
import PropTypes from 'prop-types';

export const DraftSection = (props) => {
  const {
    league,
    draftTeams
  } = props;

  const displayDraftTeams = draftTeams.map((team, index) => {
   
    return (
      <Draggable type="team" data={team.name} key={index} >
        <DraftCard name={team.name}  />
      </Draggable>
    );
  });

  return (
    <div className="draft-container">
      <div className="league-info-container">
        <h1 className="league-title">{league.name}</h1>
        <div className="league-bet-container">
          <h3 className="league-bet-desc">Wager:</h3>
          <h3 className="league-bet">{league.bet}</h3>
        </div>
      </div>
      <button className="submit-league-button">Submit League</button>
      <div className="draft-section">
        <div className="draft-teams">
          <div className="draft-teams-title">
            <h3 className="title-desc">Available Teams</h3>
          </div>
          {displayDraftTeams}
        </div>
        <UserDraftCard />
      </div>
    </div>
  );
};


export const mapStateToProps = state => ({
  league: state.league,
  draftTeams: state.draftTeams
});

export default connect(mapStateToProps, null)(DraftSection);

DraftSection.propTypes = {
  league: PropTypes.object,
  draftTeams: PropTypes.arrayOf(PropTypes.object)
};