import React, { useState } from 'react';
import './styles.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (name === '' || email === '' || message === '') {
			alert('Preencha todos os campos');
			return;
		}

		const templateParams = {
			from_name: name,
			message: message,
			email: email,
		};

		emailjs
			.send(
				'service_m9mt6im',
				'template_pk5mgh4',
				templateParams,
				'OPQmXCwZ30BCX98KW'
			)
			.then(
				(response) => {
					console.log('Email Enviado', response.status, response.text);
					setName('');
					setEmail('');
					setMessage('');
				},
				(error) => {
					console.log('Erro: ', error);
				}
			);
	};

	return (
		<div id='contact' className='container-contact'>
			<div className='contact-email'>
				<h1>Contato</h1>
				<form className='form' onSubmit={sendEmail}>
					<input
						className='input'
						type='text'
						placeholder='Digite seu nome'
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
					<input
						className='input'
						type='text'
						placeholder='Digite seu email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
					<textarea
						className='textarea'
						placeholder='Digite sua mensagem'
						onChange={(e) => setMessage(e.target.value)}
						value={message}
					/>
					<input className='button' type='submit' value='Enviar' />
				</form>
			</div>
			<div className='contact-general'>
				<div className='options'>
					<h2>Looking For an Excellent Businees Idea?</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the standard dummy text.
					</p>
				</div>
				<div className='address'>
					<h4>Our Headquarters</h4>
					<span>301 The Greenhouse, Custard, Factory, London, E2 8DY.</span>
					<span>+44 (0) 123 456 7890</span>
					<a href='mailto:no-reply@domain.com'>no-reply@domain.com</a>
				</div>
			</div>
		</div>
	);
};

export default Contact;
