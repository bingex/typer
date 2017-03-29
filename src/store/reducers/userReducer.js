import { NEW_USER_CONNECTED } from './../actionTypes';

const initial = {
  activeUsers: []
};

export default function userReducer(state = initial, action = {}) {
  switch (action.type) {
    case NEW_USER_CONNECTED:
      return Object.assign({}, state, {
        activeUsers: action.payload
      });

    default:
      return state;
  }
}
