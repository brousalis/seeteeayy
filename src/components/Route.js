import React from 'react';

import Loading from './ui/Loading';
import Select from './ui/Select';

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
      <Select value={this.props.route} onChange={(e) => this.props.onSelectRoute(e.target.value)}>
        <option value="">Select a Route</option>
        {this.props.routes.map(this.renderRoute)}
      </Select>
    );
  }
}

export default Route;
