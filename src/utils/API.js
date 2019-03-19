const CONSTANTS = require('./constants');

const API = {
  getMovies: async function(){
		const response = await fetch(`${CONSTANTS.BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${CONSTANTS.API_KEY}`);
		const myJson = await response.json();
		return myJson.results;
	},
	getMovie: async function(id){
		const response = await fetch(`${CONSTANTS.BASE_URL}/movie/${id}?api_key=${CONSTANTS.API_KEY}`);
		const myJson = await response.json();
		return myJson;
	}
}

export default API;