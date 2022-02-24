export const changeFilter = (newFilterState) => ({
  type: 'CHANGE_FILTER',
  payload: newFilterState,
});

export const getSearchID = (searchID) => ({
  type: 'GET_SEARCH_ID',
  payload: searchID,
});

export const getTickets = (tickets) => ({
  type: 'GET_TICKETS',
  payload: tickets,
});
