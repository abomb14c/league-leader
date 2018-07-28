import React from 'react';
import './nba-card.css';

const NBACard = (props) => {
  const {name,
    market,
    wins,
    losses
  } = props;

  return (
    <div className="nba-card">
      <div className="nba-title-container">
        <h3 className="nba-team-name">{market} {name}</h3>
      </div>
      <div className="nba-record-container">
        <h3 className="nba-record"> {wins}-{losses}</h3>
      </div>
    </div>
  );
};

export default NBACard;
