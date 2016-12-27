import React from 'react';

class RouteStop extends React.Component {
  renderStops(stop) {
    return (
      <option value={stop.stpid} key={stop.stpid}>{stop.stpnm}</option>
    );
  }

  render() {
    if (this.props.stops.length === 0 || this.props.direction === null) {
      return null;
    }

    return (
      <select className="routeStop">
        {this.props.stops.map(this.renderStops)}
      </select>
    );
  }
}

export default RouteStop;
