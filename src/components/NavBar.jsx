import React from 'react'
import ourpetslogo from '../img/ourpetslogobrand.png'
import CartWidget from './CartWidget'

import cathead from '../img/headcat.jpg'
import doghead from '../img/doghead.jpg'

import { Link } from 'react-router-dom'

const NavBar = () => {

    //const [productsOn, setProductsOn] = React.useState(false)

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
                                <Link to='/' className="nav-link h5 text-light">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to='' className="nav-link h5 text-light dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Productos
                                </Link>
                                
                                <div className="dropdown-menu border border-warning" aria-labelledby="navbarDropdown">
                                    <div className="d-flex justify-content-center align-items-end">
                                        <Link to='/category/gatos' className="mr-4">
                                            <img src={cathead} width="100" alt="" />
                                        </Link>
                                        <Link to='/category/perros' className="">
                                            <img src={doghead} width="100" alt="" />
                                        </Link>
                                    </div>
                                    
                                    <h2 className="border-top border-warning text-center text-black m-0">Gatos | Perros</h2>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/servicios' className="nav-link h5 text-light">
                                    Servicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/category/veterinario' className="nav-link h5 text-light">
                                    Veterinario
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
