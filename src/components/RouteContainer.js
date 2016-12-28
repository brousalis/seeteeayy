import React from 'react';
import CTA from '../cta';

import Route from './Route';
import RouteDirection from './RouteDirection';
import RouteStop from './RouteStop';

class RouteContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      routes: [],
      directions: [],
      stops: []
    };

    this.onSelectRoute = this.onSelectRoute.bind(this);
    this.onSelectDirection = this.onSelectDirection.bind(this);
    this.onSelectStop = this.onSelectStop.bind(this);

    this.getDirections = this.getDirections.bind(this);
    this.getStops = this.getStops.bind(this);
  }

  componentDidMount() {
    CTA.routes((err, data) => {
      this.setState({routes: data});
    });
  }

  onSelectRoute(route) {
    this.props.selectRoute(route);
    this.props.selectDirection("");
    this.props.selectStop("");
    if (route === "") return;
    this.getDirections(route);
  }

  onSelectDirection(direction) {
    this.props.selectDirection(direction);
    this.props.selectStop("");
    if (direction === "") return;
    this.getStops(this.props.route, direction);
  }

  onSelectStop(stop) {
    this.props.selectStop(stop);
  }

  getDirections(route) {
    CTA.routeDirections(route, (err, data) => {
      if (!Array.isArray(data)) data = [data];
      this.setState({directions: data});
    });
  }

  getStops(route, direction) {
    CTA.stops(route, direction, (err, data) => {
      this.setState({stops: data})
    });
  }

  render() {
    return (
      <div>
        <Route
          routes={this.state.routes}
          onSelectRoute={this.onSelectRoute} />
        <RouteDirection
          route={this.props.route}
          directions={this.state.directions}
          onSelectDirection={this.onSelectDirection} />
        <RouteStop
          route={this.props.route}
          direction={this.props.direction}
          stops={this.state.stops}
          onSelectStop={this.onSelectStop} />
      </div>
    );
  }
}

export default RouteContainer;
