import React, { Component } from 'react';
import './Loading.css';

export default class Loading extends Component {
  render() {
    return (
      <div className="container container-loading">
        <div className="row">
          <div className="col-12 text-centered">
            <div className="loader"></div>
          </div>
        </div>
      </div>
    );
  }
}