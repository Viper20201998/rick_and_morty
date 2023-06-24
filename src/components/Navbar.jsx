import React from 'react';
import Logo from '../assets/img/logo.png';
import '../assets/css/navbar-style.css';
import Login from './Login';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Perfil from './Perfil';
import Home from './Home';
import Header from './Header';
import Search from '../componentes/Search';

export default function Navbar() {
	const { isAuthenticated, user, logout } = useAuth0();

	return (
		<BrowserRouter>
			<Header />
				<nav className='navbar navbar-expand-lg bg-transparent navbar-position'>
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
									{isAuthenticated ? (
										<>
											<Link
												to='/search'
												className='nav-link nav-a'
											>
												Buscar Personajes
											</Link>
										</>
									) : (
										<>
											<a
												className='nav-link nav-a'
												onLoad={(e) =>
													e.stopPropagation()
												}
												onClick={() =>
													alert('Debes Registrarte')
												}
											>
												Buscar Personajes
											</a>
										</>
									)}
								</li>
							</ul>
							{isAuthenticated ? (
								<>
									<li className='nav-item nav-perfil me-5'>
										<img
											src={user.picture}
											className='img-perfil dropdown-toggle'
											data-bs-toggle='dropdown'
											aria-expanded='false'
											alt=''
										/>
										<ul className='dropdown-menu bg-transparent border border-warning-subtle ul-sub-perfil'>
											<li>
												<p className='dropdown-item text-warning'>
													{user.name}
												</p>
											</li>
											<li>
												<Link
													to='/perfil'
													className='dropdown-item text-warning'
												>
													Perfil
												</Link>
											</li>
											<li>
												<a
													className='dropdown-item text-danger'
													href=''
													onClick={() => {
														logout({
															logoutParams: {
																returnTo:
																	window
																		.location
																		.origin,
															},
														});
													}}
												>
													Cerrar Sesion
												</a>
											</li>
										</ul>
									</li>
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
				<Route path='/search' element={<Search />} />
				<Route path='/perfil' element={<Perfil />} />
			</Routes>
		</BrowserRouter>
	);
}
