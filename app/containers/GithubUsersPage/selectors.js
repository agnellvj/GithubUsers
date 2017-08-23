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

const makeSelectedUser = () => createSelector(
  selectGithubUsersPageDomain(),
  (substate) => substate.get('selectedUser')
)

const makeIsFetching = () => createSelector(
  selectGithubUsersPageDomain(),
  (substate) => substate.get('isFetching')
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
  makeSelectAllGithubUsers,
  makeSelectedUser,
  makeIsFetching
};
