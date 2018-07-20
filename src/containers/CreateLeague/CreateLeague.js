import React from 'react';  
import { icon } from '../../assets/plus.svg';
import './create-league.css';
 
export const CreateLeague = () => {
  return (
    <div className="create-league-container">
      <h3 className="create-league-title">Create A New League</h3>
      <button className="create-league-button">
        <div className="create-button-logo"></div>
      </button>
    </div>
  )
}

export default CreateLeague