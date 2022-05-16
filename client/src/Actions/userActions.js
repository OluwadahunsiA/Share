import { SIGNUP_USER, SIGNIN_USER } from '../ActionTypes';
import api from '../Api';

export const signupuser = (body) => async (dispatch) => {
  const {
    data: { token },
  } = await api.signUpUser(body);

  dispatch({ type: SIGNUP_USER, payload: token });
  localStorage.setItem('user', JSON.stringify(token));
};

export const signinuser = (body) => async (dispatch) => {
  const {
    data: { token },
  } = await api.signInUser(body);

  dispatch({ type: SIGNIN_USER, payload: token });
  localStorage.setItem('user', JSON.stringify(token));
};
