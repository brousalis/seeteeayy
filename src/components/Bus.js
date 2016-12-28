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
      <div className="column">
        {this.props.rt} to {this.props.des} 
        <br />
        {timeUntil}
      </div>
    )
  }
}

export default Bus;
