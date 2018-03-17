import { ADD_USER, ADD_USERS, ADD_SOCIALLINKS } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          first: action.firstName,
          last: action.lastName,
          email: action.email,
          uID: action.uid,
          photo: action.photo,
          instagram: action.instagram,
          twitter: action.twitter
        }
      ];
    case ADD_SOCIALLINKS:
      console.log('sdasdad');

      return state.map(
        u =>
          u.uID === action.uid ? { ...u, instagram: action.instagram, twitter: action.twitter } : u
      );

    case ADD_USERS:
      return [...action.users];

    default:
      return state;
  }
};

export default reducer;
