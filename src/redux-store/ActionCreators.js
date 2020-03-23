import { ADD_MOVIE_DETAILS, ADD_POPULAR_MOVIES} from './ActionTypes';



export function addMovieDetails(movieDetails) {
	return {
		type:ADD_MOVIE_DETAILS,
		payload:movieDetails
	};
}

export function addPopularMovies(popMovies) {
	return {
		type:ADD_POPULAR_MOVIES,
		payload:popMovies
	};
}

export function getAPIPopularMovies(page = 1) {
	const uprPopularMovies = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=903cd66a44c02016881a69ab998e397b&language=en-US&page=1";
	return dispatch => 
	fetch(uprPopularMovies)
	.then(response =>response.json())
	.then(
		data=> {
			dispatch(addPopularMovies(data.results));
		},
		error => {
			console.log(error);
		}
		);
}

export function getAPIMovieDetails(id) {
	const url=`https://api.themoviedb.org/3/movie/${id}?api_key=903cd66a44c02016881a69ab998e397b&language=en-US`;
	return  dispatch =>
	fetch(url)
	.then(response => response.json())
	.then(data => {
		dispatch(addMovieDetails(data));
	},
	error => {
		console.log(error);
	}
	);
}