import superagent from 'superagent';
import { call, put } from 'redux-saga/effects';

import {
  GITHUB_USERS_REQUEST,
  GITHUB_USERS_SUCCESS,
  GITHUB_USERS_FAILURE
} from './constants';

const query = `query {
  organization(login: "code42") {
    members(first: 100) {
      edges {
        node {
          name
          id
          avatarUrl
          createdAt
          email
          location
          contributedRepositories(first: 20) {
            edges {
              node {
                id
                name
              }
            }
          }
          organizations(first: 10) {
            edges {
              node {
                id
                name
              }
            }
          }
          repositories(first: 20) {
            nodes {
              id
              name
              url
            }
          }
        }
      }
    }
  }
}`;

/*
  Scopes for personal token access for graphQL:
  repo:status
  repo_deployment
  public_repo
  read:org
  read:public_key
  read:repo_hook
  user
  read:gpg_key
*/
function request(method, url) {
  return superagent(method, url)
    .set('Authorization', 'Bearer 4f9ab11fc909326168068216a1d6a8cd99da99fc');
}

// Individual exports for testing
export function* defaultSaga() {
  try {
    yield put({ type: GITHUB_USERS_REQUEST });

    const req = request('POST', 'https://api.github.com/graphql')
      .send({ query: query });
    const apiResponse = yield req;
    yield put({
      type: GITHUB_USERS_SUCCESS,
      payload: apiResponse.body.data,
    });
  } catch(error) {
    yield put({ type: GITHUB_USERS_FAILURE, error });
  }}

// All sagas to be loaded
export default [
  defaultSaga,
];
