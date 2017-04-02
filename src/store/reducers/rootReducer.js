import { combineReducers } from 'redux';

import textReducer from './textReducer';
import userReducer from './userReducer';
import calcReducer from './calcReducer';

export default combineReducers({
  textReducer,
  userReducer,
  calcReducer
});
