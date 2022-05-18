import { SIGNUP_USER, SIGNIN_USER, LOGOUT } from '../ActionTypes';
import api from '../Api';

export const signupuser = (body) => async (dispatch) => {
  const {
    data: { token, data },
  } = await api.signUpUser(body);

  dispatch({ type: SIGNUP_USER, payload: { token, data } });
  localStorage.setItem(
    'user',
    JSON.stringify({ username: data.username, id: data._id, token })
  );
};

export const signinuser = (body) => async (dispatch) => {
  const {
    data: { token, data },
  } = await api.signInUser(body);

  dispatch({ type: SIGNIN_USER, payload: { token, data } });
  localStorage.setItem(
    'user',
    JSON.stringify({ username: data.username, id: data._id, token })
  );
};

export const logout = () => {
  return { type: LOGOUT };
};
