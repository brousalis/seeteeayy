import React from 'react';
import CTA from '../cta';

import Bus from './Bus';

class BusContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
      stops: []
    };

    this.renderStop = this.renderStop.bind(this);
  }

  componentWillMount() {
    this.api = CTA;

    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.stop) {
      return null;
    }

    this.api.predictionsByStop({stopIds: [nextProps.stop.stpid]}, (err, data) => {
      this.setState({stops: data});
    });
  }

  tick() {
    this.setState({time: new Date()})
  }

  renderStop(stop) {
    return (
      <Bus time={this.state.time} key={stop.vid} {...stop} />
    )
  }

  render() {
    if (!this.props.stop) {
      return null;
    }

    return (
      <div>
        <h1 className="busStop">{this.props.stop.stpnm}</h1>
        <div>{this.state.time.toLocaleTimeString()}</div>
        {this.state.stops.map(this.renderStop)}
      </div>
    );
  }
}

export default BusContainer;
