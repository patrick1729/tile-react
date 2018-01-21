"use strict";

import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    // Setting default values for the timer
    this.state = {
      timeLeft: 10
    }
  }

  render() {
    if (this.props.stopTimer) {
      clearInterval(this.timerID);
    }
    return (
      <div>
        <p> Time: &nbsp;&nbsp;
					{this.state.timeLeft}
        </p>
      </div>
    );
  }

  // called after mounting
  componentDidMount() {
    // Setting the interval to request the browser to call tick() method each second
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  // called before unmounting
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // This will be called each second by the browser
  tick() {
    let time = this.state.timeLeft;
    if (time > 0) {
      time--;
      this.setState({	// using setState() to change the seconds
        timeLeft: time
      });
    } else {
      this.props.timeoutListener();
      clearInterval(this.timerID);
    }
  }
}

export default Timer;