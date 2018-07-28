import React from 'react';
import {connect} from 'react-redux';
import NBACard from '../../components/NBACard/NBACard';
import './nba-container.css';

export const NBAContainer = ({ NBA }) => {
  
  const eastTeams = NBA['EASTERN CONFERENCE'].map( team => {
    return <NBACard {...team} />;
  });

  const westTeams = NBA['WESTERN CONFERENCE'].map( team => {
    return <NBACard {...team} />;
  });

  return (
    <div className="nba-container">
      <div className="nba-header">
        <h3 className="header-desc">Name</h3>
        <h3 className="header-desc nba-record">Record</h3>
      </div>
      <div className="conference-container">
        <div className="conference-title-container">
          <h3 className="conference-name">Eastern Conference</h3>
        </div>
        {eastTeams}
      </div>
      <div>
        <div className="conference-container">
          <div className="conference-title-container">
            <h3 className="conference-name">Western Conference</h3>
          </div>
        </div>
        {westTeams}
      </div>
    </div>
  );
};

export const mapStateToProps = state => ({
  NBA: state.NBA
});

export default connect(mapStateToProps, null)(NBAContainer);