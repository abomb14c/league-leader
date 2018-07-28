import React from 'react';
import EPLContainer from '../EPLContainer/EPLContainer';
import NBAContainer from '../NBAContainer/NBAContainer';
import { Link } from 'react-router-dom';
import './home.css';

export const Home = (props) => {

  return (
    <div className="home-container">
      <h1 className="home-title">Current Standings</h1>
      <p><Link to="/setupleague"
        className="setup-link"
      >
      Start A New League
      </Link></p>
      <div className="standings-container">
        <EPLContainer/>
        <NBAContainer />
      </div>
    </div>
  );
};

export default Home;