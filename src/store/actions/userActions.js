import { NEW_SEARCH_USER } from './../actionTypes';

export function addNewSearchUser() {
  return {
    type: NEW_SEARCH_USER,
    meta: { remote: true }
  };
}
