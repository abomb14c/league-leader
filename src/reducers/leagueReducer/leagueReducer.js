const intitialState = {};

const leagueReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_NEW_LEAGUE":
      return action.leagueInfo;
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

export default leagueReducer;