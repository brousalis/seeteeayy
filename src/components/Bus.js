import React, { Component } from 'react';

import { minutesUntil } from '../helpers';

class Bus extends Component {
  render() {
    let timeUntil = minutesUntil(this.props.time, this.props.prdtm);

    timeUntil = timeUntil <= 1 ? "APPROACHING" : `${timeUntil} minutes`;

    if (timeUntil <= 0) {
      return null;
    }

    return (
      <div className="bus">
        <div className="bus__meta">
          <div className="bus__route">{this.props.rt}</div>
          <div className="bus__dest">to {this.props.des}</div>
        </div>
        <span className="bus__time">{timeUntil}</span>
      </div>
    )
  }
}

export default Bus;
