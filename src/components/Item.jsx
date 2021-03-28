import React from 'react'
import ItemDetailContainer from './ItemDetailContainer'

const Item = ({item}) => {

    const [mostrarDetalle, setMostrarDetalle] = React.useState(false)

    const handleDetalle = ()=> {
        if(mostrarDetalle){
            setMostrarDetalle(false)
        } else {
            setMostrarDetalle(true)
        }
    }

    return (
        <>
            <div className="col-md-3 card mb-2">
                <img src="..." className="card-img-top" alt=""/>
                <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text">$ {item.precio}.-</p>
                    <button type="button" className="btn btn-primary btn-sm" onClick={handleDetalle}>Detalle</button>
                </div>
            </div>

            {mostrarDetalle && <ItemDetailContainer/>}
        </>

    )
}

export default Item
