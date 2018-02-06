import { ADD_USERS, CURRENT_USER } from '../constants/action-types';

const fireReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_USERS:
      // console.log('lägger till user i state');
      console.log(action);
      return [
        ...state,
        {
          user: action.users,
          isCurrentUser: action.isCurrentUser
        }
      ];
    case CURRENT_USER:
      // console.log(action);
      // console.log(state);
      return state.map(
        users =>
          Object.keys(users).forEach(key => {
            // console.log(key); // the name of the current key.
            console.log(users[key].uID); // the value of the current key.
          })

        // Object.keys(users).forEach(key => console.log(users[key].uID))
        // users.map(
        //   user =>
        //     user.uID === action.id ? { ...user, isCurrentUser: !user.isCurrentUser } : user
        // )
        // user => (user.uID === action.id ? { ...user, currentUser: !user.currentUser } : user)
      );

    default:
      return state;
  }
};

export default fireReducer;
