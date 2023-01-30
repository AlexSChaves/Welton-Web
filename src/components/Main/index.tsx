import React from 'react';
import About from './About';
import Carroussel from './Carroussel';
import './styles.css';

const Main = () => {
	return (
		<div className='main'>
			<Carroussel />
			<About />
		</div>
	);
};

export default Main;
