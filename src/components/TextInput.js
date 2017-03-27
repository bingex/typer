import React from 'react';
import { connect } from 'react-redux';
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
      <input
        type="text"
        name="word"
        value={this.state.word}
        placeholder="Input text here"
        onChange={this.onChangeHandler}
      />
    );
  }
}

TextInput.propTypes = {
  active: React.PropTypes.number.isRequired,
  data: React.PropTypes.array.isRequired,
  setActiveWord: React.PropTypes.func.isRequired
};

export default connect(null, { setActiveWord })(TextInput);
