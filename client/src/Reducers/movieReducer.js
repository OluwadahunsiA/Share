const movieReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_ALL':
      return state;
    default:
      return state;
  }
};

export default movieReducer;
