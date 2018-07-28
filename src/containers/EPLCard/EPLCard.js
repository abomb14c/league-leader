import React from 'react';
import { connect } from 'react-redux'; 
import EnglishCard from '../../components/EnglishCard/EnglishCard';

export const EPLCard = (props) => {
  const eplCards = props.EPL.map((team, index) => {
    return (
      <EnglishCard {...team} key={index} />
    );
  });
  
  return (
    <div className="home-container">
      <h1 className="home-title">Current Standings</h1>
      <div className="epl-container">
        <div className="epl-header">
          <h3 className="header-desc">Name</h3>
          <h3 className="header-desc rank">Rank</h3>
          <h3 className="header-desc record">Record</h3>
          <h3 className="header-desc points">Points</h3>
        </div>
        {eplCards}
      </div>
    </div>
  );
};


export const mapStateToProps = state => ({
  EPL: state.EPL
});

export default connect(mapStateToProps, null)(EPLCard);