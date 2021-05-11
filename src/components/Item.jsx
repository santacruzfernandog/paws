import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {

    return (
        <div className="col-md-2 mb-3">
            <div className="card shadow border-white">
                <img src={item.picture} className="img-fluid" alt=""/>
                <div className="">
                    <div className="card-body">
                    <small className="text-white bg-info rounded text-capitalize px-1">{item.category}</small>

                        <h5 className="card-title">{item.title}</h5>
                        <div className="d-flex justify-content-between">
                            <h5>$ {item.price}.-</h5>
                            <Link to={`/item/${item.id}`} type="button" className="btn btn-warning btn-sm float-right">Ver mas</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
