import {
  NEW_USER_CONNECTED,
  SEARCH_ROOM_CHANGED,
  START_TYPE_FROM_SERVER
} from './../actionTypes';

const initial = {
  activeUsers: [],
  searchUsers: [],
  raceStartedFromServer: false
};

export default function userReducer(state = initial, action = {}) {
  switch (action.type) {
    case NEW_USER_CONNECTED:
      return Object.assign({}, state, {
        activeUsers: action.payload
      });

    case START_TYPE_FROM_SERVER:
      return Object.assign({}, state, {
        raceStartedFromServer: action.payload
      });

    case SEARCH_ROOM_CHANGED:
      return Object.assign({}, state, {
        searchUsers: action.payload
      });

    default:
      return state;
  }
}
