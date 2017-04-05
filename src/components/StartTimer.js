import React from 'react';

const StartTimerStyles = {
  position: 'absolute',
  top: '35%',
  left: '45%',
  fontSize: '30px'
};

class StartTimer extends React.Component {
  render() {
    return <span style={StartTimerStyles}>TIMER</span>;
  }
}

export default StartTimer;
