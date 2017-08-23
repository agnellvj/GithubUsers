/**
*
* OrganizationList
*
*/

import React from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class OrganizationList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const orgListView = this.props.organizations.map((org) => (
      <ListGroupItem key={org.getIn(['node','id'])}>{org.getIn(['node','name'])}</ListGroupItem>
    ));

    return (
      <ListGroup>
        {orgListView}
      </ListGroup>
    );
  }
}

OrganizationList.propTypes = {

};

export default OrganizationList;
