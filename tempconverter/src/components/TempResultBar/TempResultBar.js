import React from 'react';
import './TempResultBar.css';
// \import TempResults from '../TempResults/TempResults';


class TempResultBar extends React.Component {

    render() {
        return (
            <section className="TempResultsBar">
                {/*<div className="TempResultsBar">*/}
                    <h1 className="results">Results</h1>

                      <p className="answer">{this.props.answerResult}</p>

                      {/*<TempResults sortResult={this.props.fahResult}/>*/}


                      <section className="message">{this.props.messageResult}</section>

                {/*</div>*/}

            </section>

        )
    }
}

export default TempResultBar;
