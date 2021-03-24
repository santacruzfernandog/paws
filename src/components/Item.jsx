import React from 'react'
import products1 from '../img/products1.jpg'
import ItemCount from './ItemCount'

const Item = () => {

    const [item, setItem] = React.useState({})

    const producto = new Promise((resolve, reject) => {
        setTimeout(function(){
            const item = {
                id: 1,
                title: 'Nombre del Producto',
                price: 1520,
                pictureURL: products1
            }
            setItem(item)
        },2000)
        resolve(item)
    });

    producto.then(res => console.log(res))

    return (
        <div>
            <div className="col-lg-9">
                <div className="card mb-2 card-width">
                    <div id="" className="row no-gutters">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                            <img src={products1} alt="" className="img-fluid" width=""/>
                        </div>
                        <div className="col-md-6">
                            <div id="" className="card-body p-0 pl-2 pt-2">
                                <a className="text-dark">
                                    <h5 className="d-inline">Nombre del Producto</h5>
                                </a><br/>
                                <small className="text-muted">Otros datos: </small>
                                <p className="card-text d-inline">Dato X</p>
                                <p className="card-text">Breve descripcion: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quisquam sit quia assumenda ratione, quasi labore totam cum!</p>
                                <small className="text-muted">Veces compradas: </small>{Math.floor(Math.random() * 99) + 100}
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card-body p-2">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex">
                                        <h4 id="teacher-price" className="mb-0">$1000.-</h4><small className="text-muted pt-2 ml-2">/u.</small>
                                    </div>
                                    <div className="d-inline-flex justify-content-center align-items-center">
                                        <i className="fas fa-star fa-sm px-2 text-warning"></i><h6 className="mb-0">4.9</h6>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <ItemCount stock={8} initial={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
