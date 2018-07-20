import React from 'react';
import { connect } from 'react-redux';
import EnglishCard from '../../components/EnglishCard/EnglishCard';
import './home.css';

export const Home = (props) => {
  const eplCards = props.EPL.map((team, index) => {
    return (
      <EnglishCard {...team} key={index} />
    )
  })

  return (
    <div className="home-container">
      <div className="epl-container">
        <div className="epl-header">
          <h3 className="header-desc">Name</h3>
          <h3 className="header-desc rank">Rank</h3>
          <h3 className="header-desc record">Record</h3>
          <h3 className="header-desc points">Points</h3>
        </div>
        {eplCards}
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
  EPL: state.EPL
});

export default connect(mapStateToProps,null)(Home);