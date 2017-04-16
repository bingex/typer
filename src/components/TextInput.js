import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setActiveWord } from './../store/actions/textActions';

class TextInput extends React.Component {
  state = {
    word: '',
    wrong: false
  };

  componentWillUnmount() {
    // Refresh active word index when unmount
    this.props.setActiveWord(0);
  }

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, wrong: false });

    // If inputed word equal needed word and current input symbol is space
    if (
      this.state.word === this.props.data[this.props.active] &&
      e.target.value === this.state.word + ' '
    ) {
      // Clean input for next word
      this.setState({ word: '' });

      // Set active word index to next
      this.props.setActiveWord(this.props.active + 1);
    } else if (e.target.value.includes(' ')) {
      // If we press space and word !== to needed show text in red color
      this.setState({ wrong: true });
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
          style={{ color: this.state.wrong ? '#B71C1C' : '#263238' }}
          disabled={!this.props.typeStarted}
        />
      </SInputWrapper>
    );
  }
}

TextInput.propTypes = {
  active: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  setActiveWord: PropTypes.func.isRequired
};

export default connect(null, { setActiveWord })(TextInput);

// STYLES
const SInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0 0 0;
`;

const SInput = styled.input`
  width: 100%;
  height: 36px;
  border-radius: 3px;
  padding-left: 10px;
  border: 2px solid #00BFA5;
  outline: none;
  font-size: 16px;

  &::-webkit-input-placeholder {
    color: #CFD8DC;
  }
`;
