import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function Perfil() {
	const { isAuthenticated, user } = useAuth0();
	return (
		isAuthenticated && (
			<div className='bg-dark text-center text-white'>
				<div className='container'>
					<img src={user.picture} alt={user.name} />
					<h2>Usuario: {user.name}</h2>
					<p>Correo: {user.email}</p>
				</div>
			</div>
		)
	);
}
