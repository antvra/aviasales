const initialState = {
  tickets: [],
  loadComplete: false,
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TICKETS':
      return { ...state, tickets: [...state.tickets, ...action.payload.tickets], loadComplete: action.payload.stop };
    default:
      return state;
  }
};
