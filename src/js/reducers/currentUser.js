import { SETCURRENT_USER, REMOVECURRENT_USER } from '../constants/action-types';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETCURRENT_USER:
      return {
        ...state,
        id: action.id
      };

    case REMOVECURRENT_USER:
      console.log({ action });
      return {
        ...initialState
      };
    default:
      return state;
  }
};

export default reducer;
