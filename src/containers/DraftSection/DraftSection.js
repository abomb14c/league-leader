import React, { Component } from 'react';
import { connect } from 'react-redux';
import DraftCard from '../../components/DraftCard/DraftCard';
import './draft-section.css';
import UserDraftCard from '../UserDraftCard/UserDraftCard';

export const DraftSection = (props) => {
  const {
    league,
    EPL
  } = props

  const eplTeams = EPL.map((team, index) => {
    return (
      <DraftCard name={team.name} key={index} />
    )
  })

  return (
    <div className="draft-container">
      <div className="league-info-container">
        <h1 className="league-title">{league.name}</h1>
        <div className="league-bet-container">
          <h3 className="league-bet-desc">Wager:</h3>
          <h3 className="league-bet">{league.bet}</h3>
        </div>
      </div>
      <div className="draft-section">
        <div className="draft-teams">
          <div className="draft-teams-title">
            <h3 className="title-desc">Available Teams</h3>
          </div>
          {eplTeams}
        </div>
        <UserDraftCard />
      </div>
    </div>
  )
}


export const mapStateToProps = state => ({
  league: state.league,
  EPL: state.EPL
});

export default connect(mapStateToProps,null)(DraftSection);