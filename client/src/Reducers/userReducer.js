import { SIGNIN_USER, SIGNUP_USER, LOGOUT } from '../ActionTypes';

const initialState = {
  data: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER || SIGNUP_USER:
      return { ...state, data: action.payload };

    case LOGOUT:
      return { ...state, data: null };

    default:
      return state;
  }
};

export default userReducer;
