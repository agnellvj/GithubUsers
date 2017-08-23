/**
*
* UserInfo
*
*/

import React from 'react';
import { Accordion, Grid, Jumbotron, Media, Panel, Row } from 'react-bootstrap';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import ContributedRepoList from 'components/ContributedRepoList';
import OrganizationList from 'components/OrganizationList';
import RepoList from 'components/RepoList';

class UserInfo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.fetching) {
      return (
        <Jumbotron>
          <h1>Loading Data</h1>
        </Jumbotron>
      );
    }

    if (!this.props.user) {
      return (
        <Jumbotron>
          <h1>No User Selected</h1>
        </Jumbotron>
      );
    }

    return (
      <Grid fluid>
        <Row>
          <Media>
            <Media.Left align="top">
              <img width={128} height={128} src={this.props.user.get('avatarUrl')} alt="Image"/>
            </Media.Left>
            <Media.Body>
              <Media.Heading>{this.props.user.get('email') || 'No Public Email'}</Media.Heading>
              <p>Location: {this.props.user.get('location') || 'No Location Found'}</p>
              <p>Github Birthday: {this.props.user.get('createdAt')}</p>
              <RepoList repositories={this.props.user.getIn(['repositories', 'nodes'])} />
            </Media.Body>
          </Media>
        </Row>
        <Row>
          <Accordion>
            <Panel header="All Organizations" eventKey="1">
              <OrganizationList organizations={this.props.user.getIn(['organizations', 'edges'])} />
            </Panel>
          </Accordion>
        </Row>
        <Row>
          <Accordion>
            <Panel header="Repos Contributed To" eventKey="1">
              <ContributedRepoList contributedRepos={this.props.user.getIn(['contributedRepositories', 'edges'])} />
            </Panel>
          </Accordion>
        </Row>
      </Grid>
    );
  }
}

UserInfo.propTypes = {

};

export default UserInfo;
