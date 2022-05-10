import { OPEN_MODAL, CLOSE_MODAL } from '../ActionTypes';
import api from '../Api';

export const openModal = () => {
  return { type: OPEN_MODAL, payload: true };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL, payload: false };
};

export const createMovie = (movie) => async (dispatch) => {
  try {
    const result = await api.createMovie(movie);
    console.log(result);
    dispatch({});
  } catch (err) {
    console.log(err);
  }
};
