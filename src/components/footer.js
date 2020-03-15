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
			   <Link>FAQ</Link>
			 </li>
			 <li>
			   <Link>Media Center</Link>
			 </li>
			 <li>
			   <Link>Ways to Watch</Link>
			 </li>
			 <li>
			   <Link>Cookie Preferences</Link>
			 </li>
			  <li>
			   <Link>Speed Test</Link>
			 </li>
			 </ul>
			 <ul>
			 <li>
			   <Link>Help Center</Link>
			 </li>
			 <li>
			   <Link>Investor Relations </Link>
			 </li>
			 <li>
			   <Link>Terms of Use</Link>
			 </li>
			 <li>
			   <Link> Corporate Information</Link>
			 </li>
			  <li>
			   <Link>Legal Notices</Link>
			 </li>
			 </ul>
			  <ul>
			 <li>
			   <Link>Account </Link>
			 </li>
			 <li>
			   <Link> Jobs </Link>
			 </li>
			 <li>
			   <Link>  Privacy</Link>
			 </li>
			 <li>
			   <Link>  Contact Us</Link>
			 </li>
			  <li>
			   <Link> Netflix Originals</Link>
			 </li>
			 </ul>
			 
			 </div>
			 <span className="lang">
			 Netflix Armenia
			 </span>
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
background:var(--main-deep-dark);
padding-top:10rem;
padding-bottom:3rem;
color:#999;


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
}
a:hover{
	text-decoration: underline;
	cursor: pointer;
}
.lang{
	font-size: 0.9rem;
	background: transparent;
    margin-left:15%;
}
`