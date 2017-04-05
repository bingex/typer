import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  addNewSearchUser,
  removeSearchUser
} from './../store/actions/userActions';

class WaitForUsers extends React.Component {
  componentDidMount() {
    this.props.addNewSearchUser();
  }

  render() {
    return (
      <div>
        {this.props.raceStartedFromServer
          ? <Redirect
              to={{
                pathname: '/type',
                state: { multi: true, success: true }
              }}
            />
          : <div>
              <p>Wait for users</p>
              {this.props.users}
            </div>}
      </div>
    );
  }
}

WaitForUsers.propTypes = {
  users: React.PropTypes.array.isRequired,
  addNewSearchUser: React.PropTypes.func.isRequired,
  removeSearchUser: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  let { searchUsers, raceStartedFromServer } = state.userReducer;
  return {
    users: searchUsers,
    raceStartedFromServer: raceStartedFromServer
  };
}

export default connect(mapStateToProps, { addNewSearchUser, removeSearchUser })(
  WaitForUsers
);
