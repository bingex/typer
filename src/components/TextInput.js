import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setActiveWord } from './../store/actions/textActions';

class TextInput extends React.Component {
  state = { word: '' };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });

    if (this.state.word === this.props.data[this.props.active]) {
      this.setState({ word: '' });
      this.props.setActiveWord();
    }
  };

  render() {
    return (
      <SInputWrapper>
        <SInput
          type="text"
          name="word"
          value={this.state.word}
          placeholder="Input text here"
          onChange={this.onChangeHandler}
          autoComplete="off"
        />
      </SInputWrapper>
    );
  }
}

TextInput.propTypes = {
  active: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired,
  setActiveWord: React.PropTypes.func.isRequired
};

export default connect(null, { setActiveWord })(TextInput);

// STYLES
const SInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

const SInput = styled.input`
  width: 100%;
  max-width: 300px;
  height: 36px;
  border-radius: 3px;
  padding-left: 10px;
  border: 1px solid #00BFA5;
  outline: none;
  font-size: 16px;
  color: #263238;

  &::-webkit-input-placeholder {
    color: #CFD8DC;
  }
`;
