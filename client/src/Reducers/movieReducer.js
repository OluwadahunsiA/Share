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

const initialState = {
  openModal: false,
  loginModal: true,
  editMovie: null,
  movies: [],
  selectedMovie: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_MODAL:
      return { ...state, loginModal: !state.loginModal };
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

    case LIKE_ONE:
      return {
        ...state,
        movies: state.movies.map((movie) => {
          if (movie._id !== action.payload._id) {
            return movie;
          } else {
            return action.payload;
          }
        }),
      };
    case DELETE_ONE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie._id !== action.payload),
      };
    case SHOW_MOVIE_DETAIL:
      return {
        ...state,
        selectedMovie: state.movies.filter(
          (movie) => movie._id === action.payload
        ),
      };

    default:
      return state;
  }
};

export default movieReducer;
