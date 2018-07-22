import React, { Component } from 'react';
import { connect } from 'react-redux';
import EnglishCard from '../../components/EnglishCard/EnglishCard';

export const DraftSection = (props) => {
  const {
    league,
    EPL
  } = props

  const eplTeams = EPL.map((team, index) => {
    return (
      <EnglishCard {...team} key={index} />
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