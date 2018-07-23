import React from 'react'; 

const DraftPicks = ({teams}) => {
  const displayPicks = teams.map(team => {
    return (
      <div>
        {team.team}
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