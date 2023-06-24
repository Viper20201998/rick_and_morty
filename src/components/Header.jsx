import React from 'react';
import '../assets/css/header-style.css';
import banner from '../assets/img/banner3.jpg';

export default function Header() {
	return (
			<div className='col-md-12'>
				<img src={banner} alt='banner' className='banner' />
			</div>
	);
}
