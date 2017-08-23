/*
 *
 * GithubUsersPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GITHUB_USERS_REQUEST,
  GITHUB_USERS_SUCCESS,
  GITHUB_USERS_FAILURE
} from './constants';

const initialState = fromJS({ github: []});

function github(state = initialState, action) {
  switch (action.type) {
    case GITHUB_USERS_SUCCESS:
      return fromJS(action.payload);
    default:
      return state;
  }
}

export default github;
