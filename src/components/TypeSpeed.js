import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class TypeSpeed extends React.Component {
  state = {
    speed: 0
  };

  componentWillReceiveProps() {
    let speed = Math.round(
      this.props.activeWordIndex * 60 / this.props.timePassed
    );

    if (isFinite(speed)) {
      this.setState({ speed });
    }
  }

  render() {
    return (
      <div>
        <span>{this.state.speed}</span>
        <span style={{ fontSize: '12px' }}> wpm</span>
      </div>
    );
  }
}

TypeSpeed.propTypes = {
  timePassed: PropTypes.number.isRequired,
  activeWordIndex: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    timePassed: state.calcReducer.timePassed,
    activeWordIndex: state.textReducer.activeWordIndex,
    typeStarted: state.textReducer.typeStartedAfterTimer
  };
}

export default connect(mapStateToProps, {})(TypeSpeed);
