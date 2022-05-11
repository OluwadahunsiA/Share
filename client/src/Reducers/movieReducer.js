import {
  OPEN_MODAL,
  CLOSE_MODAL,
  CREATE_MOVIE,
  GET_ALL_MOVIES,
  GET_ONE_MOVIE,
  EDIT_ONE,
} from '../ActionTypes';

const initialState = {
  openModal: false,
  editMovie: null,
  movies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openModal: true };

    case CLOSE_MODAL:
      return { ...state, openModal: false };
    case CREATE_MOVIE:
      return { ...state, movies: [...state.movies, action.payload] };
    case GET_ALL_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload].reverse(),
      };
    case GET_ONE_MOVIE:
      return {
        ...state,
        openModal: true,
        editMovie: action.payload,
      };
    case EDIT_ONE:
      return {
        ...state,
        editMovie: null,
        movies: state.movies.map((movie) => {
          if (movie._id !== action.payload._id) {
            return movie;
          } else {
            return action.payload;
          }
        }),
      };
    default:
      return state;
  }
};

export default movieReducer;
