/*
 *
 * GithubUsersPage reducer
 *
 */
import { fromJS } from 'immutable';

import {
  GITHUB_USERS_REQUEST,
  GITHUB_USERS_SUCCESS,
  GITHUB_USERS_FAILURE,
  SET_SELECTED_USER
} from './constants';

const initialState = fromJS({ isFetching: false, github: [] });

function github(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_USER:
      return state.set('selectedUser', action.id);
    case GITHUB_USERS_REQUEST:
      return state.merge({ isFetching: true });
    case GITHUB_USERS_SUCCESS:
      return state.merge(action.payload, { isFetching: false });
    case GITHUB_USERS_FAILURE:
      return state.merge(action.payload, { isFetching: false });
    default:
      return state;
  }
}

export default github;
