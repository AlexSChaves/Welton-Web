import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDesktopAlt,
	faPenRuler,
	faEarth,
	faMapMarked,
} from '@fortawesome/free-solid-svg-icons';
import photo from '../../../images/moodboard.jpg';
import './styles.css';

const Services = () => {
	return (
		<div id='services' className='services'>
			<div className='services-photo'>
				<img src={photo} alt='grifo' />
			</div>
			<div className='services-all'>
				<h1>Our Services</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the standard dummy text.
				</p>
				<div className='services-work'>
					<div className='service-one'>
						<div className='title'>
							<FontAwesomeIcon icon={faDesktopAlt} />
							<h3>Graphic Design</h3>
						</div>
						<div>
							<p className='text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
								aperiam laudantium dolores
							</p>
						</div>
					</div>
					<div className='service-one'>
						<div className='title'>
							<FontAwesomeIcon icon={faPenRuler} />
							<h3>Web Design</h3>
						</div>
						<div className='text'>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
								aperiam laudantium dolores
							</p>
						</div>
					</div>
					<div className='service-one'>
						<div className='title'>
							<FontAwesomeIcon icon={faEarth} />
							<h3>Branding</h3>
						</div>
						<div>
							<p className='text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
								aperiam laudantium dolores
							</p>
						</div>
					</div>
					<div className='service-one'>
						<div className='title'>
							<FontAwesomeIcon icon={faMapMarked} />
							<h3>Photography</h3>
						</div>
						<div>
							<p className='text'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
								aperiam laudantium dolores
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
