const intitialState = [];

const draftTeamReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_TEAMS":
      return action.draftTeams;
    case "REMOVE_TEAM":
      const filterTeams = state.filter(team => {
        return team.name !== action.team.team;
      });
      return filterTeams;
    default:
      return state;
  }
};

export default draftTeamReducer;