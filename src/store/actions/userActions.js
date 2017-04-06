import { NEW_SEARCH_USER, REMOVE_USER_FROM_SEARCH } from './../actionTypes';

export function addNewSearchUser() {
  return {
    type: NEW_SEARCH_USER,
    meta: { remote: true }
  };
}

export function removeUserFromSearch(userId) {
  return {
    type: REMOVE_USER_FROM_SEARCH,
    meta: { remote: true },
    userId
  };
}
