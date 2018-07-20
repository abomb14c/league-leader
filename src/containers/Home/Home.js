import React from 'react';
import { connect } from 'react-redux';
// import { mapStateToProps } from '../../components/Navigation/Navigation';

export const Home = (props) => {
  console.log(props.EPL);
  return (
    <div>
    </div>
  )
}

export const mapStateToProps = state => ({
  EPL: state.EPL
});

export default connect(mapStateToProps,null)(Home);