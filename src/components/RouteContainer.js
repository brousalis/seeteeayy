import React from 'react';
import CTA from '../cta';

import Route from './Route';
import RouteDirection from './RouteDirection';
import RouteStop from './RouteStop';

class RouteContainer extends React.Component {
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

    this.onSelectRoute = this.onSelectRoute.bind(this);
    this.onSelectDirection = this.onSelectDirection.bind(this);
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

  onSelectRoute(route) {
    this.setState({route, directions: [], stops: [], direction: null, stop: null})
    this.getDirections(route);
  }

  onSelectDirection(direction) {
    this.setState({direction, stop: null})
    this.getStops(this.state.route, direction);
  }

  getDirections(route) {
    this.api.routeDirections(route, (err, data) => {
      if (!Array.isArray(data)) data = [data];
      const direction = data[0];
      this.setState({directions: data, direction})
      this.getStops(this.state.route, direction)
    });
  }

  getStops(route, direction) {
    this.api.stops(route, direction, (err, data) => {
      this.setState({stops: data})
      this.props.onSelectStop(data[0])
    });
  }

  render() {
    return (
      <div>
        <Route routes={this.state.routes} onSelectRoute={this.onSelectRoute} />
        <RouteDirection route={this.state.route} directions={this.state.directions} onSelectDirection={this.onSelectDirection} />
        <RouteStop route={this.state.route} direction={this.state.direction} stops={this.state.stops} onSelectStop={this.props.onSelectStop} />
      </div>
    );
  }
}

export default RouteContainer;
