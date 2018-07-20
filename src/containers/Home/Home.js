import React from 'react';
import { connect } from 'react-redux';
import EnglishCard from '../../components/EnglishCard/EnglishCard';

export const Home = (props) => {
  const eplCards = props.EPL.map((team, index) => {
    return (
      <EnglishCard {...team} key={index} />
    )
  })

  return (
    <div>
      {eplCards}
    </div>
  )
}

export const mapStateToProps = state => ({
  EPL: state.EPL
});

export default connect(mapStateToProps,null)(Home);