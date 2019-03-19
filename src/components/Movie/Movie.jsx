import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import './Movie.css';
import Loading from '../Loading/Loading.jsx';
const CONSTANTS = require('../../utils/constants');
const API = require('../../utils/API').default;

//Component to render a movie
export default class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: null
    }

    this.movieId = this.props.match.params.id;
  }

  componentDidMount(){
    API.getMovie(this.movieId).then(movie => { this.setState({movie}) });
  }

  render() {
    const movie = this.state.movie;

    if(!movie){
      return (<Loading/>);
    }

    return (
      <div>
        <Navbar backdrop={movie.backdrop_path} />
        
        <div className="container my-container">
          <Link to={'/'}>← Movies</Link> / {movie.original_title}
          
          <div className="row">
            <div className="col text-center">
              <h2 className="mt-5 mb-5">{movie.original_title}</h2>
              <div className="row mt-1">
                <div className="col-4">
                  <img src={`${CONSTANTS.IMG_URL}/w185/${movie.poster_path}`} className="pull-right img-thumbnail"/>
                </div>
                <div className="col-8">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td className="text-left"><b>Release date:</b></td>
                        <td className="text-right">{new Date(movie.release_date).toLocaleDateString()}</td>
                      </tr>
                      <tr>
                        <td className="text-left"><b>Vote average:</b></td>
                        <td className="text-right">⭐ {movie.vote_average}</td>
                      </tr>
                      <tr>
                        <td className="text-left"><b>Genres:</b></td>
                        <td className="text-right">
                          {movie.genres.map((genre, i) => {
                            return (
                              <span key={i} className="badge badge-primary ml-1">{genre.name}</span>
                            )
                          })}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-left"><b>Overview:</b></td>
                        <td className="text-right"></td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-left">{movie.overview}</p>
                  <div className="row text-left mt-5">
                    {movie.production_companies.map((company,i) => {
                      return (
                        <div key={i} className="col-3 text-center">
                          <img className="mb-1" src={`${CONSTANTS.IMG_URL}/w45${company.logo_path}`} />
                          <p className="company-name">{company.name}</p>
                        </div>
                      )
                    })}
                    </div>
                  <button className="btn btn-primary btn-block btn-lg mt-5">Vote</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
