import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Text from './Text';
import TextInput from './TextInput';
import Timer from './Timer';
import demoText from './../DemoText';

const textArr = demoText.split(' ');

class TypePage extends React.Component {
  render() {
    return (
      <SWrapper>
        <Text data={textArr} active={this.props.activeWordIndex} />
        <TextInput data={textArr} active={this.props.activeWordIndex} />
        <Timer />
      </SWrapper>
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

// STYLES
const SWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 20px;
`;
