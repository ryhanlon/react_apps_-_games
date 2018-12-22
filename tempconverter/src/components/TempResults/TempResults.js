import React from 'react';
import './TempResults.css';


class TempResultBar extends React.Component {

    render() {
        return (
            <section className="TempResultsBar">
                {/*<div className="TempResultsBar">*/}
                    <h1 className="results">Results</h1>

                      <p className="answer">{this.props.answerResult}</p>

                      <section className="message">{this.props.messageResult}</section>

                {/*</div>*/}

            </section>

        )
    }
}

export default TempResultBar;
