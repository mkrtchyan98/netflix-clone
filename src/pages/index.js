import React, { Component } from 'react'
import Header from '../components/Header';
import Footer from '../components/footer';
import Story from '../components/Story';
import SecondStory from '../components/SecondStory';
import ThirdStory from '../components/ThirdStory';
//import  Movie from './Movie';
class Main extends Component {
	render() {
		
		return (
			<div>
			<Header />
			//<Movie />
			<Story />
			<SecondStory />
			<ThirdStory />
			<Footer />
			</div>
			)
	}
}

export default Main;