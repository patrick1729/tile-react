"use strict";

import React from 'react';

// Timer component
class Timer extends React.Component {

  constructor(props) {
    super(props);
    // Setting default values for the timer
    this.state = {
      timeLeft: 10
    }
  }

  render() {
    return (
      <div>
        <p> Time: &nbsp;&nbsp;
					{this.state.timeLeft}
        </p>
      </div>
    );
  }

  // called after mounting of component is complete
  componentDidMount() {
    // Setting the interval to request the browser to call tick() method each second
    this.timerID = setInterval(() => this.tick(), 1.2 * 1000);
  }

  // called before unmounting
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // This method will be called each second by the browser
  tick() {
    let time = this.state.timeLeft;
    if (time > 0) {
      time--;
      this.setState({	// using setState() to change the time left
        timeLeft: time
      });
    } else {  // time has elapsed clear the timer and hide the tiles on the canvas
      this.props.timeoutListener();
      clearInterval(this.timerID);
    }
  }
}

export default Timer;