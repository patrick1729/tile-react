"use strict";

import React from 'react';
import $ from 'jquery';

// Canvas component where tiles are invoked at different positions
class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tile1: 0,  // any random number position for first tile 
      tile2: 36, // any random number position for second tile
      tile3: 21, // any random number position for third tile
      score: 0  // to keep track of score
    }
  }

  // Set the timer of 1.5 seconds, requests the browser every 1.5s
  // to call 'randomGenerate()'
  componentDidMount() {
    this.timerID = setInterval(this.randomGenerate, 1.2 * 1000);
  }

  hideOldTiles = () => {
    // Hide the old visible tiles
    $("#" + this.state.tile1).animate({ opacity: 0 });
    $("#" + this.state.tile2).animate({ opacity: 0 });
    $("#" + this.state.tile3).animate({ opacity: 0 });
  };

  findNewTiles = () => {
    // Calculate new positions
    let firstRandomNumber = Math.floor(Math.random() * 42);
    let secondRandomNumber = Math.floor(Math.random() * 42);
    let thirdRandomNumber = Math.floor(Math.random() * 42);
    this.setState({
      tile1: firstRandomNumber,
      tile2: secondRandomNumber,
      tile3: thirdRandomNumber
    });

    this.addColorToNewTiles();
  };

  showNewTiles = () => {
    // Show the new tiles
    $("#" + this.state.tile1).animate({ opacity: 100 });
    $("#" + this.state.tile2).animate({ opacity: 100 });
    $("#" + this.state.tile3).animate({ opacity: 100 });
  }; 

  addColorToNewTiles = () => {
    // Randomly selects and assigns the color to the tiles
    let colors = ["#EC407A", "#42A5F5", "#26A69A"];
    let index1 = Math.floor(Math.random() * 3);
    let index2 = Math.floor(Math.random() * 3);
    let index3 = Math.floor(Math.random() * 3);
    $("#" + this.state.tile1).css("background-color", colors[index1]);
    $("#" + this.state.tile2).css("background-color", colors[index2]);
    $("#" + this.state.tile3).css("background-color", colors[index3]);
  };

  // Randomly generates new positions for tiles
  randomGenerate = () => {
    // required as the component reference is not available inside 'ready()'
    let reference = this; 
    $("document").ready(function () {
      reference.hideOldTiles();
      reference.findNewTiles();    
      reference.showNewTiles();
    });
  };

  // Grant the score as per the color of the tile
  grantScore(color) {
    let score = this.state.score;
    if (color == "rgb(236, 64, 122)") { // Pink color
      score = score - 2;
    } else if (color == "rgb(38, 166, 154)") {  // Green color
      score = score + 3;
    } else if (color == "rgb(66, 165, 245)") {  // Blue color
      score = score + 1;
    }
    this.setState({ // Set the score calculated
      score: score
    });
  }

  // Handles the click on tiles
  handleClick = (event) => {
    let id = event.target.id; // Get the id of the clicked item
    let color = $("#" + id).css("background-color");  // Get the color of the clicked item
    
    // To check whether the clicked tile is equal to one of the invoked tiles
    if (id == this.state.tile1) { 
      this.grantScore(color); //  Grant the score depending on the color of the tile
      $("#" + this.state.tile1).animate({ opacity: 0 });  // Hide the tile on click
      this.setState({
        tile1: -1 // Set the position to -1 to prevent it to clash from other tiles id
      }, () => { this.updateScore(); }); // Updates the hiscore in the callback function of 'setState'
    } else if (id == this.state.tile2) {
      this.grantScore(color);
      $("#" + this.state.tile2).animate({ opacity: 0 });
      this.setState({
        tile2: -1
      }, () => { this.updateScore(); });
    } else if (id == this.state.tile3) {
      this.grantScore(color);
      $("#" + this.state.tile3).animate({ opacity: 0 });
      this.setState({
        tile3: -1
      }, () => { this.updateScore(); });
    }
  };

  // passes the current value to the parent which in turn passes this value to 'Score' component
  updateScore() {
    this.props.scoreTrackListener(this.state.score);
  }

  render() {
    let view = [];
    if (this.props.showCanvas) {  // Canvas should be visible
      for (let i = 0; i < 42; i++) {  // Push all the tiles in the array
        // The value of variable 'i' was provided as the key (not a recommended practice, we should
        // always define an 'id' attribute that could be set as 'key') as the user can't change the 
        // elements
        view.push(<div className="blocks" key={i} id={i} onClick={this.handleClick}></div>);
      }
    } else {  // Time is up, hide the visible tiles
      clearInterval(this.timerID);
      this.hideOldTiles();
      // Add Game Over elements to the view
      // Note that any random values were given as 'key' as the elements won't change, though
      // it is not a recommended practice we should always have an 'id' attribute that could be
      // set as a key
      view.push(<p key={101}>Game Over!</p>);
      view.push(<div key={102}><br /><br /><br /></div>);
      view.push(<div key={103} id="button"><button onClick={() => { document.location.reload() }}>Restart Game</button></div>);
    }
    return (  // return the array of elements
      <div>
          {view}
      </div>
    );
  }
}

export default Canvas;