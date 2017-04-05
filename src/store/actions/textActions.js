import { SET_ACTIVE_WORD_INDEX, TOGGLE_TYPING } from './../actionTypes';

export function setActiveWord(index) {
  return {
    type: SET_ACTIVE_WORD_INDEX,
    activeWordIndex: index
  };
}

export function toggleTyping(start) {
  return {
    type: TOGGLE_TYPING,
    typeStarted: start
  };
}
