import React from 'react';

import RouteContainer from './RouteContainer';
import Bus from './Bus';
import Time from './Time';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Time />
        <RouteContainer />
        <div className="buses">
          <Bus />
        </div>
      </div>
    );
  }
}

export default App;
