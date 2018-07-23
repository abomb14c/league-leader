import React from 'react';
import {connect} from 'react-redux';
import './user-draft-card.css';

export const UserDraftCard = (props) => {

  return (
    <div className="user-card">
      <div className="user-title-container">
      <h3 className="user-draft-title">{props.user.name}</h3>
      </div>
    </div>
  )
}

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps,null)(UserDraftCard);