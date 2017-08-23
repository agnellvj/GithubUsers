/*
 *
 * GithubUsersPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GITHUB_USERS_REQUEST,
  GITHUB_USERS_SUCCESS,
  GITHUB_USERS_FAILURE
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
