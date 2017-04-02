import { SET_TIME_PASSED } from './../actionTypes';

const initial = {
  timePassed: 0
};

export default function calcReducer(state = initial, action = {}) {
  switch (action.type) {
    case SET_TIME_PASSED:
      return Object.assign({}, state, {
        timePassed: state.timePassed + 1
      });

    default:
      return state;
  }
}
