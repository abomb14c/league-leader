import React, { Component } from 'react';
import { connect } from 'react-redux';
import DraftCard from '../../components/DraftCard/DraftCard';
import './draft-section.css';

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
    <div className="draft-section">
      <div className="draft-teams">
        <div className="draft-teams-title">
          <h3 className="title-desc">Available Teams</h3>
        </div>
        {eplTeams}
      </div>
    </div>
  )
}


export const mapStateToProps = state => ({
  league: state.league,
  EPL: state.EPL
});

export default connect(mapStateToProps,null)(DraftSection);