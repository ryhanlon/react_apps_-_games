import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import ScoreBar from '../ScoreBar/ScoreBar';
import GameBoard from '../GameBoard/GameBoard';
import PlayBar from "../PlayBar/PlayBar";

class App extends Component {
    constructor(props) {
        super(props);

    }

    getUserChoice(event) {
        if (event === 0) {
            return <img id="leftHand" className="handsStyle" src={require("../GameHands/images/paper-559h.png")}/>;
        } else if (event === 1) {
            return <img className="buttonStyle" src={require("../GameHands/images/scissors-559h.png")} />;
        } else {
            return  <img className="buttonStyle" src={require("../GameHands/images/rock-559h.png")} />;
        }
    }

    // getComputerChoice() {
    //     computerChoice = Math.floor(Math.random() * 3);
    //     switch (computerChoice) {
    //         case 0:
    //             return 'paper';
    //         case 1:
    //             return 'scissors';
    //         case 2:
    //             return 'rock';
    //     }
    // }

  render() {
    return (
        <main className="app-container">
            <header className="title-container">
                <h1 className="title">Rock<span className="highlight"> Paper</span> Scissors</h1>
            </header>

            <ScoreBar />
            <GameBoard />
            <PlayBar onClick={this.theButtonChoice}/>

            <footer>
                <p>©2017 Bunny and Bugs Multimedia</p>
            </footer>

        </main>
    );
  }
}

export default App;
