import { SET_ACTIVE_WORD_INDEX } from './../actionTypes';

export function setActiveWord(index) {
  return {
    type: SET_ACTIVE_WORD_INDEX,
    activeWordIndex: index
  };
}
