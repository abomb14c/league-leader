import React from 'react';
import { connect } from 'react-redux';
import EPLCard from '../EPLCard/EPLCard';
import './home.css';

export const Home = (props) => {

  return (
    <div>
      <EPLCard />
    </div>
  );
};

export default Home;