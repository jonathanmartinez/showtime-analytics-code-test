import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Loading from '../Loading/Loading.jsx';
import './Movies.css';
const CONSTANTS = require('../../utils/constants');
const API = require('../../utils/API').default;

//Component to display a single movie
export default class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    }
  }

  componentDidMount(){
    API.getMovies().then(movies => { this.setState({movies}) });
  }

  render() {
    if(!this.state.movies.length){
      return (<Loading/>);
    }
    return (
      <div>
        <Navbar/>
        <div className="container my-container">
          <h1 className="text-center mt-5 mb-5">Top 20 Most Popular Movies</h1>
          <table className="table">
            <tbody>
            {this.state.movies.map((movie, i) => {
              return (
                <tr key={i}>
                  <td className="align-middle">
                    <img className="img-thumbnail" src={`${CONSTANTS.IMG_URL}/w154${movie.poster_path}`} alt=""/>
                  </td>
                  <td className="align-middle">
                    {movie.original_title}
                  </td>
                  <td className="align-middle">
                    {new Date(movie.release_date).toLocaleDateString()}
                  </td>
                  <td className="align-middle text-nowrap">
                    ⭐ {movie.vote_average}
                  </td>
                  <td className="align-middle">
                    <Link to={'/movie/' + movie.id} className="text-nowrap"> View details → </Link>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
