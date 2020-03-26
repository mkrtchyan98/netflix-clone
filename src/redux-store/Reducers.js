import {
  ADD_ALL_GENRES,
  ADD_MOVIE_DETAILS,
  ADD_POPULAR_MOVIES
} from "./ActionsTypes";

const initState = {
  allGenres:[],
  movieDetails:{},
  popularMovies:[],
  page:1
}

export default function (state = initState,action)  {
switch(action.type) {
  case ADD_ALL_GENRES:
  return {...state,
          allGenres:action.payload.genres 
};

case ADD_MOVIE_DETAILS:
    return {...state,
      movieDetails:action.payload}


case ADD_POPULAR_MOVIES:
      return {...state,
          popularMovies:state.popularMovies.concat(action.payload),
          page:state.page+1}

          default:
          return state

}

 
}
/*
export const allGenres = (state = [], action) => {
  if (action.type === ADD_ALL_GENRES) {
    return action.payload.genres;
  }
  return state;
};



export const movieDetails = (state = {}, action) => {
  if (action.type === ADD_MOVIE_DETAILS) {
    return action.payload;
  }
  return state;
};

export const popularMovies = (state = [], action) => {
  if (action.type === ADD_POPULAR_MOVIES) {
    return state.concat(action.payload);
  }
  return state;
};
export const page = (state = 1, action) => {
  console.log("AAAAAA");
  if (action.type === ADD_POPULAR_MOVIES) {
    return state + 1;
  }
  return state;
};

*/

