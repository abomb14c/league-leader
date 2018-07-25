import React from 'react';  
import { icon } from '../../assets/plus.svg';
import { Link } from 'react-router-dom'
import './create-league.css';
 
export const CreateLeague = () => {
  return (
    <div className="create-league-container">
      <h3 className="create-league-title">Create A New League</h3>
      <button className="create-league-button">
        <Link to={'/setupleague'}>
          <div className="create-button-logo"></div>
        </Link>
      </button>
    </div>
  )
}

export default CreateLeague;


