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
          avatarUrl
          bio
          createdAt
          email
          location
          contributedRepositories(first: 1) {
            edges {
              node {
                name
              }
            }
          }
          organizations(first: 1) {
            edges {
              node {
                name
              }
            }
          }
          pullRequests(first:1) {
            nodes {
              title
              url
            }
          }
          repositories(first: 1) {
            nodes {
              name
              url
            }
          }
        }
      }
    }
  }
}`;

//2aadccc3bc62e73fc6b78b9a4afa8ce9a641a866

function request(method, url) {
  return superagent(method, url)
    .set('Authorization', 'Bearer 2aadccc3bc62e73fc6b78b9a4afa8ce9a641a866');
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
