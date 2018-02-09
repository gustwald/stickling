import { ADD_AD, ADD_ADS } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    // case ADD_AD:
    //   return [
    //     ...state,
    //     {
    //       title: action.firstName,
    //       text: action.lastName,
    //       price: action.email,
    //       uId: action.uid,
    //       adId: action.adId
    //     }
    //   ];
    case ADD_ADS:
      return [...action.ads];
    default:
      return state;
  }
};

export default reducer;
