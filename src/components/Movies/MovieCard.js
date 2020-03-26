import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme =>({

  card: {
    display: 'flex',
  margin:' 15px 4%',
  flex:' 1 15%',
  borderRadius:' 10px',
  overflow:' hidden',
  position: 'relative',
  boxShadow:' 0 10px 20px 5px rgba(0, 0, 0, 0.3)',
  background: '#333',
  transition: 'transform 0.25s ease-in-out',
  '&:hover':{
    transform:'scale(1.075)',
},
'& img':{
  width:'100%',
  height:'100%'
}

  },

  details: {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'absolute',
  color: 'white',
  top: 0,
  opacity:0,
  bottom: 0,
  left: 0,
  right: 0,
  height:' 100%',
  width: '100%',
  transition: 'opacity 0.1s ease',
  background: 'linear-gradient(to top,rgba(10, 10, 10, 0.85),rgba(10, 10, 10, 0.5))',
'&:hover':{
  opacity:1,
}
  },


  title: {
  fontSize:' 0.8rem',
  alignSelf: 'center',
  padding:'10px',
  marginBottom: '5px',
  textAlign: 'center',
},
voteAverage: {
  alignSelf: 'center',
  fontSize: '2rem',
  color: 'rgb(1, 210, 119)',
}


}))



const MovieCard = props => {
  const styles = useStyles();

  const { id, title } = props.movie;
  const imgSrc = `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`;
  return (
      <Link to={`/movie/${id}`} className={styles.card} >
      <img src={imgSrc} alt={props.movie.title} />
 <div className={styles.details}>
  {props.movie.vote_average ? (
        <span className={styles.voteAverage}>{props.movie.vote_average * 10}%</span>
      ) : null}
      <span className={styles.title}>
        {title}  
      </span>
   </div>
      </Link>
      
  );
};

export default MovieCard;
