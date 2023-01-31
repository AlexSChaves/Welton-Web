import React from 'react';
import './styles.css';
import img01 from './img/DESTAQUE_CATAVENTO.png';
import img02 from './img/DESTAQUE_LIFT.png';
import img03 from './img/DESTAQUE_LUCIUS.png';
import img04 from './img/DESTAQUE_SMMK.png';

const Portfolio = () => {
	return (
		<div id='portfolio' className='container-portfolio'>
			<div className='portfolio-apresentation'>
				<h1>Portfolio</h1>
				<span>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
					voluptate autem laborum eos, cum reprehenderit corrupti dicta quo
					recusandae qui, temporibus alias accusantium? Magni libero architecto
					veniam exercitationem voluptatem nulla!
				</span>
			</div>
			<div className='portfolio-images'>
				<img src={img01} alt='catavento' />
				<img src={img02} alt='lift' />
				<img src={img03} alt='lucius' />
				<img src={img04} alt='smmk' />
			</div>
		</div>
	);
};

export default Portfolio;
