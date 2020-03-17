import React, { Component } from 'react';
import logo  from '../svg/logo.svg';
import styled from 'styled-components';
import LoginForm from '../components/Login/LoginForm';
import LoginFooter from '../components/Login/LoginFooter';
import { generateMedia } from 'styled-media-query';

class Login extends Component {
	render() {
		return (
			<div className="main-login-container">
			<div className="header-top">
			<Logo src={logo} alt="logo" className="logo" />
			</div>		
			<LoginForm />
			<LoginFooter />
			</div>
			)
	}
}

export default Login;

const customMedia = generateMedia({
	tablet:'640px',
	lgTablet: '740px'
})


const Logo = styled.img`
width:11rem;
position:absolute;
top:25%;
left:15%;
transform:translate(-50%,-50%);
margin-left: 0;
${customMedia.lessThan('tablet')`
top:45%;
left:23%;
width:7rem;
	`}
`;