import React from 'react';
import './english-card.css';
import PropTypes from 'prop-types';

export const EnglishCard = (props) => {
  const { name, 
    wins,
    losses,
    draws,
    points,
    rank } = props; 

  return (
    <div className="english-card">
      <div className="english-title-container">
        <h3 className="english-title english-desc">{name}</h3>
      </div>
      <h3 className="english-rank english-desc">{rank}</h3>
      <div className="english-record-container">
        <h3 className="english-wins english-desc">{wins}-</h3>
        <h3 className="english-losses english-desc">{losses}-</h3>
        <h3 className="english-draws english-desc">{draws}</h3>
      </div>
      <h3 className="english-points english-desc">{points}</h3>
    </div>
  );
};

export default EnglishCard;

EnglishCard.propTypes = {
  name: PropTypes.string,
  wins: PropTypes.number,
  losses: PropTypes.number,
  draws: PropTypes.number,
  points: PropTypes.number,
  rank: PropTypes.number
};