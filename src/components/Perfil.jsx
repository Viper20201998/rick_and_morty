import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import '../assets/css/perfil-style.css'

export default function Perfil() {
	const { isAuthenticated, user } = useAuth0();
	return (
		isAuthenticated && (
			<div className='bg-dark text-center text-white perfil'>
				<div className='container'>
					<img src={user.picture} alt={user.name} className='perfil-img' />
					<h2>Usuario: {user.name}</h2>
					<p>Correo: {user.email}</p>
				</div>
			</div>
		)
	);
}
