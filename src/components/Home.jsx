import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function Home() {
	const { user } = useAuth0();

	return <div className='Home_bienvenida_style'>Bienvenidos, en esta pagina encontraras todos los personajes de rick and morty</div>;
}
