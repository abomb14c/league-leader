import React from 'react';
import { connect } from 'react-redux';
import DraftCard from '../../components/DraftCard/DraftCard';
import { Draggable } from 'react-drag-and-drop';
import PropTypes from 'prop-types';

export const DraftTeamsContainer = (props) => {
  const displayDraftTeams = props.draftTeams.map((team, index) => {
    return (
      <Draggable type="team" data={team.name} key={index} >
        <DraftCard name={team.name}  />
      </Draggable>
    );
  });

  return (
    <div>
      {displayDraftTeams}
    </div>
  );
};


export const mapStateToProps = state => ({
  draftTeams: state.draftTeams
});

export default connect(mapStateToProps, null)(DraftTeamsContainer);

DraftTeamsContainer.propTypes = {
  draftTeams: PropTypes.arrayOf(PropTypes.object)
};