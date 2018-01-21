"use strict";

import React from 'react';
import $ from 'jquery';

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      block1: 0,
      block2: 36,
      block3: 21,
      score: 0
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.randomGenerate, 1000);
  }

  randomGenerate = () => {
    let reference = this;
    $("document").ready(function () {
      $("#" + reference.state.block1).animate({ opacity: 0 });
      $("#" + reference.state.block2).animate({ opacity: 0 });
      $("#" + reference.state.block3).animate({ opacity: 0 });

      let firstRandomNumber = Math.floor(Math.random() * 42);
      let secondRandomNumber = Math.floor(Math.random() * 42);
      let thirdRandomNumber = Math.floor(Math.random() * 42);
      reference.setState({
        block1: firstRandomNumber,
        block2: secondRandomNumber,
        block3: thirdRandomNumber
      });

      let colors = ["#EC407A", "#42A5F5", "#26A69A"];
      let index1 = Math.floor(Math.random() * 3);
      let index2 = Math.floor(Math.random() * 3);
      let index3 = Math.floor(Math.random() * 3);
      $("#" + firstRandomNumber).css("background-color", colors[index1]);
      $("#" + secondRandomNumber).css("background-color", colors[index2]);
      $("#" + thirdRandomNumber).css("background-color", colors[index3]);

      $("#" + reference.state.block1).animate({ opacity: 100 });
      $("#" + reference.state.block2).animate({ opacity: 100 });
      $("#" + reference.state.block3).animate({ opacity: 100 });

    });
  }

  grantScore(color) {
    let score = this.state.score;
    if (color == "rgb(236, 64, 122)") {
      score = score - 2;
    } else if (color == "rgb(38, 166, 154)") {
      score = score + 3;
    } else if (color == "rgb(66, 165, 245)") {
      score = score + 1;
    }
    this.setState({
      score: score
    });
  	console.log("Score: " + this.state.score);
  }

  handleClick = (event) => {
    let id = event.target.id;
    let color = $("#" + id).css("background-color");
    if (id == this.state.block1) {
      this.grantScore(color);
      $("#" + this.state.block1).animate({ opacity: 0 });
      this.setState({
        block1: -1
      }, () => { this.props.scoreTrackListener(this.state.score);});
    } else if (id == this.state.block2) {
      this.grantScore(color);
      $("#" + this.state.block2).animate({ opacity: 0 });
      this.setState({
        block2: -1
      }, () => { this.props.scoreTrackListener(this.state.score);});
    } else if (id == this.state.block3) {
      this.grantScore(color);
      $("#" + this.state.block3).animate({ opacity: 0 });
      this.setState({
        block3: -1
      }, () => { this.props.scoreTrackListener(this.state.score);});
    }
	  console.log("clicked");
    
  }

  render() {
    let view = [];
    if (this.props.showCanvas) {
      for (let i = 0; i < 42; i++) {
        view.push(<div className="blocks" key={i} id={i} onClick={this.handleClick}></div>);
      }
    } else {
      clearInterval(this.timerID);
      $("#" + this.state.block1).animate({ opacity: 0 });
      $("#" + this.state.block2).animate({ opacity: 0 });
      $("#" + this.state.block3).animate({ opacity: 0 });
      view.push(<p key={101}>Game Over!</p>);
      view.push(<div><br /><br /><br /></div>);
      view.push(<div id="button"><button onClick={() => { document.location.reload() }}>Restart Game</button></div>);
    }
    return (
      <div>
        {view}
      </div>
    );
  }
}

export default Canvas;