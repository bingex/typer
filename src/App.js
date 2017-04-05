import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import TypePage from './components/TypePage';
import WaitForUsers from './components/WaitForUsers';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/type" component={TypePage} />
        <Route path="/multi" component={WaitForUsers} />
      </div>
    );
  }
}

export default App;
