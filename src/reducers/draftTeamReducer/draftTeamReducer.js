const intitialState = [];

const draftTeamReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_TEAMS":
      return action.draftTeams;

    default:
      return state;
  }
};

export default draftTeamReducer;