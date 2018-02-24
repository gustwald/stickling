import { ADD_USER, ADD_USERS } from '../constants/action-types';

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
          photo: action.photo
        }
      ];
    case ADD_USERS:
      return [...action.users];

    default:
      return state;
  }
};

export default reducer;
