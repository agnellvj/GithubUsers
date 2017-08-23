/**
*
* UserList
*
*/

import React from 'react';
import { Alert, Nav, NavItem} from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class UserList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.fetching) {
      return (
        <Alert bsStyle="info">
          <strong>Loading Data</strong>
        </Alert>
      );
    }
    let userListView = [];
    if (this.props.users) {
      userListView = this.props.users.map(user => (
          <NavItem
            key={`${user.getIn(['node','id'])}`}
            onClick={(e) => this.props.setUser(user.getIn(['node']))}
          >
            {user.getIn(['node','name'], null)}
          </NavItem>
        )
      );
    }

    return (
      <Nav bsStyle="pills" stacked>
        {userListView}
      </Nav>
    );
  }
}

UserList.propTypes = {

};

export default UserList;
