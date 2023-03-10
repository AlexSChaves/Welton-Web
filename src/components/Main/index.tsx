import React from 'react';
import About from './About';
import Carroussel from './Carroussel';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Services from './Services';
import './styles.css';

const Main = () => {
	return (
		<div className='main'>
			<Carroussel />
			<About />
			<Services />
			<Portfolio />
			<Contact />
		</div>
	);
};

export default Main;
