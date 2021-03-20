import React from 'react'
import imagen from '../img/gold-paws.png'
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="navbar-brand">
                    <img src={imagen} width="100" alt=""/>
                    <h5 className="text-center text-warning">AmongPaws</h5>
                </div>

                <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <div className="d-flex flex-column">
                        <div className="input-group input-group-lg">
                            <input type="text" className="form-control" placeholder="Buscar productos" aria-label="Buscar productos" aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-light" type="button" id="button-addon2">
                                    <i className="fas fa-search fa-lg"></i>
                                </button>
                            </div>
                        </div>

                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link h5 text-light dropdown-toggle" href="#" id="navbarDropdownMarcas" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mascotas
                                </a>
                                <div className="dropdown-menu mr-5" aria-labelledby="navbarDropdownMarcas">
                                    <a className="dropdown-item" href="#">Perros</a>
                                    <a className="dropdown-item" href="#">Gatos</a>
                                    <a className="dropdown-item" href="#">Peces</a>
                                    <a className="dropdown-item" href="#">Roedores</a>
                                    <a className="dropdown-item" href="#">Aves</a>
                                    <a className="dropdown-item" href="#">Reptiles</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link h5 text-light dropdown-toggle" href="#" id="navbarDropdownMarcas" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Marcas
                                </a>
                                <div className="dropdown-menu mr-5" aria-labelledby="navbarDropdownMarcas">
                                    <a className="dropdown-item" href="#">Purina</a>
                                    <a className="dropdown-item" href="#">Royal Canin</a>
                                    <a className="dropdown-item" href="#">Pedigree</a>
                                    <a className="dropdown-item" href="#">Eukanuba</a>
                                    <a className="dropdown-item" href="#">Whiskas</a>
                                    <a className="dropdown-item" href="#">Vital Can</a>
                                    <a className="dropdown-item" href="#">Old Prince</a>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link h5 text-light dropdown-toggle" href="#" id="navbarDropdownServicios" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Servicios
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownServicios">
                                    <a className="dropdown-item" href="#">Adopciones</a>
                                    <a className="dropdown-item" href="#">Adiestramiento</a>
                                    <a className="dropdown-item" href="#">Calendario de vacunacion</a>
                                    <a className="dropdown-item" href="#">Capacitaciones</a>
                                    <a className="dropdown-item" href="#">Guarderia</a>
                                    <a className="dropdown-item" href="#">Veterinario</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Obra Social</a>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link h5 text-light" href="#">Ofertas</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="p-5">
                    <CartWidget totalProductos={5}/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
