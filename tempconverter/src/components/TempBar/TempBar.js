import React from 'react';
import './TempBar.css';


class TempBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            kelvinInput: null,
        };

        this.convertTemp = this.convertTemp.bind(this);
        this.handleTempChange = this.handleTempChange.bind(this);
    }

    convertTemp() {
        this.props.onConvertTemp(this.state.kelvinInput);
    }

    handleTempChange(event) {
        event.preventDefault();
        this.setState({kelvinInput: event.target.value});
    }

    render() {
        return (
            <section className="TempBar">
                <input placeholder="Enter Kalvin"
                       type="number"
                       onChange={this.handleTempChange}/>

                <button className="convert-button"
                        type="submit"
                    onClick={this.convertTemp}>Convert</button>
            </section>
        )
    }
}

export default TempBar;
