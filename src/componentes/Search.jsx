import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import '../assets/css/search-style.css';

export default function Search() {
	const [personajes, setPersonajes] = useState([]);
	const [name, setName] = useState('');
	const [status, setStatus] = useState('');

	const { isAuthenticated } = useAuth0();

	const getCharacterBy = () => {
		axios
			.get(
				`https://rickandmortyapi.com/api/character?name=${name}&status=${status}`
			)
			.then((response) => {
				console.log(response.data);
				setPersonajes(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleName = (i) => {
		console.log(i.target.value);
		setName(i.target.value);
	};

	const handleStatus = (i) => {
		console.log(i.target.value);
		setStatus(i.target.value); 
	};

	const handleSubmit = (i) => {
		i.preventDefault();
		getCharacterBy();
	}
	useEffect(() =>{
		getCharacterBy();
	},[]);
	return isAuthenticated ? (
		<div className='container-fluid search'>
			<h1 className='text-center'>Buscador de personajes</h1>
			<h2 className='text-start ps-5 pt-3'>
				Ingresa el nombre o estado de tu personaje favorito:
			</h2>
			<h3 className='text-start ps-5 pt-3'>
				Ejemplo: Rick Sanchez y Vivo, Muerto o Desconocido
			</h3>
			<form className='text-start ps-5 pt-3' onSubmit={handleSubmit}>
				<label className='mb-3'>
					Ingresa el nombre o estado del personaje
				</label>
				<input
					type='text'
					className='form-control p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end'
					onChange={handleName}
				/>
				<select
					name=''
					id=''
					className='my-3 form-select form-select-sm'
					aria-label='.form-select-sm example'
					onChange={handleStatus}
				>
					<option value=''>-</option>
					<option value='alive'>Vivo</option>
					<option value='dead'>Muerto</option>
					<option value='unknown'>Desconocido</option>
				</select>
				<br />
				<button className='btn btn-secondary' type='submit'>
					Buscar Personaje
				</button>
			</form>
			{personajes === '404' ? (
				<div className='alert alert-info' role='alert'>
					No se encontraron coincidencias.
				</div>
			) : (
				<>
					<div className='row grid mt-3 p-3'>
						{personajes.map((personaje, indice) => {
							return (
								<div
									className='card col-12  col-sm-6 col-md-4 col-lg-3 my-2'
									key={indice}
								>
									<img
										src={personaje.image}
										className='card-img-top img-fluid'
										alt=''
									/>
									<div className='card-body '>
										<h5 className='card-title'>
											{personaje.name}
										</h5>
										<ul className='card-text'>
											<li>Estado: {personaje.status}</li>
											<li>
												Especie: {personaje.species}
											</li>
											<li>Genero: {personaje.gender}</li>
										</ul>
									</div>
								</div>
							);
						})}
					</div>
				</>
			)}
		</div>
	) : (
		<p>Debes iniciar session</p>
	);
}
