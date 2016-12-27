import React from 'react';
import CTA from '../cta';

import Route from './Route';
import RouteDirection from './RouteDirection';
import RouteStop from './RouteStop';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      route: null,
      direction: null,
      stop: null,

      routes: [],
      directions: [],
      stops: []
    };

    this.selectRoute = this.selectRoute.bind(this);
    this.selectDirection = this.selectDirection.bind(this);
    this.selectStop = this.selectStop.bind(this);
    this.getDirections = this.getDirections.bind(this);
    this.getStops = this.getStops.bind(this);
  }

  componentWillMount() {
    this.api = CTA;
  }

  componentDidMount() {
    this.api.routes((err, data) => {
      this.setState({routes: data});
    });
  }

  selectRoute(e) {
    const route = e.target.value;
    this.getDirections(route);
    this.setState({route, direction: null})
  }

  selectDirection(e) {
    const direction = e.target.value;
    this.getStops(this.state.route, direction);
    this.setState({direction, stop: null})
  }

  selectStop(e) {
    const stop = e.target.value;
    this.setState({stop})
  }

  getDirections(route) {
    this.api.routeDirections(route, (err, data) => {
      this.setState({directions: data})
    });
  }

  getStops(route, direction) {
    this.api.stops(route, direction, (err, data) => {
      this.setState({stops: data})
    });
  }

  render() {
    return (
      <div>
        <Route routes={this.state.routes} selectRoute={this.selectRoute} />
        <RouteDirection route={this.state.route} directions={this.state.directions} selectDirection={this.selectDirection} />
        <RouteStop route={this.state.route} direction={this.state.direction} stops={this.state.stops} selectStop={this.selectStop} />
      </div>
    );
  }
}

export default App;
