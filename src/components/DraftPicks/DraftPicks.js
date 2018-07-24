import React from 'react'; 

const DraftPicks = ({teams}) => {
  const displayPicks = teams.map(team => {
    return (
      <div className="draft-card draft-pick">
        <h3 className="draft-name">{team.team}</h3>
      </div>
    )
  })
  return (
    <div>
      {displayPicks}
    </div>
  )

}

export default DraftPicks;