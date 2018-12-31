import React, { Component } from 'react';
import './App.css';
import TempBar from '../TempBar/TempBar';
import TempResults from '../TempResults/TempResults';

import hot from './img/solar.jpg';
import sunny from './img/wave.jpg';
import cool from './img/hiking.jpg';
import cold from './img/glacier-glide.jpg';


class App extends Component {

    state = {
        fahrenheit: '',
        celsius: '',
        answer: '',
        message: ''
    };

    convertKelvin = (kelvinTemp) => {

        // conversion for kelvin to celsius--celsius is 273 less than kelvin
        this.celsius = kelvinTemp - 273;
        // conversion for celsius to fahrenheit using formula
        this.fahrenheit = Math.floor(this.celsius * (9/5) + 32);

        this.answer = `The temperature is ${this.fahrenheit}° degrees Fahrenheit and ${this.celsius}° degrees celsius.`;

        if (kelvinTemp === null || kelvinTemp === '') {
            alert("Hey! Enter a number, Sugar.");
            return false;
        }

        if (this.fahrenheit > 500) {
            this.message = <div><p className="message-text">Solar sailing!</p><img className="message-picture" src={hot} alt='Surface of the sun'/></div>;
        } else if(this.fahrenheit > 200) {
            this.message = <div><p className="message-text">Catch a wave!</p><img className="message-picture" src={sunny} alt='Surfing a large wave'/></div>;
        } else if(this.fahrenheit > 50) {
            this.message = <div><p className="message-text">Hiking time!</p><img className="message-picture" src={cool} alt='A hiking path'/></div>;
        } else {
            this.message =  <div><p className="message-text">Glacier glide!</p><img className="message-picture" src={cold} alt='Penguin sliding on ice'/></div>;
        }

        this.setState({
            fahrenheit: this.fahrenheit,
            celsius: this.celsius,
            answer: this.answer,
            message: this.message
            });
    };

    render() {
        return (
            <div className="app-container">
                <header>
                <h1>Temp<span className="highlight">Con</span>Vert</h1>
                </header>
                <main className="App">

                    <TempBar onConvertTemp={this.convertKelvin}/>
                    <TempResults fahResult={this.state.fahrenheit}
                                   celResult={this.state.celsius}
                                   answerResult={this.state.answer}
                                   messageResult={this.message} />

                </main>
            </div>
        )
    }
}

export default App;
