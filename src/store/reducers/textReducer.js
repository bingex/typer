import { SET_ACTIVE_WORD_INDEX, TOGGLE_TYPING } from './../actionTypes';

const initial = {
  activeWordIndex: 0,
  typeStarted: false
};

export default function games(state = initial, action = {}) {
  switch (action.type) {
    case SET_ACTIVE_WORD_INDEX:
      return Object.assign({}, state, {
        activeWordIndex: action.activeWordIndex
      });

    case TOGGLE_TYPING:
      return Object.assign({}, state, {
        typeStarted: action.typeStarted
      });

    default:
      return state;
  }
}
