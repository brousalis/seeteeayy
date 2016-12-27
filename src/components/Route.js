import React from 'react';
import Loading from './Loading';

class Route extends React.Component {
  renderRoute(route) {
    return (
        <option
				value={route.rt}
				key={route.rt}>
				{route.rt} - {route.rtnm}
			</option>
    );
  }

  render() {
    if (this.props.routes.length === 0) {
      return <Loading />;
    }

    return (
      <select defaultValue="null" onChange={(e) => this.props.selectRoute(e)}>
        <option value="null">Select a Route</option>
        {this.props.routes.map(this.renderRoute)}
      </select>
    );
  }
}

export default Route;