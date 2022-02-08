import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import countryReducer from './countries/index';

const reducer = combineReducers({
  countries: countryReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
