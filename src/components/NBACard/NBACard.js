import React from 'react';

const NBACard = (props) => {
  const {name,
    market,
    wins,
    losses
  } = props;
  return (
    <div>
      <h3 className="team-name">{market} {name}</h3>
      <h3 className="record"> {wins}</h3>
      <h3>{losses}</h3>
    </div>
  );
};

export default NBACard;