import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CREATE_MOVIE,
  GET_ALL_MOVIES,
  GET_ONE_MOVIE,
  EDIT_ONE,
  LIKE_ONE,
  DELETE_ONE_MOVIE,
  SHOW_MOVIE_DETAIL,
  LOGIN_MODAL,
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
    const {
      data: { data },
    } = await api.getMovieById(id);

    dispatch({ type: GET_ONE_MOVIE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const editOneMovie = (id, body) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.editOneMovie(id, body);

    dispatch({ type: EDIT_ONE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const likeMovie = (id, body) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.likeOneMovie(id, body);

    dispatch({ type: LIKE_ONE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await api.deleteOneMovie(id);
    dispatch({ type: DELETE_ONE_MOVIE, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const showMovieDetail = (id) => {
  return { type: SHOW_MOVIE_DETAIL, payload: id };
};

export const switchLoginModal = () => {
  return { type: LOGIN_MODAL };
};
