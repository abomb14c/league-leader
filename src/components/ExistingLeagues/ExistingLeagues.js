import React from 'react';
import LeagueCard from '../LeagueCard/LeagueCard';
import './existing-leagues.css';
import PropTypes from 'prop-types';

const ExistingLeagues = ({leagues}) => {
  const displayLeagues = leagues.map((league, index) => {
    return <LeagueCard {...league} key={index}/>;
  });
  return (
    <div className="existing-leagues-container">
      {displayLeagues}
    </div>
  );
};

export default ExistingLeagues;

ExistingLeagues.propTypes = {
  leagues: PropTypes.arrayOf(PropTypes.object)
};