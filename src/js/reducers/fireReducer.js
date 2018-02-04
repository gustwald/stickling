import { ADD_USERS } from '../constants/action-types';

const fireReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS:
      console.log('lägger till user i state');
      console.log(action);
      return [
        ...state,
        {
          user: action.users
        }
      ];

    default:
      return state;
  }
};

export default fireReducer;
