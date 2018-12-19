import React from 'react';
import './Scores.css';

class Scores extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <div className="scores">
                <h2 className="scoreUser">score: 1</h2>
                <h2 className="scoreComp">score: 2</h2>
            </div>
        );
    }
}

export default Scores;