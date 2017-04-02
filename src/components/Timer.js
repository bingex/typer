import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setTimePassed } from './../store/actions/calcActions';
import { SIndicatorWrapper } from './../styles/generalStyles';

const STimerWrapper = styled(SIndicatorWrapper)`
  right: 20px;
`;

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: '00:00',
      seconds: 1,
      minutes: 0,
      timer: undefined
    };

    this.add = this.add.bind(this);
  }

  componentDidMount() {
    this.startTimer();
  }

  timer() {
    this.setState({ timer: setTimeout(this.add, 1000) });
  }

  startTimer() {
    this.timer();
  }

  stopTimer() {
    this.setState({ time: '00:00' });
    clearTimeout(this.state.timer);
  }

  add() {
    let { seconds, minutes } = this.state;

    this.setState({ seconds: seconds + 1 });

    if (seconds >= 60) {
      seconds = 0;
      this.setState({ seconds: 0, minutes: minutes + 1 });
      if (minutes >= 60) {
        this.setState({ minutes: 0 });
      }
    }

    this.setState({
      time: (minutes ? minutes > 9 ? minutes : '0' + minutes : '00') +
        ':' +
        (seconds > 9 ? seconds : '0' + seconds)
    });

    // Set time passed count for speed calculation
    this.props.setTimePassed();

    this.timer();
  }

  render() {
    return (
      <STimerWrapper>
        <span>{this.state.time}</span>
      </STimerWrapper>
    );
  }
}

Timer.propTypes = {
  setTimePassed: React.PropTypes.func.isRequired
};

export default connect(null, { setTimePassed })(Timer);
