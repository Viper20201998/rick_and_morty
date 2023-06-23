import React, { useState } from 'react'
import axios from 'axios' 

export default function Personaje() {

    const [personajes, setPersonajes] = useState([]);
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");

    const getCharacterBy = () => {
        axios.get(`https://rickandmortyapi.com/api/character?name=${name}&status=${status}`).then((response) => {
            console.log(response.data.results);
            setPersonajes(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleName = (i) => {
        console.log(i.target.value);
        setName(i.target.value);
    }

    const handleStatus = (i) => {
        console.log(i.target.value);
        setStatus(i.target.value);
    }

    const handleSubmit = (i) => {
        getCharacterBy();
        i.preventDefault();
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Buscador de personajes</h1>
            <h2 className='text-start ps-5 pt-3'>Ingresa el nombre o estado de tu personaje favorito:</h2>
            <h3 className='text-start ps-5 pt-3'>Ejemplo: Rick Sanchez y Vivo, Muerto o Desconocido</h3>
            <form  className='text-start ps-5 pt-3' onSubmit={handleSubmit}>
                    <label className='mb-3'>Ingresa el nombre y estado del personaje</label>
                    <input type="text" className='form-control p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end' onChange={handleName}/>
                    <select name="" id="" className='my-3 form-select form-select-sm' aria-label=".form-select-sm example" onChange={handleStatus}>
                        <option value="alive">Vivo</option>
                        <option value="dead">Muerto</option>
                        <option value="unknown">Desconocido</option>
                    </select>
                    <br />
                    <button className='btn btn-secondary' type='submit'>Buscar Personaje</button>
            </form>
            {
                personajes.length === 0 ? (
                    <div className="alert alert-info" role="alert">
                        No se encontraron coincidencias.
                    </div>
                ) : (
                    <>
                    {
                        personajes.map((personaje, indice) => {
                            return (
                                <h2>{personaje.name}</h2>
                                // <div className="card" style="width: 18rem;">
                                // <img src="..." className="card-img-top" alt=""/>
                                // <div className="card-body">
                                //     <h5 className="card-title">{personaje.name}</h5>
                                //     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                // </div>
                                // </div>
                
                            )
                        })
                    }
                    </>
                )
            }
        </div>
    )
}
