"use strict";

import React from 'react';
import Canvas from './Canvas';
import Score from './Score';
import Timer from './Timer';
import Guide from './Guide';
import styles from '../css/index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCanvas : true, 
      score : 0,    // Initial score
    };
  }

  timeoutListener = () => {
    this.setState({
      showCanvas: false
    });
  }

  scoreTrackListener = (scoreValue) => {
    this.setState({
      score: scoreValue
    });
  }

  render() {
    return (
      <div>
        <div id="form">
          <Canvas showCanvas={this.state.showCanvas} scoreTrackListener={
            (score) => { this.scoreTrackListener(score); }} />
        </div>
        <div id="panel">
          <div id="timer">
            <Timer timeoutListener={() => { this.timeoutListener(); }} />
          </div>
          <br /><br /><br />
          <div id="score">
            <Score scoreValue={this.state.score} />
          </div>
			<br /><br /><br />
			<br /><br /><br />
		  <Guide />
        </div>
      </div>
    );
  }
}

export default App;