const intitialState = {};

const userReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { user_id: action.user_id };
    case "LOGOUT_USER":
      return {};
    default:
      return state;
  }
};

export default userReducer;