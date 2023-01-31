import React, { useState } from 'react';
import img01 from './img/carrossel01.png';
import img02 from './img/carrossel02.png';
import img03 from './img/carrossel03.png';
import './styles.css';

const Carroussel = () => {
	const slides = [
		{
			title: 'Creative Agency',
			subtitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nibh.',
			url: img01,
		},
		{
			title: 'Tangible Results',
			subtitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nibh.',

			url: img02,
		},
		{
			title: 'Premium Designs',
			subtitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nibh.',

			url: img03,
		},
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const slideStyles = {
		width: '100%',
		height: '100%',
		// borderRadius: '10%',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundImage: `url(${slides[currentIndex].url})`,

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
	};

	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (index: number) => {
		setCurrentIndex(index);
	};

	const dotsContainerStyles = {
		display: 'flex',
		justifyContent: 'center',
	};

	return (
		<div className='carrossel'>
			<div className='sliderStyles'>
				<div className='leftArrowStyles' onClick={goToPrevious}>
					←
				</div>
				<div className='rightArrowStyles' onClick={goToNext}>
					→
				</div>
				<div style={slideStyles}>
					<div style={dotsContainerStyles}>
						{slides.map((slide, index) => (
							<div
								key={index}
								className='dotStyles'
								onClick={() => goToSlide(index)}
							>
								○
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Carroussel;
