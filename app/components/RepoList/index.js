/**
*
* RepoList
*
*/

import React from 'react';

import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class RepoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let repoListView = this.props.repositories.map(repo => (
      <ListGroupItem key={repo.get('id')}>{repo.get('name')}</ListGroupItem>
    ));

    if (repoListView.size === 0) {
      repoListView = (
        <ListGroupItem bsStyle="warning" key='nothing'>No Repositories to show</ListGroupItem>
      );
    }

    return (
      <Panel collapsible header="Repositories">
        <ListGroup fill>
          {repoListView}
        </ListGroup>
      </Panel>
    );
  }
}

RepoList.propTypes = {

};

export default RepoList;
