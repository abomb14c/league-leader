export const updateUser = user => {
  return {
    type: "ADD_USER",
    user_id: user.email
  };
};

export const logOutUser = () => {
  return {
    type: "LOGOUT_USER"
  }
}
