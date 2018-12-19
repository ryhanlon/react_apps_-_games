import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayBar.css';
import PlayButtons from '../PlayButtons/PlayButtons';


class PlayBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (

            <PlayButtons onClick={this.props.onClick}/>
        );
    }
}

export default PlayBar;