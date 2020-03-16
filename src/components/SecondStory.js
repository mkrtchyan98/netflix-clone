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
      height:'100%'
    }
  },
 
  animationContainer: {
position:'relative',
overflow:'none'

  }

}));
 function SecondStory() {
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
<h1  >Download your shows to watch on the go.</h1>
<h2>Save your data and watch all your favorites offline.</h2>
    </Grid>
        <Grid item xs={12} sm={6} className={classes.animationContainer}>
<img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="mobile" />

        </Grid>

      </Grid>

)
	}

export default SecondStory;