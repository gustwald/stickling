import { EXAMPLEACTION } from '../constants/action-types';

const fireReducer = (state = [], action) => {
  switch (action.type) {
    case EXAMPLEACTION:
      return state;

    default:
      return state;
  }
};

export default fireReducer;
