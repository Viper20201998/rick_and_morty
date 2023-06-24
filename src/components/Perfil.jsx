import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import '../assets/css/perfil-style.css';

export default function Perfil() {
	const { isAuthenticated, user } = useAuth0();
	return (
		isAuthenticated && (
			<main className='container perfil'>
				<div className='card card-perfil d-flex align-items-center bg-transparent'>
					<img src={user.picture} className='card-img-top perfil-img' alt={user.name} />
					<div className='card-body'>
						<h5 className='card-title'>{user.name}</h5>
						<p className='card-text'>
							{user.email}
						</p>
						<a href='#' className='btn btn-primary'>
							Go somewhere
						</a>
					</div>
				</div>
			</main>
		)
	);
}
