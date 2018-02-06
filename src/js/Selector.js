export const getCurrentUser = state => {
  const { usersReducer, currentUser } = state;
  if (!currentUser.id) return null;

  return usersReducer.find(u => u.uID === currentUser.id);
};

// export const getPostById = (state, id) => {
//     // return state.posts.find(u => u.uID === currentUser.id);
// }
