"use strict";

import React from 'react';
import Canvas from './Canvas';
import Score from './Score';
import Timer from './Timer';
import Guide from './Guide';
import styles from '../css/index.css';

// Main parent component of all other components
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCanvas: true, // To display tiles
      score: 0,    // Initial score
    };
  }

  // Listener that shuts the canvas off
  timeoutListener = () => {
    this.setState({
      showCanvas: false
    });
  }

  // Receives the 'scoreValue' from 'Canvas' component
  // when user clicks on any tile
  scoreTrackListener = (scoreValue) => {
    this.setState({
      score: scoreValue
    });
  }

  render() {
    return (
      <div>
        <div id="canvas">
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
          <Guide />
        </div>
      </div>
    );
  }
}

export default App;