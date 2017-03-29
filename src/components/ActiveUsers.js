import React from 'react';
import { connect } from 'react-redux';

class ActiveUsers extends React.Component {
  render() {
    const userList = this.props.users.map((user, index) => {
      return <li key={index}>{user}</li>;
    });

    return <ul>{userList}</ul>;
  }
}

ActiveUsers.propTypes = {
  users: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.userReducer.activeUsers
  };
}

export default connect(mapStateToProps, {})(ActiveUsers);
