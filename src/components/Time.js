import React from 'react';

class Time extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date()
    }
  }

  componentWillMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  tick() {
    this.setState({date: new Date()})
  }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    )
  }
}

export default Time;
