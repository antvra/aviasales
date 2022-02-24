import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { searchIDReducer } from './reducers/searchIDReducer';
import { ticketsReducer } from './reducers/ticketsReducer';
import { transferReducer } from './reducers/transferReducer';

const rootReducer = combineReducers({ transfers: transferReducer, searchID: searchIDReducer, tickets: ticketsReducer });

const middleWares = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
