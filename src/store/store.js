import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { transferReducer } from './reducers/transferReducer';

const rootReducer = combineReducers({ transferReducer });

export const store = createStore(rootReducer, composeWithDevTools());
