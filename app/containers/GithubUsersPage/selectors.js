import { createSelector } from 'reselect';

/**
 * Direct selector to the githubUsersPage state domain
 */
const selectGithubUsersPageDomain = () => (state) => state.get('github');

/**
 * Other specific selectors
 */
const makeSelectAllGithubUsers = () => createSelector(
  selectGithubUsersPageDomain(),
  (substate) => substate.getIn(['organization', 'members', 'edges'], null)
)

/**
 * Default selector used by GithubUsersPage
 */

const makeSelectGithubUsersPage = () => createSelector(
  selectGithubUsersPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectGithubUsersPage;
export {
  selectGithubUsersPageDomain,
  makeSelectAllGithubUsers
};
