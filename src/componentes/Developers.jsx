import React from 'react'
import ignacio from '../assets/ignacio.jpg'
import camilo from '../assets/camilo.jpeg'
import lester from '../assets/lester.png'



export default function Developers() {
    return (
    <>
    <div className='row container m-5 ps-5'>
    <div className="card col-md-3 m-3 shadow p-3 mb-5 bg-body-tertiary rounded m-4">
        <img src={lester} className="card-img-top img-fluid shadow " alt="lester"/>
        <div className="card-body">
            <h5 className="card-title">Lester Sandoval</h5>
            <p className="card-text">Desarrollador Web y estudiante de Kodigo.</p>
            <a href="#" className="btn btn-primary">More info</a>
        </div>
    </div>
    <div className="card col-md-3 m-3 shadow p-3 mb-5 bg-body-tertiary rounded m-4">
        <img src={camilo} className="card-img-top img-fluid shadow" alt="camilo"/>
        <div className="card-body">
            <h5 className="card-title">Camilo Alvarez</h5>
            <p className="card-text">Desarrollador Web y estudiante de Kodigo.</p>
            <a href="#" className="btn btn-primary">More info</a>
        </div>
    </div>
    <div className="card col-md-3 m-3 shadow p-3 mb-5 bg-body-tertiary rounded m-4">
        <img src={ignacio} className="card-img-top img-fluid shadow" alt="ignacio"/>
        <div className="card-body">
            <h5 className="card-title">Ignacio Cortez</h5>
            <p className="card-text">Desarrollador Web y estudiante de Kodigo.</p>
            <a href="#" className="btn btn-primary">More info</a>
        </div>
    </div> 
    </div>
    
    </>
    )
}
