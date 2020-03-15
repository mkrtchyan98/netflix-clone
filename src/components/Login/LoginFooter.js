import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { generateMedia } from 'styled-media-query';
class Footer extends Component {
	render() {
		return (
			<FooterContainer>
			<span style={{marginLeft:'15%',fontSize:'1.125rem'}}><Link>Questions? Contact us.</Link> </span>
			<div className="footer-columns">
			<ul>
			 <li>
			   <Link to="/">Gift Card Terms</Link>
			 </li>
			 </ul>
			 <ul>
			 <li>
			   <Link  to="/"> Terms of Use</Link>
			 </li>
			
			 </ul>
			  <ul>
			 <li>
			   <Link  to="/">Privacy Statement </Link>
			 </li>
			
			 </ul>
			 
			 </div>
			
			</FooterContainer>
			)
	}
}

export default Footer;
//Media query
const customMedia = generateMedia({
	
	tablet: '740px',
})

const FooterContainer = styled.footer`
justify-content: center;
background:rgba(0,0,0,0.8);
padding-top:3rem;
padding-bottom:6rem;
margin-top:6rem;
position:relative;
z-index:5;

.footer-columns {
	width:70%;
	margin:1rem auto 0;
	font-size: 0.9rem;
	overflow: auto;
	display: grid;
	grid-template-columns: repeat(4,1fr);
	${customMedia.lessThan('tablet')`
	grid-template-columns: repeat(2,1fr);

`}
}

ul li {
	list-style:none;
	line-height:2.5;
}

a{
	color:#999;
	font-size:0.9rem;
}
a:hover{
	text-decoration: underline;
	cursor: pointer;
}

p {
	text-decoration: underline;
	cursor:pointer;
}
`