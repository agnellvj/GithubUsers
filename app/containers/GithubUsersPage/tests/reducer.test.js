
import { fromJS } from 'immutable';
import githubUsersPageReducer from '../reducer';

describe('githubUsersPageReducer', () => {
  it('returns the initial state', () => {
    expect(githubUsersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
