import React from 'react'
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
       
    },
    
  },

  animationContainer: {
position:'relative',
overflow:'none'

  },

   videoContainer: {
    width:'100%',
    height:'100%',
    maxWidth:'63%',
    maxHeight:'47%',
    position:'absolute',
    top:'34%',
    left:'50%',
    transform:'translate(-50%,-50%)',
      [theme.breakpoints.down('sm')]: {
    width:'100%',
    height:'100%',
    maxWidth:'63%',
    maxHeight:'47%',
    position:'absolute',
    top:'12%',
    left:'50%',
    transform:'translate(-50%,-50%)',
  }
    
  },

}));


 function ThirdStory() {
const classes = useStyles();
		return (
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  className={classes.root}
>
 <Grid item sm={6} xs={12} >
<h1  >Download your shows to watch on the go.</h1>
<h2>Save your data and watch all your favorites offline.</h2>
    </Grid>
        <Grid item sm={6} xs={12} className={classes.animationContainer}>
<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="mobile" />
<div className={classes.videoContainer}>
<video autoplay="autoplay"   loop="loop" playsinline="true" >
<source src=" https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
</video>
</div>
        </Grid>


      </Grid>

)
	}

export default ThirdStory;