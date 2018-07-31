export const createLeague = leagueInfo => {
  return {
    type:"ADD_NEW_LEAGUE",
    leagueInfo
  };
};

export const addTeam = team => {
  return {
    type: "ADD_TEAM",
    team
  };
};