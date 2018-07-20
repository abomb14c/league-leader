import React from 'react';
import './english-card.css'

export const EnglishCard = (props) => {
  const { name, 
    wins,
    losses,
    draws,
    points,
    rank } = props; 

  return (
    <div className="english-card">
      <h3 className="english-title">{name}</h3>
      <h3 className="english-rank">{rank}</h3>
      <h3 className="english-wins">{wins}</h3>
      <h3 className="english-losses">{losses}</h3>
      <h3 className="english-points">{points}</h3>
    </div>
  )
}

export default EnglishCard;