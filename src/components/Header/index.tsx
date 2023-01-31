import './styles.css';
import logo from '../../images/logo.png';
import { useState } from 'react';

const Header = () => {
	const [navbar, setNavbar] = useState(false);

	const changeBackGround = () => {
		if (window.scrollY >= 1) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	window.addEventListener('scroll', changeBackGround);

	return (
		<header className={navbar ? 'active' : 'normal'}>
			<div className='logo'>
				<img src={logo} alt='Logo' />
			</div>
			<div className='border-links'>
				<ul className='links'>
					<li>
						<a href='#about'>SOBRE</a>
					</li>
					<li>
						<a href='#services'>SERVICES</a>
					</li>
					<li>
						<a href='http://localhost:3000'>PORTFOLIO</a>
					</li>

					<li>
						<a href='#contact'>CONTACT</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
