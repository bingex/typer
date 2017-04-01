import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './components/Welcome';
import TypePage from './components/TypePage';

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Welcome} />
        <Route path="/single" component={TypePage} />
      </div>
    );
  }
}

export default App;
