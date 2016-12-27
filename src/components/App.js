import React from 'react';

import RouteContainer from './RouteContainer';
import BusContainer from './BusContainer';

class App extends React.Component {
  constructor() {
    super();

    this.state = { stop: null };

    this.onSelectStop = this.onSelectStop.bind(this);
  }

  onSelectStop(stop) {
    this.setState({stop});

    this.refreshTimer = setInterval(
      () => this.setState({stop}),
      60000
    );
  }

  componentWillMount() {
    clearInterval(this.refreshTimer);
  }

  render() {
    return (
      <div className="app">
        <RouteContainer onSelectStop={this.onSelectStop} />
        <BusContainer stop={this.state.stop} />
      </div>
    );
  }
}

export default App;
