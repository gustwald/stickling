import { ADD_AD, ADD_ADS } from '../constants/action-types';

const initialState = {};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_AD:
      return [
        ...state,
        {
          adTitle: action.adTitle,
          adText: action.adText,
          adPrice: action.adPrice,
          uId: action.uId,
          id: action.id
        }
      ];
    case ADD_ADS:
      return [...action.ads];
    default:
      return state;
  }
};

export default reducer;
