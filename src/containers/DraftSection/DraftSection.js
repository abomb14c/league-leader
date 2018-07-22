import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnglishCard from '../../components/EnglishCard/EnglishCard';
import DraftCard from '../../components/DraftCard/DraftCard';
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
    <div>
      hey
      {eplTeams}
    </div>
  )
}


export const mapStateToProps = state => ({
  league: state.league,
  EPL: state.EPL
});

export default connect(mapStateToProps,null)(DraftSection);