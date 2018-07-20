const intitialState = [];

const englishSoccerReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_ENGLISH_SOCCER":
      return action.EPL;

    default:
      return state;
  }
};

export default englishSoccerReducer;