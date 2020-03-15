import React,{ Component } from 'react';
import logo from '../svg/logo.svg';
import { NavLink,Link } from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
//Media query
import { generateMedia } from 'styled-media-query';


class Header extends Component {
	render() {
		return (
			<HeaderComponent className="header-container">
			<div className="header-top">
		<Logo src={logo} alt="logo"/>
		<NavLink className="signIn-btn" to="/login" >Sign In</NavLink>
			</div>	
			{/*header Content */}	
			<div className="header-content">
			<Title>Unlimited movies, TV <br/> shows, and more.</Title>
			<SubTitle>Watch anywhere.Cancel anytime</SubTitle>
			<Link className="main-offer-btn">try it now
			<Icon className="icon-svg" icon ={ic_keyboard_arrow_right} size={37}/>
			</Link>
			</div>
			</HeaderComponent>
			)
	}
}
export default Header;

const customMedia = generateMedia({
	lgDesktop: '1350px',
	mdDesktop: '1150px',
	tablet: '960px',
	smtablet:'740px'
})

//Logo
const Logo = styled.img `
width:10rem;
height:3.5rem;
position:absolute;
top:25%;
left:50%;
transform:translate(-50%,-50%);
margin-left:0;
${customMedia.lessThan('tablet')`
left:20%;
`}
`;


// Header 
const HeaderComponent = styled.div`
.signIn-btn {
	right:0;
	margin:1.125rem 3% 0;
	padding:0.4375rem 1.0625rem;
	font-weight: 400;
	line-height:normal;
	border-radius:0.1875rem;
	font-size: 1rem;
	background: var(--main-red);
	position: absolute;
	translate: transform(-50%,-50%);
	cursor:pointer;
	transition:background 0.2s ease-in;
	&:hover {
 background: var(--main-red-hover);
	}
	${customMedia.lessThan('smtablet')`
	margin-top: 1.25rem;
	right:5%;
	`}
}
//Header-top
.header-top {
	position:relative;
	height: 10rem;
	z-index:1;
}
//header-content
.header-content {
	width:65%;
	position:relative;
	margin:4.5rem auto 0;
	display:flex;
	justify-content:center;
	align-content:center;
	text-align:center;
	flex-direction:column;
	z-index:2;
	${customMedia.lessThan('smtablet')`
	display:grid;
	grid-template-coloumns: repeat(3,60px);
	margin-top: 8rem;
	`}
}
//Main offer btn
.main-offer-btn {
	display:inline-block;
	background: var(--main-red);
	text-transform:uppercase;
	border:none;
	outline:none;
	margin 0 33%;
	padding:1.5rem;
	border-radius:0.1875rem;
	font-size:2rem;
	text-align:center;
	box-shadow:0 1px 0 rgba(0,0,0,0.45);
	transition:background 0.2s ease-in;
	cursor:pointer;
	&:hover{
		background: var(--main-red-hover)
	}
	${customMedia.lessThan('lgDesktop')`
	margin: 0 33%;
	font-size: 1.5rem;
	`}
	${customMedia.lessThan('mdDesktop')`
	margin: 0 25%;
	font-size: 1.5rem;
	`}
	${customMedia.lessThan('tablet')`
	margin: 0 20%;
	font-size: 1.3rem;
	`}
}
.icon-svg {
	vertical-align:bottom;
	margin-left:1.5rem;
	${customMedia.lessThan('smtablet')`
	display:none !important;
	font-size: 1.3rem;

	`}
}

`;

//Main Title
const Title = styled.h1`
margin: 0 0 1.2rem;
font-weight:700;
font-size:3.125rem;
line-height:1.1;
${customMedia.lessThan('tablet')`
	font-size: 2.6rem;
	`}
`;

//Header Content

//Subtitle
const SubTitle = styled.h2`
font-weight: normal;
font-size:1.625rem;
line-height:1.25rem;
margin:0 0 1.875rem;
${customMedia.lessThan('smtablet')`
	margin:0;
	font-size: 1.4rem;

	`}
`
