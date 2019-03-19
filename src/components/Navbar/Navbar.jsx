import React, { Component } from 'react';
import './Navbar.css';
const CONSTANTS = require('../../utils/constants');

export default class Navbar extends Component {
  render() {
    return (
      <header 
        style={{background: this.props.backdrop ? `url(https://image.tmdb.org/t/p/original${this.props.backdrop})` : `url(${CONSTANTS.DEFAULT_COVER})`}}
        className={this.props.backdrop ? 'with-backdrop' : ''}>
      </header>
    );
  }
}
