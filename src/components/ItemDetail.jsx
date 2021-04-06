import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = React.useState(0)

    const seAgrego = (num)=> {
        console.log(`Se agrego ${num} productos al carrito`)
        setCantidad(num)
    }

    return (
        <div>
            <div className="col-lg-9" key={item.id}>
                <div className="card mb-2 card-width">
                    <div id="" className="row no-gutters">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <img src={item.picture} alt="" className="img-fluid" width=""/>
                        </div>
                        <div className="col-md-6">
                            <div id="" className="card-body p-0 pl-2 pt-2">
                                <h5 className="d-inline">{item.title}</h5>
                                <br/>
                                <small className="text-muted">Numero de </small>
                                <p className="card-text d-inline">ID: {item.id}</p>
                                <p className="card-text">Breve descripcion: {item.descripcion}</p>
                                <small className="text-muted">Aprobado por </small>{item.random} familias
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card-body p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex">
                                        <h4 id="teacher-price" className="mb-0">${item.price}.-</h4><small className="text-muted pt-2 ml-2">/pet.</small>
                                    </div>
                                    <div className="d-inline-flex justify-content-center align-items-center">
                                        <i className="fas fa-star fa-sm px-2 text-warning"></i><h6 className="mb-0">4.9</h6>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    {
                                        cantidad === 0 ? (
                                                <ItemCount stock={12} initial={1} onAdd={seAgrego}/>
                                            ) : (
                                                <div className="mx-auto">
                                                    <Link to="/cart" className="btn btn-sm btn-warning mt-5">Terminar mi compra</Link>
                                                </div>
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
