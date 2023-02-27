import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFacebook,
	faInstagram,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import logo from '../../images/logo.png';
import './styles.css';

const Footer = () => {
	return (
		<div className='footer'>
			<div className='logo-footer'>
				<img src={logo} alt='Logo' />
			</div>
			<div className='bottom'>
				<div className='conditions'>termos e condições</div>
				<div className='copyright'>
					<p>Feito por&nbsp;</p>
					<a href='https://www.linkedin.com/in/alex-d-sousa'>Alex Sousa</a>
				</div>
				<div className='social-medias'>
					<a href='https://www.facebook.com/alexanderdesignerbr'>
						<FontAwesomeIcon icon={faFacebook} />
					</a>
					<a href='https://www.linkedin.com/in/welton-alexandre/'>
						<FontAwesomeIcon icon={faLinkedin} />
					</a>
					<a href='https://www.instagram.com/alexander_dsgn/'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Footer;
