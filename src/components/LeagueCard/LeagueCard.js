import React from 'react'; 
import './league-card.css';
import PropTypes from 'prop-types';

const LeagueCard = ({ bet, league_type, name }) => {
  return (
    <div className="league-card-container">
      <div className="league-card-header">
        <h3 className="league-card-header-des-title">{name}</h3>
        <h3 className="league-card-header-des">Sport:</h3>
        <h3 className="league-card-header-content">{league_type}</h3>
        <h3 className="league-card-header-des">Wager:</h3>
        <h3 className="league-card-header-content">{bet}</h3>
      </div>
    </div>
  );
};

export default LeagueCard;

LeagueCard.propTypes = {
  bet: PropTypes.string,
  league_type: PropTypes.string,
  name: PropTypes.string
};