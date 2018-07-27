import React, {Component } from 'react';
import {connect} from 'react-redux';
import './user-draft-card.css';
import { Droppable } from 'react-drag-and-drop';
import DraftPicks from '../../components/DraftPicks/DraftPicks';
import { removeTeam } from '../../actions/handleDraftCards/handleDraftCards';

export class UserDraftCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      teams: []

    };
  }

  handleDrop = (data) => {
    console.log(data)
    this.setState({teams: [...this.state.teams, data]});
    this.props.handleTeam(data);
  }

  handleDragover = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }

  render() {
    return (
      <div className="user-card">
        <div className="user-title-container">
          <h3 className="user-draft-title">{this.props.user.user_id}</h3>
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
  user: state.user,
  EPL: state.EPL
});

export const mapDispatchToProps = dispatch => ({
handleTeam: team => dispatch(removeTeam(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDraftCard);