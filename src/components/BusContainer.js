import React from 'react';
import CTA from '../cta';

import Bus from './Bus';

class BusContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      time: new Date(),
      predictions: []
    };

    this.renderStop = this.renderStop.bind(this);
  }

  componentWillMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearInterval(this.refreshTimer);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.stop) {
      return null;
    }

    const stops = {stopIds: [nextProps.stop.stpid]};

    CTA.predictionsByStop(stops, (err, data) => {
      if (data) {
        this.setState({predictions: data});
      } else {
        this.setState({predictions: []});
      }
    });
  }

  tick() {
    this.setState({time: new Date()});
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
        {this.state.predictions.length > 0
          ? this.state.predictions.map(this.renderStop)
          : <p>No service at this time</p>}
      </div>
    );
  }
}

export default BusContainer;
