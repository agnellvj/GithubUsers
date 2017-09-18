import superagent from 'superagent';
import { call, put } from 'redux-saga/effects';

import {
  loadGithubData,
  loadedGithubData,
  loadGithubDataError
} from './actions';

const query = `query {
  organization(login: "dojo4") {
    members(first: 10) {
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
    .set('Authorization', 'Bearer ');
}

// Individual exports for testing
export function* defaultSaga() {
  try {
    yield put(loadGithubData);

    const req = request('POST', 'https://api.github.com/graphql')
      .send({ query: query });
    const apiResponse = yield req;

    yield put(loadedGithubData(apiResponse.body.data));
  } catch(error) {
    yield put(loadGithubDataError(error));
  }}

// All sagas to be loaded
export default [
  defaultSaga,
];
