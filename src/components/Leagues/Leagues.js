import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateLeague from '../../containers/CreateLeague/CreateLeague';
import './leagues.css';
import { fetchLeagues } from '../../apiCalls/apiCalls';
import ExistingLeagues from '../ExistingLeagues/ExistingLeagues';

export class Leagues extends Component {
  constructor(props) {
    super(props);

    this.state = {
      leagues: []
    };
  }

  componentDidMount = async () => {
    const leagues = await fetchLeagues(this.props.user)
    this.setState({leagues});
  }


  render() {
    return (
      <div className="leagues-container">
        <CreateLeague />
        <ExistingLeagues leagues={this.state.leagues} />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  user: state.user
});


export default connect(mapStateToProps, null)(Leagues); 

