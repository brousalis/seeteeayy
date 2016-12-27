import React from 'react';

class RouteDirection extends React.Component {
  renderDirections(direction) {
    return (
      <option value={direction} key={direction}>{direction}</option>
    );
  }

  render() {
    if (this.props.directions.length === 0 || this.props.route === null) {
      return null;
    }

    return (
      <select className="routeDirections" onChange={(e) => this.props.selectDirection(e)}>
        {this.props.directions.map(this.renderDirections)}
      </select>
    );
  }
}

export default RouteDirection;
