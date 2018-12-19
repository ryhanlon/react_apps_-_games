import React, { Component }from 'react';
import PropTypes from 'prop-types';
import './PlayButtons.css';


class PlayButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theButtonChoice: undefined,
        }

        this.clickEventHandler = this.clickEventHandler.bind(this);
    }

    clickEventHandler(event) {
        // User clicks button to play game.

        // onClick uses id based on index.
        let indexNumber = Number(event.target.id);
        console.log("indexNum: " + indexNumber);

        // setState used for the three buttons
        this.setState({
            theButtonChoice: indexNumber,
        });

        // this.props.theChoice(indexNumber);
        event.preventDefault();

    }
    render() {
        return (

            <section className="buttonBar">
                <div className="btnImageBorder">
                    <a onClick={this.clickEventHandler}><img className="buttonStyle" id="0" src={require("./images/paper-559h.png")} /></a>
                </div>
                <div className="btnImageBorder">
                    <a onClick={this.clickEventHandler}><img className="buttonStyle" id="1" src={require("./images/scissors-559h.png")} /></a>
                </div>
                <div className="btnImageBorder">
                    <a onClick={this.clickEventHandler}><img className="buttonStyle" id="2" src={require("./images/rock-559h.png")} /></a>
                </div>
           </section>

            );
    }
}


PlayButtons.propTypes = {
    theButtonChoice: PropTypes.func.isRequired,
}

export default PlayButtons;