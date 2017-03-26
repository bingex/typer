import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h4>Are you ready to start?</h4>
        <Link to="/type">Start</Link>
      </div>
    );
  }
}

export default Welcome;
