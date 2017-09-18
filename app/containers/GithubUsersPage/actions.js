/*
 *
 * GithubUsersPage actions
 *
 */

import {
  DEFAULT_ACTION,

  GITHUB_USERS_REQUEST,
  GITHUB_USERS_SUCCESS,
  GITHUB_USERS_FAILURE,

  SET_SELECTED_USER
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setSelectedUser(id) {
  return {
    type: SET_SELECTED_USER,
    id
  };
}

export function loadGithubData() {
  return {
    type: GITHUB_USERS_SUCCESS
  }
}

export function loadedGithubData(payload) {
  return {
    type: GITHUB_USERS_SUCCESS,
    payload
  }
}
export function loadGithubDataError(error) {
  return {
    type: GITHUB_USERS_FAILURE,
    error
  }
}