import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Text from './Text';
import TextInput from './TextInput';
import Timer from './Timer';
import TypeSpeed from './TypeSpeed';
import demoText from './../DemoText';
import { toggleTyping } from './../store/actions/textActions';

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
      <SWrapper>
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
        <TypeSpeed />
        <Timer typeStarted={this.props.typeStarted} />
      </SWrapper>
    );
  }
}

TypePage.propTypes = {
  activeWordIndex: React.PropTypes.number.isRequired,
  toggleTyping: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    activeWordIndex: state.textReducer.activeWordIndex,
    typeStarted: state.textReducer.typeStarted
  };
}

export default connect(mapStateToProps, { toggleTyping })(TypePage);

// STYLES
const SWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 20px;
`;
