import React, { Component } from 'react';

import { minutesUntil } from '../helpers';

class Bus extends Component {
  render() {
    let timeUntil = minutesUntil(this.props.time, this.props.prdtm);

    if (timeUntil <= 1) {
      timeUntil = "APPROACHING"
    } else {
      timeUntil = `${timeUntil} minutes`
    }

    if (timeUntil <= 0) {
      return null;
    }

    return (
      <div className="bus">
        {this.props.rt} to {this.props.des} in {timeUntil}
      </div>
    )
  }
}

export default Bus;
