export const addDraftCards = (draftTeams) => {
  return {
    type: "ADD_TEAMS",
    draftTeams
  };
};

export const removeTeam = (team) => {
  return {
    type: "REMOVE_TEAM",
    team
  };
};