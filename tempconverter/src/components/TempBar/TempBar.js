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
            <section className="TempBar">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Enter Kalvin"
                           type="number"
                           onChange={this.handleTempChange}/>

                    <button className="convert-button"
                            type="submit"
                            onClick={this.convertTemp}>Convert
                    </button>
                </form>
            </section>
        )
    }
}

export default TempBar;
