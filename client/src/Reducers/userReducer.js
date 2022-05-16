import { SIGNIN_USER, SIGNUP_USER } from '../ActionTypes';

const initialState = {
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER || SIGNUP_USER:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};

export default userReducer;
