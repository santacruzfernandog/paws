import React from 'react'
import ourpetslogo from '../img/ourpetslogobrand.png'
import CartWidget from './CartWidget'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning">
                <Link to='/' className="navbar-brand">
                    <img src={ourpetslogo} width="100" alt=""/>
                    <h2 id="my-brand" className="text-center text-black m-0">Aw.Pets</h2>
                </Link>

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

                        <ul id="ul-nav" className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/inicio' className="nav-link h5 text-light">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/servicios' className="nav-link h5 text-light">
                                    Servicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/refugio' className="nav-link h5 text-light">
                                    Refugio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/wellness' className="nav-link h5 text-light" role="button">
                                    +Wellness
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/consultas' className="nav-link h5 text-light">
                                    Consultas
                                </Link>
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
