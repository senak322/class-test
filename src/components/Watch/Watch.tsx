import React, { Component } from 'react';

class Watch extends Component<{}, { time: string }> {
  private timerID: NodeJS.Timeout | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Watch;
