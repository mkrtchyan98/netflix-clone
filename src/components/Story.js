import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme =>({
  root: {
  	borderBottom:'8px solid #222',
  	background:'var(--main-deep-dark)',
  	padding:'70px 45px',
      '& h1' :{
      fontSize:'3.125rem',
      lineHeight:'1.1',
       [theme.breakpoints.down('sm')]: {
      fontSize: '1.625rem',
    },
    },
    '& h2' : {
      fontSize: '1.625rem',
      fontWeight: 'normal',
       [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem',
    },
    },
  	'& img' : {
  		maxWidth:'100%',
  		position:'relative',
  		zIndex:2,
  	},
     '& video' : {
      width: '100%',
      height:'100%',
      display:'inline-block',
        [theme.breakpoints.down('sm')]: {
    },
    }
  },
  videoContainer: {
  	width:'100%',
  	height:'100%',
  	maxWidth:'76%',
  	maxHeight:'54%',
  	position:'absolute',
  	top:'46%',
  	left:'50%',
  	transform:'translate(-50%,-50%)',
  },
  animationContainer: {
position:'relative',
overflow:'none'

  }

}));
export function Story() {
const classes = useStyles();

		return (
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  className={classes.root}
>
 <Grid item sm={6} xs={12}  >
<h1  >Enjoy on your TV.</h1>
<h2>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
    </Grid>
        <Grid item sm={6} xs={12} className={classes.animationContainer}>
<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="tv" />
<div className={classes.videoContainer}>
<video autoplay="autoplay"   loop="loop" playsinline muted >
<source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v" type="video/mp4" />
</video>
</div>
        </Grid>


      </Grid>



			)
}

export default Story;

