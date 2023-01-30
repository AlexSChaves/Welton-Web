import React from 'react';
import './styles.css';
import owner from '../../../images/profile.jpg';

const About = () => {
	return (
		<div id='About' className='about'>
			<div className='container-about'>
				<h1>Lorem ipsum dolor sit amet</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcae</p>
			</div>
			<div className='container-photo'>
				<img src={owner} alt='Foto do Welton' />
			</div>
		</div>
	);
};

export default About;
