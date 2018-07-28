import React from 'react';
// import { connect } from 'react-redux';
import EPLContainer from '../EPLContainer/EPLContainer';
import NBAContainer from '../NBAContainer/NBAContainer';
import './home.css';

export const Home = (props) => {

  return (
    <div>
      <EPLContainer/>
      <NBAContainer />
    </div>
  );
};

export default Home;