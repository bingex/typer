import React from 'react';
import { connect } from 'react-redux';
import {
  addNewSearchUser,
  removeSearchUser
} from './../store/actions/userActions';

class WaitForUsers extends React.Component {
  componentDidMount() {
    this.props.addNewSearchUser();
  }

  componentWillUnmount() {
    this.props.removeSearchUser();
  }

  render() {
    return (
      <div>
        Wait for users
        {this.props.users}
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
  return {
    users: state.userReducer.searchUsers
  };
}

export default connect(mapStateToProps, { addNewSearchUser, removeSearchUser })(
  WaitForUsers
);
