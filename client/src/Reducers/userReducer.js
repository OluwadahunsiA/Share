import { SIGNIN_USER, SIGNUP_USER, LOGOUT } from '../ActionTypes';

const initialState = {
  token: null,
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_USER || SIGNUP_USER:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.data,
      };

    case LOGOUT:
      return { ...state, token: null, user: null };

    default:
      return state;
  }
};

export default userReducer;
