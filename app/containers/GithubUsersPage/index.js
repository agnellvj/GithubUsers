/*
 *
 * GithubUsersPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Grid, PageHeader, Row} from 'react-bootstrap';

import { createStructuredSelector } from 'reselect';
import makeSelectGithubUsersPage from './selectors';
import {
  makeSelectAllGithubUsers,
  makeSelectedUser,
  makeIsFetching
} from './selectors';

import { setSelectedUser } from './actions';

import UserInfo from 'components/UserInfo';
import UserList from 'components/UserList';

export class GithubUsersPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Grid>
          <Col>
            <PageHeader>Github Users</PageHeader>
          </Col>
        </Grid>
        <Grid fluid>
          <Row className="show-grid">
            <Col xs={2} md={2}>
              <UserList
                users={this.props.users}
                setUser={this.props.setSelectedUser}
                fetching={this.props.fetching}
              />
            </Col>
            <Col xs={8} md={8}>
              <UserInfo
                user={this.props.selectedUser}
                fetching={this.props.fetching}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

GithubUsersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  GithubUsersPage: makeSelectGithubUsersPage(),
  users: makeSelectAllGithubUsers(),
  selectedUser: makeSelectedUser(),
  fetching: makeIsFetching()
});

function mapDispatchToProps(dispatch) {
  return {
    setSelectedUser: (id) => {
      dispatch(setSelectedUser(id));
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubUsersPage);
