import { EXAMPLEACTION } from '../constants/action-types';

const exampleReducer = (state = [], action) => {
  switch (action.type) {
    case EXAMPLEACTION:
      return state;

    default:
      return state;
  }
};

export default exampleReducer;
