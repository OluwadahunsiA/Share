import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CREATE_MOVIE,
  GET_ALL_MOVIES,
} from '../ActionTypes';

const initialState = {
  openModal: false,
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openModal: true };

    case CLOSE_MODAL:
      return { ...state, openModal: false };
    case CREATE_MOVIE:
      return { ...state, movies: [...state.movies, action.payload]};
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload].reverse(),
      };
    default:
      return state;
  }
};

export default movieReducer;
