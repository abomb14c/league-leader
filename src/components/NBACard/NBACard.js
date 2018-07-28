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
        <h3 className="team-name">{market} {name}</h3>
      </div>
      <h3 className="record"> {wins}</h3>
      <h3>{losses}</h3>
    </div>
  );
};

export default NBACard;
