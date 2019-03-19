import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Movies from './components/Movies/Movies.jsx';
import Movie from './components/Movie/Movie.jsx';
import './App.css';


//Parent component to manage routes & state
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shared: {}
    };
  }

  render() {
    return (
      <Router>
        <div>
          <main>
            <Route exact path="/"  render={(props) => <Movies shared={this.state.shared} {...props}/>}/>
            <Route path="/movie/:id" render={(props) => <Movie shared={this.state.shared} {...props}/>}/>
          </main>
        </div>
      </Router>
    );
  }
}
