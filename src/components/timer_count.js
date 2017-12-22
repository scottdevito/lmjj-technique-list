import React, { Component } from 'react';

class TimerCount extends Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.secondsLeft };
  }

  componentDidMount() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      clearInterval(this.timer);
    }
  }

  render() {
    let minutes = ('0' + Math.floor(this.state.count / 60)).slice(-2),
      seconds = ('0' + this.state.count % 60).slice(-2);
    return (
      <div>
        <h2 className="timer">{`${minutes}:${seconds}`}</h2>
      </div>
    );
  }
}

export default TimerCount;
