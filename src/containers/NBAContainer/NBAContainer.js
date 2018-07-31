import React from 'react';
import {connect} from 'react-redux';
import NBACard from '../../components/NBACard/NBACard';
import './nba-container.css';
import PropTypes from 'prop-types';

export const NBAContainer = ({ NBA }) => {
  
  const eastTeams = NBA['EASTERN CONFERENCE'].map((team, index) => {
    return <NBACard {...team} key={index} />;
  });

  const westTeams = NBA['WESTERN CONFERENCE'].map((team, index) => {
    return <NBACard {...team}  key={index}/>;
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

NBAContainer.propTypes = {
  NBA: PropTypes.object
};