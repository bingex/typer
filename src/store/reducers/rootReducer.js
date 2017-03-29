import { combineReducers } from 'redux';

import textReducer from './textReducer';
import userReducer from './userReducer';

export default combineReducers({
  textReducer,
  userReducer
});
