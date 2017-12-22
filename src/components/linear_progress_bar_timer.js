import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

export default class LinearProgressBarTimer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.secondsLeft,
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => this.progress(this.props.secondsLeft), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed < 1) {
      this.setState({ completed: 0 });
    } else {
      this.setState({ completed });
      const diff = 1;
      this.timer = setTimeout(() => this.progress(completed - diff), 1000);
    }
  }

  render() {
    return (
      <LinearProgress
        mode="determinate"
        value={this.state.completed}
        max={this.props.startSeconds}
        min={0}
      />
    );
  }
}
