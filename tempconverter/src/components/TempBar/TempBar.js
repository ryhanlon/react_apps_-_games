import React, { Component } from 'react';
import './TempBar.css';


class TempBar extends Component {

    state = {
        kelvinInput: '',
    };

    convertTemp = () => {
        this.props.onConvertTemp(this.state.kelvinInput);
    };

    handleTempChange = (event) => {
        event.preventDefault();
        this.setState({kelvinInput: event.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <section className="TempBar" role="main" aria-label="temperature-bar">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="kelvin-input" aria-label="temperature-input">
                        <input placeholder="Enter Kalvin"
                               id="kelvin-input"
                               type="number"
                               onChange={this.handleTempChange}/>
                    </label>

                    <label htmlFor="enter-kalvin" aria-label="temperature-convert-button">
                        <button className="convert-button"
                                id="enter-kalvin"
                                type="submit"
                                onClick={this.convertTemp}>Convert
                        </button>
                    </label>
                </form>
            </section>
        )
    }
}

export default TempBar;
