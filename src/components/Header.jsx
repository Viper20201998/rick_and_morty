import React from 'react';
import '../assets/css/header-style.css';
import banner from '../assets/img/banner.jpg';
import Navbar from './Navbar'

export default function Header() {
	return (
		<div className='col-md-12'>
			<div className='container-banner'>
				<img src={banner} alt='banner' className='banner' />
			</div>
			<Navbar/>
		</div>
	);
}
