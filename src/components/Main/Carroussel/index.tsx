import React, { useState } from 'react';
import './styles.css';

const Carroussel = () => {
	const slides = [
		{
			title: 'Creative Agency',
			subtitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nibh.',
			url: 'http://localhost:3000/images/carrossel01.png',
		},
		{
			title: 'Tangible Results',
			subtitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nibh.',
			url: 'http://localhost:3000/images/carrossel02.png',
		},
		{
			title: 'Premium Designs',
			subtitle:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nibh.',
			url: 'http://localhost:3000/images/carrossel03.png',
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
