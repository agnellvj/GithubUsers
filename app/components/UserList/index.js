/**
*
* UserList
*
*/

import React from 'react';
import { Nav, NavItem} from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class UserList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let userListView = [];
    if (this.props.users) {
      userListView = this.props.users.map(user => (
          <NavItem key={`${user.getIn(['node','name'])}`}>
            {user.getIn(['node','name'], null)}
          </NavItem>
        )
      );
    }

    return (
      <div>
        <Nav bsStyle="pills" stacked>
          {userListView}
        </Nav>
      </div>
    );
  }
}

UserList.propTypes = {

};

export default UserList;
