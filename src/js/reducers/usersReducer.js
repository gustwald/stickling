import { ADD_USERS } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS:
      return [
        ...state,
        {
          firstName: action.firstName,
          lastName: action.lastName,
          uID: action.uid,
          isCurrentUser: action.isCurrentUser
        }
      ];

    default:
      return state;
  }
};

export default reducer;
