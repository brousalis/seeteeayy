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

    const stops = {
      stopIds: [nextProps.stop.stpid],
      routeIds: [this.props.route],
      top: 100
    };

    CTA.predictionsByStop(stops, (err, data) => {
      if (data) {
        if (!Array.isArray(data)) data = [data];
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
        <h1 className="bus-stop">{this.props.stop.stpnm}</h1>
        <div className="bus-timer">{this.state.time.toLocaleTimeString()}</div>
        <div className="bus-list">
          {
            this.state.predictions.length > 0
              ? this.state.predictions.map(this.renderStop)
              : <div className="bus__noservice">No service at this time</div>
          }
        </div>
      </div>
    );
  }
}

export default BusContainer;
