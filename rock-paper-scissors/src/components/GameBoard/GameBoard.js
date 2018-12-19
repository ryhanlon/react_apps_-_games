import React from 'react';
import './GameBoard.css';
import GameHands from '../GameHands/GameHands';

class GameBoard extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <GameHands />

        );
    }
}

export default GameBoard;