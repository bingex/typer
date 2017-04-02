import { NEW_USER_CONNECTED } from './../actionTypes';
import { SEARCH_ROOM_CHANGED } from './../actionTypes';

const initial = {
  activeUsers: [],
  searchUsers: []
};

export default function userReducer(state = initial, action = {}) {
  switch (action.type) {
    case NEW_USER_CONNECTED:
      return Object.assign({}, state, {
        activeUsers: action.payload
      });

    case SEARCH_ROOM_CHANGED:
      return Object.assign({}, state, {
        searchUsers: action.payload
      });

    default:
      return state;
  }
}
