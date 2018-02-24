import { ADD_AD, ADD_ADS, REMOVE_AD } from '../constants/action-types';

const initialState = {};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_AD:
      return [...state, action.ad];
    case ADD_ADS:
      return [...action.ads];
    case REMOVE_AD:
      console.log('tjena');
      return state.adsReducer.filter(id => id !== action.id);
    default:
      return state;
  }
};

export default reducer;
