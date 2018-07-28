import React from 'react';
import {connect} from 'react-redux';
import NBACard from '../../components/NBACard/NBACard';

export const NBAContainer = ({NBA}) => {
  
  const eastTeams = NBA['EASTERN CONFERENCE'].map( team => {
    <NBACard {...team} />;
  });
  return (
    <div>
      {eastTeams}
    </div>
  );
};

export const mapStateToProps = state => ({
  NBA: state.NBA
});

export default connect(mapStateToProps, null)(NBAContainer);