import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export default function Home() {
	const { user } = useAuth0();

	return <div></div>;
}
