import React from 'react';
import '../assets/css/header-style.css';
import banner from '../assets/img/banner3.jpg';

export default function Header() {
	return (
			<div className='container-banner'>
				<img src={banner} alt='banner' className='banner' />
			</div>
	);
}
