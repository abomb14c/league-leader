import React from 'react';
import './draft-card.css';

export const DraftCard = ({name}) => {

  const dragstartHandler = (event, id) => {
    console.log('dragstart')
    event.dataTransfer.setData('text/html',id);
  }

  return (
    <div  draggable="true" onDragStart={(e) => dragstartHandler(e, name)} className="draft-card">
      <h3 className="draft-name">{name}</h3>
    </div>
  )
}

export default DraftCard;