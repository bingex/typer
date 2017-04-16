import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  users: PropTypes.array.isRequired,
  activeUserId: PropTypes.string.isRequired,
  addNewSearchUser: PropTypes.func.isRequired,
  removeUserFromSearch: PropTypes.func.isRequired
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
