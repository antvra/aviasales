const initialState = {
  searchId: '',
};

export const searchIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SEARCH_ID':
      return action.payload;
    default:
      return state;
  }
};
