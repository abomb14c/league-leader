import React from 'react';
import './draft-card.css';
import PropTypes from 'prop-types';

export const DraftCard = ({name}) => {

  return (
    <div className="draft-card">
      <h3 className="draft-name">{name}</h3>
    </div>
  );
};

export default DraftCard;

DraftCard.propTypes = {
  name: PropTypes.string
};