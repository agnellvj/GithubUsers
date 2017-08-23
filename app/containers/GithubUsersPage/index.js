/*
 *
 * GithubUsersPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Col, Grid, Row} from 'react-bootstrap';

import { createStructuredSelector } from 'reselect';
import makeSelectGithubUsersPage from './selectors';
import { makeSelectAllGithubUsers } from './selectors';

import UserList from 'components/UserList';

export class GithubUsersPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
          <Col xs={2} md={2}>
            <UserList users={this.props.users} />
          </Col>
          <Col xs={8} md={8}>
            User Info
          </Col>
        </Row>
      </Grid>
    );
  }
}

GithubUsersPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  GithubUsersPage: makeSelectGithubUsersPage(),
  users: makeSelectAllGithubUsers(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GithubUsersPage);
