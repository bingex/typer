import { REMOVE_SEARCH_USER } from './../actionTypes';
import { NEW_SEARCH_USER } from './../actionTypes';

export function addNewSearchUser() {
  return {
    type: NEW_SEARCH_USER,
    meta: { remote: true }
  };
}

export function removeSearchUser() {
  return {
    type: REMOVE_SEARCH_USER,
    meta: { remote: true }
  };
}
