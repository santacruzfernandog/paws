import React from 'react'
import ourpetslogo from '../img/ourpetslogobrand.png'
import CartWidget from './CartWidget'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <div className="navbar-brand">
                    <img src={ourpetslogo} width="100" alt=""/>
                    <h2 id="my-brand" className="text-center text-black m-0">Aw.Pets</h2>
                </div>

                <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <div className="d-flex flex-column">
                        <div className="input-group input-group-sm">
                            <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar servicios" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-light" type="button" id="button-addon2">
                                    <i className="fas fa-search fa-lg"></i>
                                </button>
                            </div>
                        </div>

                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link to={''} className="nav-link h6 text-light dropdown-toggle" id="navbarDropdownMarcas" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mascotas
                                </Link>
                                <div className="dropdown-menu mr-5" aria-labelledby="navbarDropdownMarcas">
                                    <Link to={''} className="dropdown-item">Perros</Link>
                                    <Link to={''} className="dropdown-item">Gatos</Link>
                                    <Link to={''} className="dropdown-item">Peces</Link>
                                    <Link to={''} className="dropdown-item">Roedores</Link>
                                    <Link to={''} className="dropdown-item">Aves</Link>
                                    <Link to={''} className="dropdown-item">Reptiles</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={''} className="nav-link h6 text-light" role="button">
                                    Obra Social
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to={''} className="nav-link h6 text-light dropdown-toggle" id="navbarDropdownServicios" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Servicios
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownServicios">
                                    <Link to={''} className="dropdown-item">Adopciones</Link>
                                    <Link to={''} className="dropdown-item">Adiestramiento</Link>
                                    <Link to={''} className="dropdown-item">Calendario de vacunacion</Link>
                                    <Link to={''} className="dropdown-item">Capacitaciones</Link>
                                    <Link to={''} className="dropdown-item">Guarderia</Link>
                                    <Link to={''} className="dropdown-item">Veterinario</Link>
                                    {/* <div className="dropdown-divider"></div>
                                    <Link to={''} className="dropdown-item">Obra Social</Link> */}
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to={''} className="nav-link h6 text-light">Consultas</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="">
                    <CartWidget totalProductos={0}/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
