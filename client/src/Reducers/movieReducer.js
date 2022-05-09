import { OPEN_MODAL, CLOSE_MODAL } from '../ActionTypes';

const initialState = {
  openModal: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, openModal: true };

    case CLOSE_MODAL:
      return { ...state, openModal: false };
    default:
      return state;
  }
};

export default movieReducer;
