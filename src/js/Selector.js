export const getCurrentUser = state => {
  const { usersReducer, currentUser } = state;
  if (!currentUser.id) return null;

  return usersReducer.find(u => u.uID === currentUser.id);
};

export const getUserById = (state, uID) => {
  const { usersReducer } = state;

  return usersReducer.find(u => u.uID === uID);
};

export const getAdsByUser = (state, uID) => {
  const { adsReducer } = state;
  return adsReducer.filter(ad => ad.uId === uID);
};
