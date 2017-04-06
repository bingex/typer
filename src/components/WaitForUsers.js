import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  addNewSearchUser,
  removeUserFromSearch
} from './../store/actions/userActions';

class WaitForUsers extends React.Component {
  componentDidMount() {
    this.props.addNewSearchUser();
  }

  componentWillUnmount() {
    this.props.removeUserFromSearch(this.props.activeUserId);
  }

  render() {
    return (
      <div>
        {this.props.raceStartedFromServer
          ? <Redirect
              to={{
                pathname: '/type',
                state: { multi: true }
              }}
            />
          : <div>
              <p>Wait for users</p>
              {this.props.users.map(u => u.id)}
            </div>}
      </div>
    );
  }
}

WaitForUsers.propTypes = {
  users: React.PropTypes.array.isRequired,
  activeUserId: React.PropTypes.string.isRequired,
  addNewSearchUser: React.PropTypes.func.isRequired,
  removeUserFromSearch: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  let { searchUsers, raceStartedFromServer, activeUserId } = state.userReducer;
  return {
    users: searchUsers,
    activeUserId: activeUserId,
    raceStartedFromServer: raceStartedFromServer
  };
}

export default connect(mapStateToProps, {
  addNewSearchUser,
  removeUserFromSearch
})(WaitForUsers);
