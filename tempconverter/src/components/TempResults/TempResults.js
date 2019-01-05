import React, { Component } from 'react';
import './TempResults.css';


class TempResultBar extends Component {

    render() {
        return (
            <section className="TempResultsBar" role="presentation" aria-label="temperature-results">
                {/*<div className="TempResultsBar">*/}
                    <h1 className="results" tabIndex="0">Results</h1>

                    <p className="answer" tabIndex="0">{this.props.answerResult}</p>

                    <div className="message" tabIndex="0">{this.props.messageResult}</div>

                {/*</div>*/}

            </section>

        )
    }
}

export default TempResultBar;
