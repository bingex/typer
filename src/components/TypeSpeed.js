import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { SIndicatorWrapper } from './../styles/generalStyles';

const STypeSpeedWrapper = styled(SIndicatorWrapper)`
  left: 20px;
  flex-direction: column;
`;

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
      <STypeSpeedWrapper>
        <span>{this.state.speed}</span>
        <span>wpm</span>
      </STypeSpeedWrapper>
    );
  }
}

TypeSpeed.propTypes = {
  timePassed: React.PropTypes.number.isRequired,
  activeWordIndex: React.PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    timePassed: state.calcReducer.timePassed,
    activeWordIndex: state.textReducer.activeWordIndex,
    typeStarted: state.textReducer.typeStartedAfterTimer
  };
}

export default connect(mapStateToProps, {})(TypeSpeed);
