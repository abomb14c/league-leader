import React from 'react';

export const EnglishCard = (props) => {
  const {name, 
    wins,
    losses,
    draws,
    points,
    rank} = props; 

  return (
    <div>
      <h3>{name}</h3>
      <h3>{rank}</h3>
    </div>
  )
}

export default EnglishCard;