import React, {useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({item}) => {

    const [cantidad, setCantidad] = React.useState(0)
    const {addItem} = useContext(CartContext)
    const { itemId } = useParams()

    const seAgrego = (num)=> {
        setCantidad(num)
        addItem(item,num)
    }

    return (
        <div className="row mt-5">
            <div className="col-md-5 d-flex justify-content-center border border-warning">
                <img src={item.picture} className="img-fluid" alt=""/>
            </div>
            <div className="col-md-7">
                <p className="text-muted">ID: {itemId}</p>
                <h6 className="text-capitalize text-info m-0">{item.category}</h6>
                <h2 className="text-dark">{item.title}</h2>
                <p className="lead">{item.descripcion}</p>
                <h6><i class="fas fa-star text-warning fa-lg px-1"></i> {item.random} Opiniones</h6>

                <h1 className="text-center text-darkblue">$ {item.price}.-</h1>
                <div id="card-buttons" className="d-flex flex-column justify-content-center align-items-center">
                    {
                        cantidad === 0 ? (
                            <ItemCount stock={12} initial={1} onAdd={seAgrego}/>
                        ) : (<>
                                <div className="mx-auto">
                                    <Link to="/cart" className="btn btn-sm btn-warning mt-5">
                                        Terminar mi compra
                                    </Link>
                                </div>

                                <div className="mx-auto">
                                    <Link to="/" className="btn btn-sm btn-success mt-2">
                                        Seguir comprando
                                    </Link>
                                </div>
                            </>
                        )
                    }
                </div>
                <hr/>
                
                <div className="">
                    <h6 className="text-center m-0">Medios de Pago</h6>
                    <small className="d-block text-center mb-1">abona a traves de</small>
                    <div className="">
                        <div className="d-flex justify-content-center align-items-center">
                            <i className="far fa-money-bill-alt fa-lg pr-3"></i>
                            <span className="">Efectivo o Tarjeta</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <i className="far fa-credit-card fa-lg pr-3"></i>
                            <span className="">Transferencia Bancaria</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <i className="fas fa-qrcode fa-lg pr-3"></i>
                            <span className="">MercadoPago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
