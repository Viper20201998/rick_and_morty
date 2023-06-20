import React from 'react';
import Logo from '../assets/img/logo.png';
import '../assets/css/navbar-style.css';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';
import Logout from './Logout';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Perfil from './Perfil';
import Home from './Home';

export default function Navbar() {
	const { isAuthenticated } = useAuth0();

	return (
		<BrowserRouter>
			<nav className='navbar navbar-expand-lg bg-light navbar-border'>
				<div className='container-fluid'>
					<img className='logo' src={Logo} />

					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div
						className='collapse navbar-collapse'
						id='navbarSupportedContent'
					>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
							<li className='nav-item ms-3 navbtn'>
								<Link
									to='/'
									className='nav-link nav-a'
									aria-current='page'
								>
									Home
								</Link>
							</li>
							<li className='nav-item ms-3 navbtn'>
								<a className='nav-link nav-a' href='#'>
									Link
								</a>
							</li>
							<li className='nav-item navbtn'>
								<Link
									to='/perfil'
									className='Link nav-link nav-a'
								>
									Perfil de Usuario
								</Link>
							</li>
						</ul>
						{isAuthenticated ? (
							<>
								<Logout />
							</>
						) : (
							<>
								<Login />
							</>
						)}
					</div>
				</div>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/perfil' element={<Perfil />} />
			</Routes>
		</BrowserRouter>
	);
}
