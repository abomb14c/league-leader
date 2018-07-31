const intitialState = null;

const leagueIDReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_LEAGUE_ID":
      return action.leagueID;
    case "REMOVE_ID":
      return null;
    default:
      return state;
  }
};

export default leagueIDReducer;