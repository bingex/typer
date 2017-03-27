import { SET_ACTIVE_WORD_INDEX } from './../actionTypes';

const initial = {
  activeWordIndex: 0
};

export default function games(state = initial, action = {}) {
  switch (action.type) {
    case SET_ACTIVE_WORD_INDEX:
      return Object.assign({}, state, {
        activeWordIndex: state.activeWordIndex + 1
      });

    default:
      return state;
  }
}
