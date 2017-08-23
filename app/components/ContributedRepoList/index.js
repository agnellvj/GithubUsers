/**
*
* ContributedRepoList
*
*/

import React from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class ContributedRepoList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let contribRepoListView = this.props.contributedRepos.map((org) => (
      <ListGroupItem key={org.getIn(['node','id'])}>{org.getIn(['node','name'])}</ListGroupItem>
    ));

    if (contribRepoListView.size === 0) {
      contribRepoListView = (
        <ListGroupItem bsStyle="warning" key='nothing'>No Contributions</ListGroupItem>
      );
    }

    return (
      <ListGroup>
        {contribRepoListView}
      </ListGroup>
    );
  }
}

ContributedRepoList.propTypes = {

};

export default ContributedRepoList;
