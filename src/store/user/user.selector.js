export const selectUser = (state) => {
  const user = state.user.currentUser;

  return user;
};
