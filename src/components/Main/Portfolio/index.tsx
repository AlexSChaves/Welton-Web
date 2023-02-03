import React from 'react';
import './styles.css';
import img01 from './img/01.jpg';
import img02 from './img/02.png';
import img03 from './img/03.png';
import img04 from './img/04.png';
import img05 from './img/05.png';
import img06 from './img/06.png';
import img07 from './img/07.png';
import img08 from './img/08.png';
import img09 from './img/09.png';
import img10 from './img/10.png';
import img11 from './img/11.jpg';
import img12 from './img/12.jpg';
import img13 from './img/13.png';
import img14 from './img/14.png';

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
				<div className='item-galeria w-2 h-2'>
					<img src={img01} alt='' />
				</div>
				<div className='item-galeria w-2 h-1'>
					<img src={img02} alt='' />
				</div>
				<div className='item-galeria w-1 h-2'>
					<img src={img03} alt='' />
				</div>
				<div className='item-galeria w-1 h-1'>
					<img src={img04} alt='' />
				</div>
				<div className='item-galeria w-2 h-2'>
					<img src={img05} alt='' />
				</div>
				{/* <div>
					<img src={img06} alt='' />
				</div> */}
				<div className='item-galeria w-1 h-2'>
					<img src={img07} alt='' />
				</div>
				<div className='item-galeria w-1 h-1'>
					<img src={img08} alt='' />
				</div>
				{/* <div>
					<img src={img09} alt='' />
				</div> */}
				{/* <div>
					<img src={img10} alt='' />
				</div> */}
				<div className='item-galeria w-1 h-1'>
					<img src={img11} alt='' />
				</div>
				<div className='item-galeria w-1 h-1'>
					<img src={img12} alt='' />
				</div>
				{/* <div className="item-galeria w-1 h-1">
					<img src={img13} alt='' />
				</div> */}
				{/* <div>
					<img src={img14} alt='' />
				</div> */}
			</div>
		</div>
	);
};

export default Portfolio;
