export const addLeagueID = leagueID => {
  return {
    type:'ADD_LEAGUE_ID',
    leagueID
  };
};

export const removeLeagueID = () => {
  return {
    type: 'REAMOVE_LEAGUE_ID'
  };
};