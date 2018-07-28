const intitialState = {'EASTERN CONFERENCE':[], 'WESTERN CONFERENCE':[]};

const nbaReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_NBA":
      return action.NBA;

    default:
      return state;
  }
};

export default nbaReducer;