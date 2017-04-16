import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import ActiveUsers from './ActiveUsers';

// Styles
import styles from './../styles/Welcome.css';

class Welcome extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div style={{ width: '120px' }}>
            <Link className={styles.link} to="/type">Single player</Link>
            <Link className={styles.link} to="/multi">Multiplayer</Link>
          </div>
          <span className={styles.title}>Typer. Test your speed.</span>
        </div>

        <div className={styles.right}>
          <ActiveUsers />
          <span className={styles.title}>YOU: {this.props.activeUserId}</span>
        </div>
      </div>
    );
  }
}

Welcome.propTypes = {
  activeUserId: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    activeUserId: state.userReducer.activeUserId
  };
}

export default connect(mapStateToProps, {})(Welcome);
