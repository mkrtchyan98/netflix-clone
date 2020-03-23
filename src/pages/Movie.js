import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {
	render() {
		return (
			<div className="main-login-container">
			<div className="header-top">
			<Link to="/movies">Movies</Link>
			</div>		
			
			</div>
			)
	}
}

export default Movie;
