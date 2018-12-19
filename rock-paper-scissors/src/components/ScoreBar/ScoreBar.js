import React from 'react';
import './ScoreBar.css';
import Name from '../Name/Name';
import Scores from '../Scores/Scores';



class ScoreBar extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (

            <section className="ScoreBar">

                <Name />

                <Scores />

                <div className="compContainer">
                    <h3 className="score CompName">ComPuTaTor</h3>
                </div>

	        </section>

        );
    }
}

export default ScoreBar;
