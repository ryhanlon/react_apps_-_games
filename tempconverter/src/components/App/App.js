import React, { Component } from 'react';
import './App.css';
import TempBar from '../TempBar/TempBar';
import TempResultBar from '../TempResultBar/TempResultBar';


class App extends Component {

    state = {
        fahrenheit: 'hi',
        celsius: 'hi',
        answer: '',
        message: ''
    };

    convertKelvin = (kelvinTemp) => {

        // conversion for kelvin to celsius--celsius is 273 less than kelvin
        this.celsius = kelvinTemp - 273;
        // conversion for celsius to fahrenheit using formula
        this.fahrenheit = Math.floor(this.celsius * (9/5) + 32);

        this.answer = `The temperature is ${this.fahrenheit}° degrees Fahrenheit and ${this.celsius}° degrees celsius.`;

        if (kelvinTemp === null) {
            alert("Hey! Enter a number, Sugar.");
            return false;
        }

        if (this.fahrenheit > 500) {
            this.message = <div><p className="message-text">Solar sailing!</p><img className="message-picture" src={require("./solar.jpg")}/></div>;
        } else if(this.fahrenheit > 200) {
            this.message = <div><p className="message-text">Catch a wave!</p><img className="message-picture" src={require("./hiking.jpg")}/></div>;
        } else if(this.fahrenheit > 80) {
            this.message = <div><p className="message-text">Hiking time!</p><img className="message-picture" src={require("./wave.jpg")}/></div>;
        } else {
            this.message =  <div><p className="message-text">Glacier glide!</p><img className="message-picture" src={require("./glacier-glide.jpg")}/></div>;
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
            <div>
                <header>
                <h1>Temp<span className="highlight">Con</span>Vert</h1>
                </header>
                <main className="App">

                    <TempBar onConvertTemp={this.convertKelvin}/>
                    <TempResultBar fahResult={this.state.fahrenheit}
                                   celResult={this.state.celsius}
                                   answerResult={this.state.answer}
                                   messageResult={this.message} />

                </main>
            </div>
        )
    }
}

export default App;
