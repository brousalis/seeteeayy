import React from 'react';

class RouteDirection extends React.Component {
  renderDirections(direction) {
    return (
      <option value={direction} key={direction}>{direction}</option>
    );
  }

  render() {
    if (this.props.directions.length === 0 || this.props.route === "") {
      return null;
    }

    return (
      <select onChange={(e) => this.props.onSelectDirection(e.target.value)}>
        <option value="">Select Direction</option>
        {this.props.directions.map(this.renderDirections)}
      </select>
    );
  }
}

export default RouteDirection;
