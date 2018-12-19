import React, { Component } from 'react';
import './Name.css';

class Name extends Component {
    constructor(props) {
        super(props);

        this.state = { name: ''};

        this.handleEnterName = this.handleEnterName.bind(this);
    }

    handleEnterName(event) {
        this.setState({ name: event.target.value});
    }

    render() {
        return (

            <label className="NameInput">
               <input placeholder="Type Name"
                onChange={this.handleEnterName} />
            </label>

        );
    }
}

export default Name;