import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CREATE_MOVIE,
  GET_ALL_MOVIES,
} from '../ActionTypes';
import api from '../Api';

export const openModal = () => {
  return { type: OPEN_MODAL, payload: true };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL, payload: false };
};

export const createMovie = (movie) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.createMovie(movie);

    dispatch({ type: CREATE_MOVIE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const getAllMovies = () => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.getMovies();

    dispatch({ type: GET_ALL_MOVIES, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const getOneMovie = (id) => async (dispatch) => {
  try {
    const data = api.getMovieById(id);
    console.log(data);

    dispatch({ type: 'GET_ONE_MOVIE' });
  } catch (err) {
    console.log(err);
  }
};
