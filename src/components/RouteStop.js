import React from 'react';

import Select from './ui/Select';

class RouteStop extends React.Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(e) {
    const value = e.target.value;
    const stop = this.props.stops.filter((stop) => stop.stpid === value)[0];
    this.props.onSelectStop(stop);
  }

  renderStops(stop) {
    return (
      <option value={stop.stpid} key={stop.stpid}>
        {stop.stpnm}
      </option>
    );
  }

  render() {
    if (this.props.stops.length === 0 || this.props.direction === "") {
      return null;
    }

    return (
      <Select value={this.props.stop} onChange={this.handleOnChange}>
        <option value="">Select Stop</option>
        {this.props.stops.map(this.renderStops)}
      </Select>
    );
  }
}

export default RouteStop;
