import { API } from '../api';
import { getSearchID, getTickets } from './actions';

export const searchID = () => (dispatch) => {
  API.getSearchIDfromAPI().then((response) => dispatch(getSearchID(response.data)));
};

export const tickets = (searchId) => (dispatch) => {
  API.getTicketsFromApi(searchId).then((response) => dispatch(getTickets(response.data)));
};
