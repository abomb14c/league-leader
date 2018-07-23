import React from 'react';
import './draft-card.css';

export const DraftCard = ({name}) => {
  return (
    <div draggable="true" className="draft-card">
      <h3 className="draft-name">{name}</h3>
    </div>
  )
}


export default DraftCard;