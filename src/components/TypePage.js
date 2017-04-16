import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Text from './Text';
import TextInput from './TextInput';
import Timer from './Timer';
import TypeSpeed from './TypeSpeed';

// Data
import demoText from './../DemoText';

// Actions
import { toggleTyping } from './../store/actions/textActions';

// Styles
import styles from './../styles/TypePage.css';

const textArr = demoText.split(' ');

class TypePage extends React.Component {
  componentWillMount() {
    let state = this.props.location.state;

    if (!state || (state && !state.multi)) {
      this.props.toggleTyping(true);
    }
  }

  componentWillUnmount() {
    this.props.toggleTyping(false);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Text
          data={textArr}
          active={this.props.activeWordIndex}
          typeStarted={this.props.typeStarted}
        />
        <TextInput
          data={textArr}
          active={this.props.activeWordIndex}
          typeStarted={this.props.typeStarted}
        />
        <div className={styles.indicatorWrapper}>
          <TypeSpeed />
          <Timer typeStarted={this.props.typeStarted} />
        </div>
      </div>
    );
  }
}

TypePage.propTypes = {
  activeWordIndex: PropTypes.number.isRequired,
  toggleTyping: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    activeWordIndex: state.textReducer.activeWordIndex,
    typeStarted: state.textReducer.typeStarted
  };
}

export default connect(mapStateToProps, { toggleTyping })(TypePage);
