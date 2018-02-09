import { ADD_AD } from '../constants/action-types';

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_AD:
      return [
        ...state,
        {
          title: action.firstName,
          text: action.lastName,
          price: action.email,
          uId: action.uid,
          adId: action.adId
        }
      ];

    default:
      return state;
  }
};

export default reducer;
