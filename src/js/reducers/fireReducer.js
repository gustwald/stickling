import { ADD_USERS, SETCURRENT_USER } from '../constants/action-types';

const fireReducer = (state = [], action) => {
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
    case SETCURRENT_USER:
      return state.map(
        user => (user.uID === action.id ? { ...user, isCurrentUser: !user.isCurrentUser } : user)
      );

    default:
      return state;
  }
};

export default fireReducer;
