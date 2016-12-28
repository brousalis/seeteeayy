import React from 'react';

import RouteContainer from './RouteContainer';
import BusContainer from './BusContainer';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      route: null,
      direction: null,
      stop: null
    };

    this.selectRoute = this.selectRoute.bind(this);
    this.selectDirection = this.selectDirection.bind(this);
    this.selectStop = this.selectStop.bind(this);
  }

  selectRoute(route) {
    this.setState({route});
  }

  selectDirection(direction) {
    this.setState({direction});
  }

  selectStop(stop) {
    this.setState({stop});
  }

  render() {
    return (
      <div className="app">
        <RouteContainer
          route={this.state.route}
          direction={this.state.direction}
          stop={this.state.stop}
          selectRoute={this.selectRoute}
          selectDirection={this.selectDirection}
          selectStop={this.selectStop} />
        <BusContainer stop={this.state.stop} />
      </div>
    );
  }
}

export default App;
