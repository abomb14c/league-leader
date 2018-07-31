import React, {Component } from 'react';
import {connect} from 'react-redux';
import './user-draft-card.css';
import { Droppable } from 'react-drag-and-drop';
import DraftPicks from '../../components/DraftPicks/DraftPicks';
import { removeTeam } from '../../actions/handleDraftCards/handleDraftCards';
import PropTypes from 'prop-types';

export class UserDraftCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      teams: []
    };
  }

  handleDrop = (teamData) => {
    this.setState({teams: [...this.state.teams, teamData]});
    this.props.handleTeam(teamData);
    this.props.addDraftPick(teamData)
  }

  handleDragover = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  render() {
    return (
      <div className="user-card">
        <div className="user-title-container">
          <h3 className="user-draft-title">{this.props.user.username}</h3>
        </div>
        <Droppable
          types={['team']} 
          onDrop={this.handleDrop}>
          <div id="target"  onDragOver={this.handleDragover} className="draft-board">
            <DraftPicks teams={this.state.teams} />
          </div>
        </Droppable>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  handleTeam: team => dispatch(removeTeam(team)),
  addDraftPick: team => dispatch(addTeam(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDraftCard);

UserDraftCard.propTypes = {
  user: PropTypes.object,
  handleTeam: PropTypes.func
};