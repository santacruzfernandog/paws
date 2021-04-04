import React from 'react'
import { Link } from 'react-router-dom'


const CardsMainPage = ({ titulo, descripcion, imagen, url }) => {
    return (
        <div className="card border-white shadow mb-3">
            <div className="row no-gutters">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <img src={imagen} className="" width="200" alt=""/>
                </div>
                <div className="col-md-9 card-body d-flex flex-column justify-content-between">
                    <Link to={url} style={{ textDecoration: 'none' }}>
                        <h5 id="main-card-title" className="card-title text-warning mx-3">Aw.Pets: {titulo}</h5>
                    </Link>
                    <p className="card-text mx-3">{descripcion}</p>
                    <div className="mr-3">
                        <Link to={url}>
                            <button type="button" className="btn btn-warning btn-sm float-right">Ver mas</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardsMainPage
