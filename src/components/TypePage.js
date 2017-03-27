import React from 'react';
import { connect } from 'react-redux';

import Text from './Text';
import TextInput from './TextInput';

import demoText from './../DemoText';

const textArr = demoText.split(' ');

class TypePage extends React.Component {
  render() {
    return (
      <div>
        <Text data={textArr} active={this.props.activeWordIndex} />
        <TextInput data={textArr} active={this.props.activeWordIndex} />
      </div>
    );
  }
}

TypePage.propTypes = {
  activeWordIndex: React.PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    activeWordIndex: state.textReducer.activeWordIndex
  };
}

export default connect(mapStateToProps, {})(TypePage);
