import React from 'react'; 
import PropTypes from 'prop-types';

const DraftPicks = ({teams}) => {
  const displayPicks = teams.map((team, index) => {
    return (
      <div key={index} className="draft-card draft-pick">
        <h3 className="draft-name">{team.team}</h3>
      </div>
    );
  });
  return (
    <div>
      {displayPicks}
    </div>
  );

};

export default DraftPicks;

DraftPicks.propTypes = {
  team: PropTypes.arrayOf(PropTypes.object)
};