import { ADD_MOVIE_DETAILS, ADD_POPULAR_MOVIES} from './ActionTypes';
const initState = {
	moviesList: [],
}
export const Reducers = (state = initState,action) => {
	switch(action.type) {
		case ADD_MOVIE_DETAILS:
		return {
			...state,moviesList:[...action.payload.data]
		};
	

	case ADD_POPULAR_MOVIES: 
	return {
		moviesList:[
		...state.moviesList,
		...action.payload
		],
		
	}


	 default:
	 return state
 }
}