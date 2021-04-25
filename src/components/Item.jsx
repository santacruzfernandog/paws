import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {

    return (
        <div className="col-md-6">
            <div className="card mb-3 shadow border-white" /* style={{width: "540px"}} */>
                <div className="row no-gutters">
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <i className="fas fa-paw fa-7x text-dark"></i>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">
                                Breve descripcion: {item.descripcion}
                            </p>
                            <small className="text-dark bg-warning shadow rounded">Awesome Pets</small>
                            <Link to={`/item/${item.id}`} type="button" className="btn btn-warning btn-sm float-right">Ver mas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
